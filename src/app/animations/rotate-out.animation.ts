import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const rotateOut =
    trigger('rotateOut', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1})
        ])))
    ]);
