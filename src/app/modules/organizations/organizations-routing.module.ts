import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
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
        path: ':orgId/edit',
        component: EditComponent,
      },
      {
        path: ':orgId/view',
        component: ViewComponent,
      },
      {
        path: ':orgId',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationsRoutingModule {}
