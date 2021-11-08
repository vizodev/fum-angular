import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { IndexComponent } from './pages/index/index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: '', component: IndexComponent },
    ],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ForgotComponent,
    IndexComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
