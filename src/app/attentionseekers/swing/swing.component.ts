import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { swing } from '../../animations/swing.animation';

@Component({
  selector: 'ng2animate-swing',
  host: { 'class': 'boxes' },
  templateUrl: './swing.component.html',
  animations: [ swing ]
})
export class SwingComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
