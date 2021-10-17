import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    OrganizationsComponent,
    ViewComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule
  ]
})
export class OrganizationsModule { }
