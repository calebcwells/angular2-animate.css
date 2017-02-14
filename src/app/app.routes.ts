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
import { BounceOutComponent } from './bouncingexits/bounce-out/bounce-out.component';
import { BounceOutDownComponent } from './bouncingexits/bounce-out-down/bounce-out-down.component';
import { BounceOutLeftComponent } from './bouncingexits/bounce-out-left/bounce-out-left.component';
import { BounceOutRightComponent } from './bouncingexits/bounce-out-right/bounce-out-right.component';
import { BounceOutUpComponent } from './bouncingexits/bounce-out-up/bounce-out-up.component';
import { FadeInComponent } from './fadingentrances/fade-in/fade-in.component';
import { FadeInDownComponent } from './fadingentrances/fade-in-down/fade-in-down.component';
import { FadeInDownBigComponent } from './fadingentrances/fade-in-down-big/fade-in-down-big.component';
import { FadeInLeftComponent } from './fadingentrances/fade-in-left/fade-in-left.component';
import { FadeInLeftBigComponent } from './fadingentrances/fade-in-left-big/fade-in-left-big.component';
import { FadeInRightComponent } from './fadingentrances/fade-in-right/fade-in-right.component';
import { FadeInRightBigComponent } from './fadingentrances/fade-in-right-big/fade-in-right-big.component';
import { FadeInUpComponent } from './fadingentrances/fade-in-up/fade-in-up.component';
import { FadeInUpBigComponent } from './fadingentrances/fade-in-up-big/fade-in-up-big.component';

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
    { path: 'bounce-out', component: BounceOutComponent },
    { path: 'bounce-out-down', component: BounceOutDownComponent },
    { path: 'bounce-out-left', component: BounceOutLeftComponent },
    { path: 'bounce-out-right', component: BounceOutRightComponent },
    { path: 'bounce-out-up', component: BounceOutUpComponent },
    { path: 'fade-in', component: FadeInComponent },
    { path: 'fade-in-down', component: FadeInDownComponent },
    { path: 'fade-in-down-big', component: FadeInDownBigComponent },
    { path: 'fade-in-left', component: FadeInLeftComponent },
    { path: 'fade-in-left-big', component: FadeInLeftBigComponent },
    { path: 'fade-in-right', component: FadeInRightComponent },
    { path: 'fade-in-right-big', component: FadeInRightBigComponent },
    { path: 'fade-in-up', component: FadeInUpComponent },
    { path: 'fade-in-up-big', component: FadeInUpBigComponent },
    { path: '**', component: BounceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
