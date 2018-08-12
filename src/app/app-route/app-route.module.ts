import { LoginGuardService } from './../login-guard.service';
import { ParamCmpComponent } from './../param-cmp/param-cmp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCmpComponent } from '../main-cmp/main-cmp.component';
import { SecondCmpComponent } from '../second-cmp/second-cmp.component';
import { Inner1Component } from '../inner1/inner1.component';
import { Inner2Component } from '../inner2/inner2.component';

const routes: Routes = [
  { path: '', component: MainCmpComponent },
  { path: 'sec', component: SecondCmpComponent,
    children: [
      { path: '', component: Inner1Component },
      { path: 'two', component: Inner2Component, canActivate: [LoginGuardService] },
    ]
  },
  { path: 'sec', component: SecondCmpComponent, outlet: 'second',
    children: [
      { path: '', component: Inner1Component },
      { path: 'two', component: Inner2Component, canActivate: [LoginGuardService] },
    ]
  },
  { path: 'params/:id', component: ParamCmpComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
