import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../shared/types/Transaction';

@Component({
  selector: 'app-transactions-result',
  templateUrl: './transactions-result.component.html',
  styleUrls: ['./transactions-result.component.scss']
})
export class TransactionsResultComponent implements OnInit {

  @Input() transactions: Array<Transaction> = [];
  @Input() loading = false;

  constructor() {}

  ngOnInit(): void { }

}
