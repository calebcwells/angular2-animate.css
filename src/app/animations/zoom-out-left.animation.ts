import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const zoomOutLeft =
    trigger('zoomOutLeft', [
        transition(':enter', animate('1s 250ms cubic-bezier(0.550, 0.055, 0.675, 0.190)', keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4}),
            style({transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4}),
            style({transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1})
        ])))
    ]);
