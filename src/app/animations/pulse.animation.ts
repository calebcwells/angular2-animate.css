import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const pulse =
    trigger('pulse', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
            style({transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
            style({transform: 'scale3d(1, 1, 1)', offset: 1})
        ])))
    ]);
