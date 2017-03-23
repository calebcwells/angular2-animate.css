import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const zoomInRight =
    trigger('zoomInRight', [
        transition(':enter', animate('1s 250ms cubic-bezier(0.550, 0.055, 0.675, 0.190)', keyframes([
            style({transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'none', opacity: '1', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0',  offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6}),
            style({transform: 'none', opacity: '1', offset: 1})
        ])))
    ]);