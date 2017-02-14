import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInDownBig } from '../../animations/fade-in-down-big.animation';

@Component({
  selector: 'ng2animate-fade-in-down-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-down-big.component.html',
  animations: [ fadeInDownBig ]
})
export class FadeInDownBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
