import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  activeTab: string = 'register';

  switchTab(tab: string) {
    this.activeTab = tab;
  }
  constructor(public route: Router) {}

  ngOnInit(): void {}

  onRegister() {
    this.route.navigate(['/register']);
  }
  onlogin() {
    this.route.navigate(['/login']);
  }
}
