import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const wobble =
    trigger('wobble', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'translate(0%)', offset: 0}),
            style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15}),
            style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45}),
            style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6}),
            style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75}),
            style({transform: 'translateX(0%)', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'translate(0%)', offset: 0}),
            style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15}),
            style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45}),
            style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6}),
            style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75}),
            style({transform: 'translateX(0%)', offset: 1})
        ])))
    ]);
