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

  constructor(http: HttpClient) {
    this.http = http;
  }

  load(filter: TransactionFilter): Promise<Array<Transaction>> {
    return new Promise((resolve , reject) =>
      this.http.get<ResponseData>('assets/transactions.json').subscribe((res) => {
        let transactions = res.data;

        if (filter.searchBy) {
          transactions = transactions
            .filter(t => new RegExp(filter.searchBy, 'i').test(t.merchant.name));
        }

        if (filter.sortingPreferences && filter.sortingPreferences.length) {
          filter.sortingPreferences.forEach(({ order, prop }) => {
            if (order !== SortingOrder.NONE) {
              console.log(
                order,
                prop,
                transactions.map(t => Number(t.transaction.amountCurrency.amount))
              );
              transactions = transactions.sort((t1, t2) => {
                if (prop === 'date') {
                  const prop1 = new Date(t1.dates.valueDate).getTime();
                  const prop2 = new Date(t2.dates.valueDate).getTime();
                  return (order === SortingOrder.ASC)
                    ? prop1 - prop2
                    : prop2 - prop1;
                } else if (prop === 'amount') {
                  const prop1 = Number(t1.transaction.amountCurrency.amount);
                  const prop2 = Number(t2.transaction.amountCurrency.amount);
                  console.log(prop1, prop2)
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

        resolve(transactions);
      })
    );
  }
}
