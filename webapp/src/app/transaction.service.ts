import { Injectable } from '@angular/core';
import { SortingOrder, SortingPreference } from '../shared/types/SortingPreference';
import { Transaction } from '../shared/types/Transaction';
import { TransactionFilter } from '../shared/types/TransactionFilter';
import { HttpClient } from '@angular/common/http';

class ResponseData {
  data: Array<Transaction>;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  http: HttpClient;

  transactions: Array<Transaction> = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchTransactions(): Promise<ResponseData> {
    return this.http.get<ResponseData>('assets/transactions.json').toPromise();
  }

  filter(transactions: Array<Transaction>, filter: TransactionFilter): Array<Transaction> {
    let result = [...transactions];

    if (filter.searchBy) {
      result = result
        .filter(t => new RegExp(filter.searchBy, 'i').test(t.merchant.name));
    }

    if (filter.sortingPreferences && filter.sortingPreferences.length) {
      filter.sortingPreferences
        .filter(preference => preference.order !== SortingOrder.NONE)
        .forEach(({ order, prop }) => {
        if (order !== SortingOrder.NONE) {
          result = result.sort((t1, t2) => {
            if (prop === 'date') {
              const prop1 = new Date(t1.dates.valueDate).getTime();
              const prop2 = new Date(t2.dates.valueDate).getTime();
              return (order === SortingOrder.ASC)
                ? prop1 - prop2
                : prop2 - prop1;
            } else if (prop === 'amount') {
              const prop1 = Number(t1.transaction.amountCurrency.amount);
              const prop2 = Number(t2.transaction.amountCurrency.amount);
              return (order === SortingOrder.ASC)
                ? prop1 - prop2
                : prop2 - prop1;
            } else if (prop === 'beneficiary') {
              const prop1 = t1.merchant.name;
              const prop2 = t2.merchant.name;
              return (order === SortingOrder.ASC)
                ? prop1.localeCompare(prop2)
                : prop2.localeCompare(prop1);
            }
          });
        }
      });
    }

    return result;
  }

  load(filter: TransactionFilter): Promise<Array<Transaction>> {
    return new Promise(async (resolve , reject) => {
      let result: Array<Transaction>;

      if (!this.transactions) {
        const { data } = await this.fetchTransactions();
        this.transactions = data;
      }

      result = this.filter(this.transactions, filter);
      resolve(result);
    });
  }

  add(t: Transaction): Array<Transaction> {
    this.transactions.unshift(t);
    return this.transactions;
  }
}
