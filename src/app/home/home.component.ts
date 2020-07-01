import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin: string;

  constructor() {

  }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin');
    console.log('islogin', this.isLogin);
  }

}
