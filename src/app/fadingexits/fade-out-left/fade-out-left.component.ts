import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutLeft } from '../../animations/fade-out-left.animation';

@Component({
  selector: 'ng2animate-fade-out-left',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-left.component.html',
  animations: [ fadeOutLeft ]
})
export class FadeOutLeftComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
