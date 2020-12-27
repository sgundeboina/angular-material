import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [HomeComponent, LoginComponent]
})
export class CoreModule {
}
