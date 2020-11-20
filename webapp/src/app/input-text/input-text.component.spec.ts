import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handleTextInput changes the value', () => {
    const expected = 'Test 1';
    component.handleTextInput('Test 1');
    expect(component.value).toEqual(expected);
  });
});
