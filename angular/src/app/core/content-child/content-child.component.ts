import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css'],
})
export class ContentChildComponent implements OnInit, DoCheck {
  @Input() label!: string;
  @Input() value!: string;

  ngDoCheck() {}

  constructor() {}

  ngOnInit(): void {}
}
