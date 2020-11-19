import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSorterComponent } from './transactions-sorter.component';

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
});
