import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutDownBig } from '../../animations/fade-out-down-big.animation';

@Component({
  selector: 'ng2animate-fade-out-down-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-down-big.component.html',
  animations: [ fadeOutDownBig ]
})
export class FadeOutDownBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
