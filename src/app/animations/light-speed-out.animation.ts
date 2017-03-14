import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const lightSpeedOut =
    trigger('lightSpeedOut', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1 ', offset: 0}),
            style({transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'none', opacity: '1 ', offset: 0}),
            style({transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1})
        ])))
    ]);
