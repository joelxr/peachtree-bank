import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortingOrder } from '../../shared/types/SortingPreference';
import { TransactionFilter } from '../../shared/types/TransactionFilter';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.scss']
})
export class TransactionsFilterComponent implements OnInit {

  filter: TransactionFilter = {
    searchBy: '',
    sortingPreferences: [
      { prop: 'date', order: SortingOrder.DESC },
      { prop: 'beneficiary', order: SortingOrder.NONE },
      { prop: 'amount', order: SortingOrder.NONE }
    ]
  };

  @Output()
  filterChanged = new EventEmitter<TransactionFilter>();

  constructor() { }

  ngOnInit(): void {
    this.filterChanged.emit(this.filter);
  }

  handleSearchByChanged(text: string): void {
    this.filter.searchBy = text;
    this.filterChanged.emit(this.filter);
  }

  handleSortingPreferencesChanged(): void {
    this.filterChanged.emit(this.filter);
  }
}
