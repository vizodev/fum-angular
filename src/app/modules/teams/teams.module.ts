import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { LoadingIndicatorModule } from 'src/app/shared/components/loading-indicator/loading-indicator.module';

@NgModule({
  declarations: [TeamsComponent, EditComponent, ListComponent, ViewComponent],
  imports: [CommonModule, TeamsRoutingModule, LayoutModule,LoadingIndicatorModule],
})
export class TeamsModule {}
