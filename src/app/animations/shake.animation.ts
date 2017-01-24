import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const shake =
    trigger('shake', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.1}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.2}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.3}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.4}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.5}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.7}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.8}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.1}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.2}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.3}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.4}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.5}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.7}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.8}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ])))
    ]);
