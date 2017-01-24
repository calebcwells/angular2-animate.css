import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { Flash } from '../../animations/flash.animation';

@Component({
  selector: 'ng2animate-flash',
  host: { 'class': 'boxes' },
  templateUrl: './flash.component.html',
  animations: [ Flash ]
})
export class FlashComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
