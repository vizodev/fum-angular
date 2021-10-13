import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { IndexComponent } from './pages/index/index.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'register', component: SignupComponent },
      { path: 'login', component: SigninComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'signin', component: IndexComponent },
    ],
  },
];
@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    IndexComponent,
  ],
  imports: [CommonModule,RouterModule],
})
export class LoginModule {}
