import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const fadeOutLeftBig =
    trigger('fadeOutLeftBig', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({opacity: '1', transform: 'none', offset: 0}),
            style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({opacity: '1', transform: 'none', offset: 0}),
            style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1})
        ])))
    ]);
