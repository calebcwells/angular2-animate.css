import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const rollIn =
    trigger('rollIn', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0}),
            style({transform: 'none', opacity: '1', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0}),
            style({transform: 'none', opacity: '1', offset: 1})
        ])))
    ]);
