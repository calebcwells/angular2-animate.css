import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounceOut =
    trigger('bounceOut', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55}),
            style({transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'none', opacity: '1', offset: 0}),
            style({transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55}),
            style({transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1})
        ])))
    ]);
