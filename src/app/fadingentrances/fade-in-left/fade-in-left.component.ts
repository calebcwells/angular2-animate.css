import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInLeft } from '../../animations/fade-in-left.animation';

@Component({
  selector: 'ng2animate-fade-in-left',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-left.component.html',
  animations: [ fadeInLeft ]
})
export class FadeInLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
