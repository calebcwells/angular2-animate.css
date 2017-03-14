import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const flipOutY =
    trigger('flipOutY', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'perspective(400px)', opacity: '1', offset: 0}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'perspective(400px)', opacity: '1', offset: 0}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3}),
            style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1})
        ])))
    ]);
