import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoadingIndicatorModule } from 'src/app/shared/components/loading-indicator/loading-indicator.module';
import { DataTablesModule } from 'angular-datatables';
import { TypesModule } from 'src/app/shared/components/types/types.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule, UsersRoutingModule, LayoutModule,
    LoadingIndicatorModule,
    DataTablesModule,
    TypesModule,
    FormsModule,
    ReactiveFormsModule,],
})
export class UsersModule {}
