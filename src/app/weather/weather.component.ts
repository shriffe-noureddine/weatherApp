import { Component, OnInit } from '@angular/core';
import { WeatherStackService } from '../weatherService/weather-stack.service';
import { Info } from '../module/moduleCategory';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentWeather: Info;
  city;
  constructor(private ws: WeatherStackService) {
    this.currentWeather = new Info();
  }
  ngOnInit() {
    this.getCurrentWeather(this.city)
  }

  getCurrentWeather(city) {
    this.ws.getWeatherCategories(city).subscribe(res => {
      console.log(res);
      this.currentWeather = res;

    })
  }

}
