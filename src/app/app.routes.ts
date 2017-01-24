import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BounceComponent } from './attentionseekers/bounce/bounce.component';
import { FlashComponent } from './attentionseekers/flash/flash.component';
import { BounceInComponent } from './bouncingentrances/bounce-in/bounce-in.component';

export const routes: Routes = [
    { path: '', component: BounceComponent, pathMatch: 'full' },
    { path: 'bounce', component: BounceComponent },
    { path: 'flash', component: FlashComponent },
    { path: 'bounce-in', component: BounceInComponent },
    { path: '**', component: BounceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
