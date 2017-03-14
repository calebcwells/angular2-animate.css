import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const flipInY =
    trigger('flipInY', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8}),
            style({transform: 'perspective(400px)', opacity: '1', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8}),
            style({transform: 'perspective(400px)', opacity: '1', offset: 1})
        ])))
    ]);
