import { Component, OnInit } from '@angular/core';
import { BOXLIST } from '../../box/box.list';
import { fadeIn } from '../../animations/fade-in.animation';

@Component({
  selector: 'ng2animate-fade-in',
  host: { 'class': 'boxes' },
  templateUrl: './fade-in.component.html',
  animations: [ fadeIn ]
})
export class FadeInComponent implements OnInit {
  boxList: any[] = [];

  constructor() { }

  removeBox(i){
    this.boxList.splice(i,1);
  }

  ngOnInit() {
    this.boxList = BOXLIST;
  }
}
