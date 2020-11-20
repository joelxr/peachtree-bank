import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransferPanelComponent } from './transfer-panel.component';

describe('TransferPanelComponent', () => {
  let component: TransferPanelComponent;
  let fixture: ComponentFixture<TransferPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TransferPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('preview', () => {
    component.previewTransfer();
    expect(component.preview).toBeTrue();
  });

  it('confirm transfer', () => {
    component.confirmTransfer();
    expect(component.preview).toBeFalse();
    expect(component.balance).toBeTruthy();
    expect(component.amount).toEqual('');
    expect(component.beneficiary).toEqual('');
  });

});
