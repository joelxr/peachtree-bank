import { Component, OnInit } from '@angular/core';
import { SortingOrder, SortingPreference } from '../../shared/types/SortingPreference';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.scss']
})
export class TransactionsFilterComponent implements OnInit {

  searchBy = '';
  sortingPreferences: Array<SortingPreference> = [
    { prop: 'date', order: SortingOrder.DESC },
    { prop: 'beneficiary', order: SortingOrder.NONE },
    { prop: 'amount', order: SortingOrder.NONE }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleSearchByChanged(text: string): void {
    this.searchBy = text;
  }

  handleSortingPreferencesChanged(): void {

  }
}
