import { Component } from '@angular/core';
import { BOXLIST } from '../../box/box.list';

@Component({
  selector: 'ng2animate-bounce',
  templateUrl: './bounce.component.html'
})
export class BounceComponent {
  boxList = BOXLIST;
}
