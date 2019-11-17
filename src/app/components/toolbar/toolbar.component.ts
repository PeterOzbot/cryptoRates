import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  toggleSetting() {
    this.navigationService.toggleSetting();
  }

  goToRoot() {
    this.navigationService.goToRoot();
  }
}
