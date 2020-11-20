import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() full = false;

  constructor() { }

  ngOnInit(): void {
  }

}
