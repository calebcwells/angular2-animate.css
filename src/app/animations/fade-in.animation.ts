import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const fadeIn =
    trigger('fadeIn', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({opacity: '0', offset: 0}),
            style({opacity: '1', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({opacity: '0', offset: 0}),
            style({opacity: '1', offset: 1})
        ])))
    ]);
