import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutLeftBig } from '../../animations/fade-out-left-big.animation';

@Component({
  selector: 'ng2animate-fade-out-left-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-left-big.component.html',
  animations: [ fadeOutLeftBig ]
})
export class FadeOutLeftBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
