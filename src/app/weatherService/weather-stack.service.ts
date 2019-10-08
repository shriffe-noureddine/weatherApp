import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../module/moduleCategory';

@Injectable({
  providedIn: 'root'
})
export class WeatherStackService {

  baseURL = 'http://api.weatherstack.com/current?access_key=dfd1e4136edfdfdf9852e45eb739ebdb&query='
  constructor(private http: HttpClient) { }


  getWeatherCategories(city): Observable<Info> {
    return this.http.get<Info>(this.baseURL + city)
  }

}
