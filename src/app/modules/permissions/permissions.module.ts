import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';


@NgModule({
  declarations: [
    PermissionsComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    LayoutModule
  ]
})
export class PermissionsModule { }
