import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounceOutUp =
    trigger('bounceOutUp', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2}),
            style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4}),
            style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45}),
            style({transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2}),
            style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4}),
            style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45}),
            style({transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1})
        ])))
    ]);
