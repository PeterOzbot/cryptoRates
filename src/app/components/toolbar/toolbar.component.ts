import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteNames } from 'src/app/app-routing';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  toggleSetting() {
    if (this.router.url === '/' + RouteNames.Settings) {
      this.location.back();
    }
    else {
      this.router.navigateByUrl(RouteNames.Settings);
    }
  }

  goToRoot() {
    this.router.navigateByUrl(RouteNames.Root);
  }
}
