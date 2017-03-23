import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
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
import { FadeOutComponent } from './fadingexits/fade-out/fade-out.component';
import { FadeOutDownComponent } from './fadingexits/fade-out-down/fade-out-down.component';
import { FadeOutDownBigComponent } from './fadingexits/fade-out-down-big/fade-out-down-big.component';
import { FadeOutLeftComponent } from './fadingexits/fade-out-left/fade-out-left.component';
import { FadeOutLeftBigComponent } from './fadingexits/fade-out-left-big/fade-out-left-big.component';
import { FadeOutRightComponent } from './fadingexits/fade-out-right/fade-out-right.component';
import { FadeOutRightBigComponent } from './fadingexits/fade-out-right-big/fade-out-right-big.component';
import { FadeOutUpComponent } from './fadingexits/fade-out-up/fade-out-up.component';
import { FadeOutUpBigComponent } from './fadingexits/fade-out-up-big/fade-out-up-big.component';
import { FlipComponent } from './flippers/flip/flip.component';
import { FlipInXComponent } from './flippers/flip-in-x/flip-in-x.component';
import { FlipInYComponent } from './flippers/flip-in-y/flip-in-y.component';
import { FlipOutXComponent } from './flippers/flip-out-x/flip-out-x.component';
import { FlipOutYComponent } from './flippers/flip-out-y/flip-out-y.component';
import { LightSpeedInComponent } from './lightspeed/light-speed-in/light-speed-in.component';
import { LightSpeedOutComponent } from './lightspeed/light-speed-out/light-speed-out.component';
import { RotateInComponent } from './rotatingentrances/rotate-in/rotate-in.component';
import { RotateInDownLeftComponent } from './rotatingentrances/rotate-in-down-left/rotate-in-down-left.component';
import { RotateInDownRightComponent } from './rotatingentrances/rotate-in-down-right/rotate-in-down-right.component';
import { RotateInUpLeftComponent } from './rotatingentrances/rotate-in-up-left/rotate-in-up-left.component';
import { RotateInUpRightComponent } from './rotatingentrances/rotate-in-up-right/rotate-in-up-right.component';
import { RotateOutComponent } from './rotatingexits/rotate-out/rotate-out.component';
import { RotateOutDownLeftComponent } from './rotatingexits/rotate-out-down-left/rotate-out-down-left.component';
import { RotateOutDownRightComponent } from './rotatingexits/rotate-out-down-right/rotate-out-down-right.component';
import { RotateOutUpLeftComponent } from './rotatingexits/rotate-out-up-left/rotate-out-up-left.component';
import { RotateOutUpRightComponent } from './rotatingexits/rotate-out-up-right/rotate-out-up-right.component';
import { ZoomInComponent } from './zoomentrances/zoom-in/zoom-in.component';
import { ZoomInDownComponent } from './zoomentrances/zoom-in-down/zoom-in-down.component';
import { ZoomInLeftComponent } from './zoomentrances/zoom-in-left/zoom-in-left.component';
import { ZoomInRightComponent } from './zoomentrances/zoom-in-right/zoom-in-right.component';
import { ZoomInUpComponent } from './zoomentrances/zoom-in-up/zoom-in-up.component';
import { ZoomOutComponent } from './zoomexits/zoom-out/zoom-out.component';
import { ZoomOutDownComponent } from './zoomexits/zoom-out-down/zoom-out-down.component';
import { ZoomOutLeftComponent } from './zoomexits/zoom-out-left/zoom-out-left.component';
import { ZoomOutRightComponent } from './zoomexits/zoom-out-right/zoom-out-right.component';
import { ZoomOutUpComponent } from './zoomexits/zoom-out-up/zoom-out-up.component';
import { HingeComponent } from './specials/hinge/hinge.component';
import { RollInComponent } from './specials/roll-in/roll-in.component';
import { RollOutComponent } from './specials/roll-out/roll-out.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BounceComponent,
    FlashComponent,
    PulseComponent,
    RubberBandComponent,
    ShakeComponent,
    SwingComponent,
    TadaComponent,
    WobbleComponent,
    JelloComponent,
    BounceInComponent,
    BounceInDownComponent,
    BounceInLeftComponent,
    BounceInRightComponent,
    BounceInUpComponent,
    BounceOutComponent,
    BounceOutDownComponent,
    BounceOutLeftComponent,
    BounceOutRightComponent,
    BounceOutUpComponent,
    FadeInComponent,
    FadeInDownComponent,
    FadeInDownBigComponent,
    FadeInLeftComponent,
    FadeInLeftBigComponent,
    FadeInRightComponent,
    FadeInRightBigComponent,
    FadeInUpComponent,
    FadeInUpBigComponent,
    FadeOutComponent,
    FadeOutDownComponent,
    FadeOutDownBigComponent,
    FadeOutLeftComponent,
    FadeOutLeftBigComponent,
    FadeOutRightComponent,
    FadeOutRightBigComponent,
    FadeOutUpComponent,
    FadeOutUpBigComponent,
    FlipComponent,
    FlipInXComponent,
    FlipInYComponent,
    FlipOutXComponent,
    FlipOutYComponent,
    LightSpeedInComponent,
    LightSpeedOutComponent,
    RotateInComponent,
    RotateInDownLeftComponent,
    RotateInDownRightComponent,
    RotateInUpLeftComponent,
    RotateInUpRightComponent,
    RotateOutComponent,
    RotateOutDownLeftComponent,
    RotateOutDownRightComponent,
    RotateOutUpLeftComponent,
    RotateOutUpRightComponent,
    ZoomInComponent,
    ZoomInDownComponent,
    ZoomInLeftComponent,
    ZoomInRightComponent,
    ZoomInUpComponent,
    ZoomOutComponent,
    ZoomOutDownComponent,
    ZoomOutLeftComponent,
    ZoomOutRightComponent,
    ZoomOutUpComponent,
    HingeComponent,
    RollInComponent,
    RollOutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
