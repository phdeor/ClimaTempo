import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  // Aponta para seu backend Spring Boot
  private apiUrl = 'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) { }

  getWheaterDatas(cityName: string): Observable<any> {
    // Chama sua API local, que por sua vez chama OpenWeatherMap
    return this.http.get(`${this.apiUrl}?city=${cityName}`);
  }
}
