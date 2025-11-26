package com.pedro.wheater.wheater_backend.service;

import com.pedro.wheater.wheater_backend.model.WeatherResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class WeatherService {

    private final WebClient webClient;

    private final String API_KEY = "0956ed62466743bf777ba75784afe245";

    public WeatherService(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("https://api.openweathermap.org/data/2.5").build();
    }

    public Mono<WeatherResponse> getWeather(String city) {
        return webClient.get()
            .uri(uriBuilder -> uriBuilder
                .path("/weather")
                .queryParam("q", city)
                .queryParam("units", "metric")
                .queryParam("appid", API_KEY)
                .build())
            .retrieve()
            .bodyToMono(WeatherResponse.class);
    }
}
