import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  page1_user : any = localStorage.getItem("name");
  page1_pass : any = localStorage.getItem("pass");
  constructor() { }

  ngOnInit(): void {
  }

}
