import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOut } from '../../animations/fade-out.animation';

@Component({
  selector: 'ng2animate-fade-out',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out.component.html',
  animations: [ fadeOut ]
})
export class FadeOutComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
