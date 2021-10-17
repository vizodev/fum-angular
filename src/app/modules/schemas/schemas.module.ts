import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemasRoutingModule } from './schemas-routing.module';
import { SchemasComponent } from './schemas.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [
    SchemasComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SchemasRoutingModule
  ]
})
export class SchemasModule { }
