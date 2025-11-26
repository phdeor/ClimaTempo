package com.pedro.wheater.wheater_backend.controller;

import com.pedro.wheater.wheater_backend.service.WeatherService;
import com.pedro.wheater.wheater_backend.model.WeatherResponse;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

    @GetMapping
    public Mono<WeatherResponse> getWeather(@RequestParam String city) {
        return service.getWeather(city);
    }
}
