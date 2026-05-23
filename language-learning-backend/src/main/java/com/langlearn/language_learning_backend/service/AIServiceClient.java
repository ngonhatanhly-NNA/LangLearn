package com.langlearn.language_learning_backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Service
public class AIServiceClient {

    private final WebClient webClient;

    public AIServiceClient() {
        this.webClient = WebClient.builder()
                .baseUrl("http://localhost:8000")
                .build();
    }

    public Mono<Map> generateExample(String word, String meaning) {
        Map<String, String> requestBody = Map.of("word", word, "meaning", meaning);
        return webClient.post()
                .uri("/ai/generate-example")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(Map.class);
    }
}