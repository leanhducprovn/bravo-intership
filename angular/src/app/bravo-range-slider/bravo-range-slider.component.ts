import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { WjInputDate } from '@grapecity/wijmo.angular2.input';

@Component({
  selector: 'bravo-range-slider',
  templateUrl: './bravo-range-slider.component.html',
  styleUrls: ['./bravo-range-slider.component.css'],
})
export class BravoRangeSliderComponent implements OnInit {
  @ViewChild('theLowerDate') theLowerDate!: WjInputDate;

  @Input() lowerLabel!: string;
  @Input() upperLabel!: string;
  @Input() type!: string;
  @Input() format!: string;
  @Input() minValue!: Date | number;
  @Input() maxValue!: Date | number;

  min!: Date | number;
  max!: Date | number;

  today = new Date();
  typeDate = false;
  typeNumber = false;

  constructor() {}

  ngOnInit(): void {
    this.checkType();
  }

  startEvent(event: any) {
    console.log(event);
    this.onStart(event);
  }

  endEvent(event: any) {
    console.log(event);
  }

  currentTimeMin!: any;

  onStart(event: any) {
    console.log(this.theLowerDate.value?.getDate() + event);
  }

  onChooseTimeMin(dateInput: any) {
    this.min = dateInput.value;
  }

  onChooseTimeMax(dateInput: any) {
    this.max = dateInput.value;
  }

  checkType() {
    if (this.type == 'date') {
      this.typeDate = true;
    } else if (this.type == 'number') {
      this.typeNumber = true;
    }
  }

  countDays(min: any, max: any) {
    let ms1 = min.getTime();
    let ms2 = max.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  }
}
