import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "Satyam's just about working not complete Bunk test!";
  
  constructor() { }

  ngOnInit() {
  }

}
