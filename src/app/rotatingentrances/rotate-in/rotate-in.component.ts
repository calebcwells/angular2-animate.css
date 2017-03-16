import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { rotateIn } from '../../animations/rotate-in.animation';

@Component({
  selector: 'ng2animate-rotate-in',
  host: { 'class': 'boxes' },
  templateUrl: './rotate-in.component.html',
  animations: [ rotateIn ]
})
export class RotateInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
