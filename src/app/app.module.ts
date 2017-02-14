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
    FadeInUpBigComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
