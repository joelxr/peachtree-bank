import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsResultItemComponent } from './transactions-result-item.component';

describe('TransactionsResultItemComponent', () => {
  let component: TransactionsResultItemComponent;
  let fixture: ComponentFixture<TransactionsResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsResultItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
