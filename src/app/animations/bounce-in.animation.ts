import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounceIn =
    trigger('bounceIn', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
            style({transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
            style({transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1})
        ])))
    ]);
