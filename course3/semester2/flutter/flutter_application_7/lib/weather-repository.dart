import 'dart:convert';

import 'package:http/http.dart' as http;

class WeatherRepository {
  Future<WeatherResponse> getWeather() async {
    Uri uri = Uri.parse(
        'http://api.weatherapi.com/v1/current.json?key=66dc075d56464ef88de102107241202&q=London&aqi=no');
    final res = await http.get(uri);
    // print(res.body);
    return WeatherResponse.fromJson(jsonDecode(res.body));
  }
}

class WeatherResponse {
  WeatherResponse({
    required this.current,
  });
  CurrentWeatherResponse current;

  factory WeatherResponse.fromJson(Map<String, dynamic> json) =>
      WeatherResponse(
        current: CurrentWeatherResponse.fromJson(json['current']),
      );
}

class CurrentWeatherResponse {
  CurrentWeatherResponse({
    required this.temp,
    required this.wind,
  });
  double temp;
  double wind;

  factory CurrentWeatherResponse.fromJson(Map<String, dynamic> json) =>
      CurrentWeatherResponse(
        temp: json['temp_c'],
        wind: json['wind_kph'],
      );
}
