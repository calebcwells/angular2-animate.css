import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInRight } from '../../animations/fade-in-right.animation';

@Component({
  selector: 'ng2animate-fade-in-right',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-right.component.html',
  animations: [ fadeInRight ]
})
export class FadeInRightComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
