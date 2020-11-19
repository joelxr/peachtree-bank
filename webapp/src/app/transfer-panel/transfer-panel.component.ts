import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit {

  origin = 'Free Checking(4692) - $5824.76';
  beneficiary = '';
  amount = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendTransfer(): void {
    console.log(this.origin, this.beneficiary, this.amount);
  }

}
