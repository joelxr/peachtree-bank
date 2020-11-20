import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransactionsPanelComponent } from './transactions-panel.component';

describe('TransactionsPanelComponent', () => {
  let component: TransactionsPanelComponent;
  let fixture: ComponentFixture<TransactionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TransactionsPanelComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls loadTransaction', () => {
    expect(component.loadTransactions()).toBeTruthy();
  });
});
