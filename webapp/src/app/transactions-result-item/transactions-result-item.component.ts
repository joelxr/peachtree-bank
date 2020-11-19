import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../shared/types/Transaction';

@Component({
  selector: 'app-transactions-result-item',
  templateUrl: './transactions-result-item.component.html',
  styleUrls: ['./transactions-result-item.component.scss']
})
export class TransactionsResultItemComponent implements OnInit {

  @Input()
  transaction: Transaction;

  constructor() { }

  ngOnInit(): void { }
}
