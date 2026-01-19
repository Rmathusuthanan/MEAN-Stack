import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  activeTab: string = 'register';

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
