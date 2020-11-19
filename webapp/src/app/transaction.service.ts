import { Injectable } from '@angular/core';
import { SortingPreference } from '../shared/types/SortingPreference';
import { Transaction } from '../shared/types/Transaction';
import { TransactionFilter } from '../shared/types/TransactionFilter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  mockedData: any;

  constructor(private http: HttpClient) {
    this.http.get('assets/transactions.json').subscribe((res) => {
      this.mockedData = res;
    });
  }

  load(filter: TransactionFilter): Array<Transaction> {
    return this.mockedData.data;
  }
}
