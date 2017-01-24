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
    { path: '**', component: BounceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
