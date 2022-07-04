import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherModuleMap } from './app/weather/weather.module';

@Module({
  imports: [HttpModule, WeatherModuleMap],
  controllers: [],
  providers: [],
})
export class AppModule {}
