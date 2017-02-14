import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeInUp } from '../../animations/fade-in-up.animation';

@Component({
  selector: 'ng2animate-fade-in-up',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in-up.component.html',
  animations: [ fadeInUp ]
})
export class FadeInUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
