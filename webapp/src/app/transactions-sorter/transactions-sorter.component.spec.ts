import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSorterComponent } from './transactions-sorter.component';
import { SortingOrder } from '../../shared/types/SortingPreference';

describe('TransactionsSorterComponent', () => {
  let component: TransactionsSorterComponent;
  let fixture: ComponentFixture<TransactionsSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsSorterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates sorting reference', async () => {
    const expected = [
      { prop: 'date', order: SortingOrder.NONE },
      { prop: 'beneficiary', order: SortingOrder.NONE },
      { prop: 'amount', order: SortingOrder.NONE }
    ];

    component.updateSortingPreference({ prop: 'date', order: SortingOrder.NONE });
    component.updateSortingPreference({ prop: 'beneficiary', order: SortingOrder.NONE });
    component.updateSortingPreference({ prop: 'amount', order: SortingOrder.NONE });
    component.updateSortingPreference({ prop: 'date', order: SortingOrder.NONE });
    expect(component.value).toEqual(expected);
  });
});
