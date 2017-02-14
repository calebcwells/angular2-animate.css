import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInRightBig } from '../../animations/fade-in-right-big.animation';

@Component({
  selector: 'ng2animate-fade-in-right-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-right-big.component.html',
  animations: [ fadeInRightBig ]
})
export class FadeInRightBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
