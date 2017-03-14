import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const flip =
    trigger('flip', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0}),
            style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4}),
            style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5}),
            style({transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8}),
            style({transform: 'perspective(400px)', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0}),
            style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4}),
            style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5}),
            style({transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8}),
            style({transform: 'perspective(400px)', offset: 1})
        ])))
    ]);
