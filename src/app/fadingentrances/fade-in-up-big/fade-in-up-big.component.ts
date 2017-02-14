import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInUpBig } from '../../animations/fade-in-up-big.animation';

@Component({
  selector: 'ng2animate-fade-in-up-big',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-up-big.component.html',
  animations: [ fadeInUpBig ]
})
export class FadeInUpBigComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
