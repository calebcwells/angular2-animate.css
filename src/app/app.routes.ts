import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BounceComponent } from './attentionseekers/bounce/bounce.component';
import { FlashComponent } from './attentionseekers/flash/flash.component';
import { PulseComponent } from './attentionseekers/pulse/pulse.component';
import { RubberBandComponent } from './attentionseekers/rubber-band/rubber-band.component';
import { ShakeComponent } from './attentionseekers/shake/shake.component';
import { SwingComponent } from './attentionseekers/swing/swing.component';
import { TadaComponent } from './attentionseekers/tada/tada.component';
import { WobbleComponent } from './attentionseekers/wobble/wobble.component';
import { JelloComponent } from './attentionseekers/jello/jello.component';
import { BounceInComponent } from './bouncingentrances/bounce-in/bounce-in.component';
import { BounceInDownComponent } from './bouncingentrances/bounce-in-down/bounce-in-down.component';
import { BounceInLeftComponent } from './bouncingentrances/bounce-in-left/bounce-in-left.component';
import { BounceInRightComponent } from './bouncingentrances/bounce-in-right/bounce-in-right.component';
import { BounceInUpComponent } from './bouncingentrances/bounce-in-up/bounce-in-up.component';

export const routes: Routes = [
    { path: '', component: BounceComponent, pathMatch: 'full' },
    { path: 'bounce', component: BounceComponent },
    { path: 'flash', component: FlashComponent },
    { path: 'pulse', component: PulseComponent },
    { path: 'rubber-band', component: RubberBandComponent },
    { path: 'shake', component: ShakeComponent },
    { path: 'swing', component: SwingComponent },
    { path: 'tada', component: TadaComponent },
    { path: 'wobble', component: WobbleComponent },
    { path: 'jello', component: JelloComponent },
    { path: 'bounce-in', component: BounceInComponent },
    { path: 'bounce-in-down', component: BounceInDownComponent },
    { path: 'bounce-in-left', component: BounceInLeftComponent },
    { path: 'bounce-in-right', component: BounceInRightComponent },
    { path: 'bounce-in-up', component: BounceInUpComponent },
    { path: '**', component: BounceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
