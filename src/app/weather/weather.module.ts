import { Module } from '@nestjs/common';
import { WeatherControllerMap } from './controller/weather.controller';
import { OpenWeatherMapService } from './service/weather.service';
import { WeatherProvider } from './providers/weather.provider.';

@Module({
  imports: [],
  controllers: [WeatherControllerMap],
  providers: [OpenWeatherMapService, WeatherProvider],
})
export class WeatherModuleMap {}
