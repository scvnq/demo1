import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ModelPageComponent } from './model-page/model-page.component';
import {LoginComponent} from './login/login.component';
import { ModelPage1Component } from './model-page-1/model-page-1.component';
import { ModelPage2Component } from './model-page-2/model-page-2.component';
import { ModelPage3Component } from './model-page-3/model-page-3.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'model',
    component: ModelPageComponent
  },
  {
    path: 'sign-up',
    component: MainComponent
  },
  {
    path: 'model1',
    component: ModelPage1Component
  }
  ,
  {
    path: 'model2',
    component: ModelPage2Component
  },
  {
    path: 'model3',
    component: ModelPage3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
