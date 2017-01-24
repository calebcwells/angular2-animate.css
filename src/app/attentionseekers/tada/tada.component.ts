import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { tada } from '../../animations/tada.animation';

@Component({
  selector: 'ng2animate-tada',
  host: { 'class': 'boxes' },
  templateUrl: './tada.component.html',
  animations: [ tada ]
})
export class TadaComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
