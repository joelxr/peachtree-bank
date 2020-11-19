import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionFilter } from '../../shared/types/TransactionFilter';
import { Transaction } from '../../shared/types/Transaction';

@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.scss']
})
export class TransactionsPanelComponent implements OnInit {

  transactionService: TransactionService;
  transactions: Array<Transaction>;

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(filter: TransactionFilter = {searchBy: '', sortingPreferences: []}): void {
    const data = this.transactionService.load(filter);
    console.log(data);
  }

}
