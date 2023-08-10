import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cityName: string = 'Karachi';
  weatherData?: WeatherData;
  
  constructor(private weatherService: WeatherService){}

  private getWeatherData(cityName: string ){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);

      }
    })
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName= '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName= '';
  }


}
