import { User } from './../../../shared/model/user.model';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: User;

  constructor(
    private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
