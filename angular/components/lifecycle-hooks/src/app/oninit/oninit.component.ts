import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.css'],
})
export class OninitComponent implements OnChanges, OnInit {
  title = 'Oninit';
  constructor() {
    var name = 'Lê Anh Đức';
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
