import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounceInDown =
    trigger('bounceInDown', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0}),
            style({transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'translate3d(0, -100px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
            style({transform: 'none', opacity: '1', offset: 1}),
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0}),
            style({transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'translate3d(0, -100px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
            style({transform: 'none', opacity: '1', offset: 1}),
        ])))
    ]);
