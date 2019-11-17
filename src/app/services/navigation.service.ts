import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteNames } from '../app-routing';
import { Location } from '@angular/common';

@Injectable()
export class NavigationService {
    constructor(private router: Router, private location: Location) { }

    toggleSetting() {
        if (this.router.url === '/' + RouteNames.Settings) {
            this.location.back();
        }
        else {
            this.router.navigateByUrl(RouteNames.Settings);
        }
    }

    goToDetails() {
        this.router.navigateByUrl(RouteNames.Details);
    }

    goToRoot() {
        this.router.navigateByUrl(RouteNames.Root);
    }
}