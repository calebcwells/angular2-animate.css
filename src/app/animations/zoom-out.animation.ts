import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const zoomOut =
    trigger('zoomOut', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1})
        ])))
    ]);
