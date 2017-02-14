import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInDown } from '../../animations/fade-in-down.animation';

@Component({
  selector: 'ng2animate-fade-in-down',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-down.component.html',
  animations: [ fadeInDown ]
})
export class FadeInDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
