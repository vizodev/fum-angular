import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  // route: string;

  // routeChangeSubject = new BehaviorSubject<{
  //   previous: string | null;
  //   current: string;
  // }>({ previous: null, current: '/' });

  constructor(private router: Router) {
    // this.route = router.url;
    // this.router.events
    //   .pipe(
    //     tap((event: Event) => {
    //       if (event instanceof NavigationEnd)
    //         this.routeChangeSubject.next({
    //           previous: this.routeChangeSubject.value.current,
    //           current: event.url,
    //         });
    //     })
    //   )
    //   .subscribe();
  }

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url);
  }

  signin() {
    return this.navigateByUrl('login/signin');
  }

  signup() {
    return this.navigateByUrl('login/register');
  }

  login() {
    return this.navigateByUrl('/login');
  }

  forgotPassword() {
    return this.navigateByUrl('login/forgot');
  }
  home() {
    return this.navigateByUrl('/home');
  }
}
function tap(arg0: (event: Event) => void): import("rxjs").OperatorFunction<import("@angular/router").Event, unknown> {
  throw new Error('Function not implemented.');
}

