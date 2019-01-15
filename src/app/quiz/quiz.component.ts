import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  submit(formValue) {
    console.log(formValue)
    if (formValue == "pizza") {
      console.log("great success")
    }
    else console.log ("ballz")
  }

  constructor() { }

  ngOnInit() {
  }

}
