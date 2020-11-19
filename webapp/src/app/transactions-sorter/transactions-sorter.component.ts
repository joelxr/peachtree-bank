import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortingOrder, SortingPreference } from '../../shared/types/SortingPreference';

@Component({
  selector: 'app-transactions-sorter',
  templateUrl: './transactions-sorter.component.html',
  styleUrls: ['./transactions-sorter.component.scss']
})
export class TransactionsSorterComponent implements OnInit {

  @Input()
  value: Array<SortingPreference>;

  @Output()
  valueChanged = new EventEmitter<Array<SortingPreference>>();

  constructor() {}

  ngOnInit(): void {}

  updateSortingPreference(preference: SortingPreference): void {
    if (
      preference.order === SortingOrder.NONE ||
      preference.order === SortingOrder.ASC
    )  {
      preference.order = SortingOrder.DESC;
    } else if (preference.order === SortingOrder.DESC) {
      preference.order = SortingOrder.ASC;
    }

    this.valueChanged.emit(this.value);
  }
}
