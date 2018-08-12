import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainCmpComponent } from './main-cmp/main-cmp.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';
import { AppRouteModule } from './app-route/app-route.module';
import { ParamCmpComponent } from './param-cmp/param-cmp.component';
import { Inner1Component } from './inner1/inner1.component';
import { Inner2Component } from './inner2/inner2.component';
import { DataStoreService } from './data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    MainCmpComponent,
    SecondCmpComponent,
    ParamCmpComponent,
    Inner1Component,
    Inner2Component
  ],
  imports: [
    BrowserModule, AppRouteModule
  ],
  providers: [
    { provide: DataSource, useClass: "DataStoreService" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
