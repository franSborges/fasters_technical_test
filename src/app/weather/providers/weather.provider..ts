import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class WeatherProvider {
  private clientAxios: AxiosInstance;
  constructor() {
    this.clientAxios = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        appid: 'af7671346867e33904437df484156577',
        units: 'metric'
      },
    });
  }
  async checkTemperature(city: string): Promise<string> {
    const response = await this.clientAxios.get('weather', {
      params: { q: city },
    });

    const { temp, feels_like } = response.data.main;
    const { name, weather: [{description}] } = response.data;

    console.log(response)

    const dataTemperature = {
      Location: `${name}`,
      Temperature: `${Math.round(temp)}c - (${description})`,
      Thermal_sensation: `${Math.floor(feels_like)}`
    }
  
    return JSON.parse(JSON.stringify(dataTemperature));
  }
}
