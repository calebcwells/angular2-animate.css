import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const lightSpeedIn =
    trigger('lightSpeedIn', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0}),
            style({transform: 'skewX(20deg)', opacity: '1', offset: 0.6}),
            style({transform: 'skewX(-5deg)', opacity: '1', offset: 0.8}),
            style({transform: 'none', opacity: '1 ', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0}),
            style({transform: 'skewX(20deg)', opacity: '1', offset: 0.6}),
            style({transform: 'skewX(-5deg)', opacity: '1', offset: 0.8}),
            style({transform: 'none', opacity: '1 ', offset: 1})
        ])))
    ]);
