import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeOutDown } from '../../animations/fade-out-down.animation';

@Component({
  selector: 'ng2animate-fade-out-down',
  host: { 'class': 'boxes' },
  templateUrl: './fade-out-down.component.html',
  animations: [ fadeOutDown ]
})
export class FadeOutDownComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
