import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const rotateOutUpLeft =
    trigger('rotateOutUpLeft', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1})
        ])))
    ]);
