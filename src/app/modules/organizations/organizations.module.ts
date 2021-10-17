import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';


@NgModule({
  declarations: [
    OrganizationsComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    LayoutModule
  ]
})
export class OrganizationsModule { }
