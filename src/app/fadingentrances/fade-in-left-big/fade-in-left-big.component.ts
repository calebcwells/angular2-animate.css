import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInLeftBig } from '../../animations/fade-in-left-big.animation';

@Component({
  selector: 'ng2animate-fade-in-left-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-left-big.component.html',
  animations: [ fadeInLeftBig ]
})
export class FadeInLeftBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
