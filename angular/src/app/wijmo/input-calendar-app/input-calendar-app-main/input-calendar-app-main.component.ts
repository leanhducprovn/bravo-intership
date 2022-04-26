import { Component, DoCheck, OnInit } from '@angular/core';
import * as input from '@grapecity/wijmo.input';

@Component({
  selector: 'app-input-calendar-app-main',
  templateUrl: './input-calendar-app-main.component.html',
  styleUrls: ['./input-calendar-app-main.component.css'],
})
export class InputCalendarAppMainComponent implements OnInit, DoCheck {
  constructor() {}

  ngDoCheck() {
    const setHeader = document.getElementsByClassName('wj-header');
    setHeader[0].innerHTML = `
      <td>CN</td>
      <td>T2</td>
      <td>T3</td>
      <td>T4</td>
      <td>T5</td>
      <td>T6</td>
      <td>T7</td>
    `;
  }

  onClose(popup: input.Popup) {
    alert('form submitted');
    popup.hide();
  }

  ngOnInit(): void {}
}
