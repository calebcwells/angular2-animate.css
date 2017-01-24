import { Component } from '@angular/core';
import { BOXLIST } from '../../box/box.list';

@Component({
  selector: 'ng2animate-bounce-in',
  host: { 'class': 'boxes' },
  templateUrl: './bounce-in.component.html'
})
export class BounceInComponent {
  boxList = BOXLIST;
}
