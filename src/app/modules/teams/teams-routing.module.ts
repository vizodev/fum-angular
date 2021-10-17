import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'new',
        component: EditComponent,
      },
      {
        path: ':teamId/edit',
        component: EditComponent,
      },
      {
        path: ':teamId/view',
        component: ViewComponent,
      },
      {
        path: ':teamId',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
