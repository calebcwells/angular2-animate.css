import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { Bounce } from '../../animations/bounce.animation';

@Component({
  selector: 'ng2animate-bounce',
  host: { 'class': 'boxes' },
  templateUrl: './bounce.component.html',
  animations: [ Bounce ]
})
export class BounceComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
