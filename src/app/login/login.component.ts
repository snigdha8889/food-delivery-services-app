import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) {
    this.username = '';
    this.password = '';
  }

  submit() {
    let params = {
      username: this.username,
      password: this.password
    };
    console.log(this.username, this.password);
    this.http.get('http://localhost:4200/assets/data/loginResponse.json', {params: params})
      .pipe(map(res => {
        return res;
      })).subscribe(() => {
      sessionStorage.setItem('isLogin', 'false');
      this.router.navigateByUrl('/');
      console.log('islogin', sessionStorage.getItem('isLogin'));
    });

  }
  ngOnInit() {
  }

}
