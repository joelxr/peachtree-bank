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
    this.value
      .filter(sortingPreference => sortingPreference.prop !== preference.prop)
      .forEach(sortingPreference => sortingPreference.order = SortingOrder.NONE);

    if (preference.order === SortingOrder.NONE)  {
      preference.order = SortingOrder.DESC;
    } else if (preference.order === SortingOrder.DESC) {
      preference.order = SortingOrder.ASC;
    } else if (preference.order === SortingOrder.ASC) {
      preference.order = SortingOrder.NONE;
    }

    this.valueChanged.emit(this.value);
  }
}
