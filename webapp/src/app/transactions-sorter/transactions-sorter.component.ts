import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortingOrder, SortingPreference } from '../../shared/types/SortingPreference';

@Component({
  selector: 'app-transactions-sorter',
  templateUrl: './transactions-sorter.component.html',
  styleUrls: ['./transactions-sorter.component.scss']
})
export class TransactionsSorterComponent implements OnInit {

  @Input()
  value: Array<SortingPreference> = [];

  @Output()
  valueChanged = new EventEmitter<Array<SortingPreference>>();

  constructor() {}

  ngOnInit(): void {}

  updateSortingPreference(preference: SortingPreference): void {
    const preferenceNotFound = !this.value.find(p => p.prop === preference.prop);

    if (preferenceNotFound) {
      this.value.push(preference);
    } else {
      const previousPreference = this.value
        .find(sortingPreference => sortingPreference.order !== SortingOrder.NONE && sortingPreference.prop !== preference.prop);

      const previousOrder = previousPreference ? previousPreference.order : SortingOrder.DESC;

      // Reset others to NONE
      this.value
        .filter(sortingPreference => sortingPreference.prop !== preference.prop)
        .forEach(sortingPreference => sortingPreference.order = SortingOrder.NONE);

      if (preference.order === SortingOrder.NONE)  {
        preference.order = previousOrder === SortingOrder.ASC
          ? SortingOrder.ASC
          : SortingOrder.DESC;
      } else if (preference.order === SortingOrder.DESC) {
        preference.order = SortingOrder.ASC;
      } else if (preference.order === SortingOrder.ASC) {
        preference.order = SortingOrder.NONE;
      }
    }

    this.valueChanged.emit(this.value);
  }
}
