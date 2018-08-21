import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainCmpComponent } from './main-cmp/main-cmp.component';
import { SecondCmpComponent } from './second-cmp/second-cmp.component';
import { AppRouteModule } from './app-route/app-route.module';
import { ParamCmpComponent } from './param-cmp/param-cmp.component';
import { Inner1Component } from './inner1/inner1.component';
import { Inner2Component } from './inner2/inner2.component';
import { DataStoreService } from './data-store.service';
import { FormsComponent } from './forms/forms.component';
import { FormTplComponent } from './form-tpl/form-tpl.component';
import { FormRctComponent } from './form-rct/form-rct.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCmpComponent,
    SecondCmpComponent,
    ParamCmpComponent,
    Inner1Component,
    Inner2Component,
    FormsComponent,
    FormTplComponent,
    FormRctComponent,
    FlexBoxComponent
  ],
  imports: [
    BrowserModule, AppRouteModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    { provide: DataStoreService, useClass: "DataStoreService" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
