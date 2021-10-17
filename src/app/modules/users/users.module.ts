import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [UsersComponent, ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule, UsersRoutingModule, LayoutModule],
})
export class UsersModule {}
