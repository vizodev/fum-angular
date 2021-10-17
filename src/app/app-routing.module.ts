import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('./modules/permissions/permissions.module').then(
        (m) => m.PermissionsModule
      ),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./modules/roles/roles.module').then((m) => m.RolesModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./modules/teams/teams.module').then((m) => m.TeamsModule),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./modules/organizations/organizations.module').then(
        (m) => m.OrganizationsModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  { path: 'schemas', loadChildren: () => import('./modules/schemas/schemas.module').then(m => m.SchemasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
