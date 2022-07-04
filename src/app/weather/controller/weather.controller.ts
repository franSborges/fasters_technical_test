import { Controller, Get, Param } from "@nestjs/common";
import { OpenWeatherMapService } from "../service/weather.service";

@Controller('location')
export class WeatherControllerMap {
  constructor(private readonly openWeatherMapService: OpenWeatherMapService) {}
  
  @Get(':city')
  async getTemp(@Param() params): Promise<string> {
    return this.openWeatherMapService.checkLocation(params.city);
  }
}