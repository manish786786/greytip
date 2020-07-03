import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSpeechComponent } from './create-speech/create-speech.component';
import { ViewSpeechComponent } from './view-speech/view-speech.component';


const routes: Routes = [
  { path: 'view', component: ViewSpeechComponent },
  { path: 'create', component: CreateSpeechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
