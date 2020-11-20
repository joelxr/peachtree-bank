import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() label: string;
  @Input() id: string;
  @Input() placeholder = '';
  @Input() readOnly = false;
  @Input() value = '';
  @Input() inputType = 'text';
  @Input() unit = '';
  @Input() unitPlacement = '';
  @Input() showClearBtn = false;

  @Output() valueChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  handleTextInput(value): void {
    this.value = value;
    this.valueChanged.emit(this.value);
  }
}
