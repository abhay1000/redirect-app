import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : any = localStorage.getItem("name");
  password : any = localStorage.getItem("pass");
  temp_user : any = 'running';
  loadRes()
  {
    console.log("start");
  }
  setCred()
  {
      localStorage.setItem("name",this.username);
      localStorage.setItem("pass",this.password);
  }
  constructor() {

   }

  ngOnInit(): void {
  }

}
