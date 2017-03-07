import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutUpBig } from '../../animations/fade-out-up-big.animation';

@Component({
  selector: 'ng2animate-fade-out-up-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-up-big.component.html',
  animations: [ fadeOutUpBig ]
})
export class FadeOutUpBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
