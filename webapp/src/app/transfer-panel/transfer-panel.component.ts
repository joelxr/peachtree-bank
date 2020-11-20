import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../../shared/types/Transaction';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit {
  transactionService: TransactionService;
  minBalance = -500.00;
  balance = 5824.76;
  origin = 'Free Checking(4692)';
  beneficiary = '';
  amount = '';
  preview = false;

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  ngOnInit(): void {
  }

  previewTransfer(): void {
    this.preview = true;
  }

  confirmTransfer(): void {
    const t: Transaction = {
      categoryCode: '#12a580',
      dates: {
        valueDate: new Date().getTime()
      },
      transaction: {
        amountCurrency: {
          amount: Number(this.amount),
          currencyCode: 'USD'
        },
        type: 'Transfer',
        creditDebitIndicator: 'DBT'
      },
      merchant: {
        name: this.beneficiary,
        accountNumber: ''
      }
    };

    this.transactionService.add(t);
    this.preview = false;
    this.balance -= Number(this.amount);
    this.amount = '';
    this.beneficiary = '';
  }
}
