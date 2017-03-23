import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const hinge =
    trigger('hinge', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({ transformOrigin: 'top left', offset: 0 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', opacity: '1', offset: 0.8 }),
            style({ transform: 'translate3d(0, 700px, 0)', opacity: '0', offset: 1 })
        ]))),
        transition(':leave', animate(750, keyframes([
            style({ transformOrigin: 'top left', offset: 0 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 }),
            style({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
            style({ transform: 'rotate3d(0, 0, 1, 60deg)', opacity: '1', offset: 0.8 }),
            style({ transform: 'translate3d(0, 700px, 0)', opacity: '0', offset: 1 })
        ])))
    ]);
