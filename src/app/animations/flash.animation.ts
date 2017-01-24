import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const Flash =
    trigger('flash', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({ opacity: '1', offset: 0 }),
            style({ opacity: '0', offset: 0.25 }),
            style({ opacity: '1', offset: 0.5 }),
            style({ opacity: '0', offset: 0.75 }),
            style({ opacity: '1', offset: 1 })
        ]))),
        transition(':leave', animate(500, keyframes([
            style({ opacity: '1', offset: 0 }),
            style({ opacity: '0', offset: 0.25 }),
            style({ opacity: '1', offset: 0.5 }),
            style({ opacity: '0', offset: 0.75 }),
            style({ opacity: '1', offset: 1 })
        ])))
    ]);
