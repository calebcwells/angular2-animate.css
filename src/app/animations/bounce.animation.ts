import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const bounce =
    trigger('bounce', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({ transform: 'translate3d(0,0,0)', offset: 0 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.2 }),
            style({ transform: 'translate3d(0,-30px,0)', offset: 0.4 }),
            style({ transform: 'translate3d(0,-30px,0)', offset: 0.43 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.53 }),
            style({ transform: 'translate3d(0,-15px,0)', offset: 0.7 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.8 }),
            style({ transform: 'translate3d(0,-15px,0)', offset: 0.9 }),
            style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))),
        transition(':leave', animate(750, keyframes([
            style({ transform: 'translate3d(0,0,0)', offset: 0 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.2 }),
            style({ transform: 'translate3d(0,-30px,0)', offset: 0.4 }),
            style({ transform: 'translate3d(0,-30px,0)', offset: 0.43 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.53 }),
            style({ transform: 'translate3d(0,-15px,0)', offset: 0.7 }),
            style({ transform: 'translate3d(0,0,0)', offset: 0.8 }),
            style({ transform: 'translate3d(0,-15px,0)', offset: 0.9 }),
            style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ])))
    ]);
