import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutRightBig } from '../../animations/fade-out-right-big.animation';

@Component({
  selector: 'ng2animate-fade-out-right-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-right-big.component.html',
  animations: [ fadeOutRightBig ]
})
export class FadeOutRightBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
