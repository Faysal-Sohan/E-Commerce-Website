import { Component, OnInit } from '@angular/core';
import { faPhone ,faMailBulk, faMobile , faShoppingBag, faBell , faCommentAlt , faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faMobile = faMobile;
  faShoppingBag = faShoppingBag;
  faBell = faBell;
  faComment = faCommentAlt;
  faUser = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
