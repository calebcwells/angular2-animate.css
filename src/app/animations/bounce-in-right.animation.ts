import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounceInRight =
    trigger('bounceInRight', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0}),
            style({transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'translate3d(100px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
            style({transform: 'none', opacity: '1', offset: 1}),
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0}),
            style({transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'translate3d(100px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
            style({transform: 'none', opacity: '1', offset: 1}),
        ])))
    ]);
