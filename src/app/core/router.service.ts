import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  rootPath?: string;

  constructor(public router: Router) {
    this.rootPath = this.router.config[1].path;
  }

  private getQueryParams(path: string): Object {
    const queryParams = path.split('?')[1] || '';
    const params = queryParams.length ? queryParams.split('&') : [];
    let pair: any = null;
    let data = {};
    params.forEach((d) => {
      pair = d.split('=');
      data[`${pair[0]}`] = pair[1];
    });
    return data;
  }

  redirectTo(...path: string[]): void {
    //console.log(path, this.getQueryParams(path[0]));
    this.router.navigate(this.getRouterLink(...path), {
      queryParams: this.getQueryParams(path[0]),
    });
  }

  getRouterLink(...path: string[]): string[] {
    const root: any = this.rootPath ? '/' + this.rootPath : [];
    path = path.map((segment: string) => segment.split('?')[0]); // clean up / remove query params
    return [...path];
  }

  setRootPath(path: string): void {
    this.rootPath = path;
  }

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url);
  }

  signin() {
    return this.navigateByUrl('login/signin');
  }

  login() {
    return this.navigateByUrl('/login');
  }

  forgotPassword() {
    return this.navigateByUrl('login/forgot');
  }

  home() {
    return this.navigateByUrl('');
  }

  users() {
    return this.navigateByUrl('/users');
  }

  addUser() {
    return this.navigateByUrl('/users/new');
  }

  editUser(uid: string) {
    return this.navigateByUrl('/users/' + uid + '/edit');
  }

  viewUser(uid: string) {
    return this.navigateByUrl('/users/' + uid + '/view');
  }

  teams() {
    return this.navigateByUrl('/teams');
  }

  addTeam() {
    return this.navigateByUrl('/teams/new');
  }

  editTeam(teamId: string) {
    return this.navigateByUrl('/teams/' + teamId + '/edit');
  }

  viewTeam(teamId: string) {
    return this.navigateByUrl('/teams/' + teamId + '/view');
  }

  organizations() {
    return this.navigateByUrl('/organizations');
  }

  addOrganization() {
    return this.navigateByUrl('/organizations/new');
  }

  editOrganization(orgId: string) {
    return this.navigateByUrl('/organizations/' + orgId + '/edit');
  }

  viewOrganization(orgId: string) {
    return this.navigateByUrl('/organizations/' + orgId + '/view');
  }

  schema() {
    return this.navigateByUrl('/schema/');
  }

  editSchema(schemaId: string) {
    return this.navigateByUrl('/schema/' + schemaId + '/view');
  }

  permissions() {
    return this.navigateByUrl('/permissions');
  }

  profile() {
    return this.navigateByUrl('/profile');
  }

  roles() {
    return this.navigateByUrl('/roles');
  }
}
