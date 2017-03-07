import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutUp } from '../../animations/fade-out-up.animation';

@Component({
  selector: 'ng2animate-fade-out-up',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-up.component.html',
  animations: [ fadeOutUp ]
})
export class FadeOutUpComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
