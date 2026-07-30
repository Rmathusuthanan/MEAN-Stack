import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  activeTab: 'login' | 'register' | null = null;

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }
}
