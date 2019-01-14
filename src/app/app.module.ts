import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { QuizComponent } from './quiz/quiz.component';
import { FootballTeamComponent } from './football-team/football-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    QuizComponent,
    FootballTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent},
      { path: "weather", component: WeatherComponent},
      { path: "quiz", component: QuizComponent},
      { path: "football-team", component: FootballTeamComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
