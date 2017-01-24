import { Component } from '@angular/core';
import { BOXLIST } from '../../box/box.list';

@Component({
  selector: 'ng2animate-flash',
  templateUrl: './flash.component.html'
})
export class FlashComponent {
  boxList = BOXLIST;
}
