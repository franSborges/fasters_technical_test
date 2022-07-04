import { Injectable } from "@nestjs/common";
import { WeatherProvider } from "../providers/weather.provider.";

@Injectable()
export class OpenWeatherMapService {
  constructor(
    private readonly tempWeather: WeatherProvider) {}
   
 async checkLocation(city: string): Promise<string> {
   const response = this.tempWeather.checkTemperature(city);
   return response;
  }   
}

