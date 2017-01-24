import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const jello =
    trigger('jello', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({transform: 'none', offset: 0.11}),
            style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22}),
            style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33}),
            style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44}),
            style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55}),
            style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.66}),
            style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.77}),
            style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.88})
        ]))),
        transition(':leave', animate(500, keyframes([
            style({transform: 'none', offset: 0.11}),
            style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22}),
            style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33}),
            style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44}),
            style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55}),
            style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.66}),
            style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.77}),
            style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.88})
        ])))
    ]);
