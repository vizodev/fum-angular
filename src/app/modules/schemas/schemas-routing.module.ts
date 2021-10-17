import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { SchemasComponent } from './schemas.component';

const routes: Routes = [
  {
    path: '',
    component: SchemasComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: ':schemaId',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemasRoutingModule {}
