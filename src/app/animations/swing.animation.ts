import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const swing =
    trigger('swing', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate(0%)', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2}),
            style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4}),
            style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6}),
            style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8}),
            style({transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate(0%)', offset: 0}),
            style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2}),
            style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4}),
            style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6}),
            style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8}),
            style({transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ])))
    ]);
