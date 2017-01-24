import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { jello } from '../../animations/jello.animation';

@Component({
  selector: 'ng2animate-jello',
  host: { 'class': 'boxes' },
  templateUrl: './jello.component.html',
  animations: [ jello ]
})
export class JelloComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}

