import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

interface IWeather {
  temp: number;
  humidity: number;
  minTemp: number;
  maxTemp: number;
}

interface IWeatherAPI {
  main: IWeather[];
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private forecast: Observable<IWeather>;
  private error = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.forecast = this.http.get<IWeather>('http://api.openweathermap.org/data/2.5/weather?id=2643744&APPID=f4bbeb8ec1a8fb95591f2cf112aaa575');
    
  }

}

// this.forecast = this.http.get<IWeather>('http://api.openweathermap.org/data/2.5/weather?id=2643744&APPID=f4bbeb8ec1a8fb95591f2cf112aaa575').pipe(
//   catchError((err:HttpErrorResponse) => {
//     this.error = true;
//     return new Observable<IWeather>()
//   })
// );

