package com.langlearn.language_learning_backend.controller;

import com.yourapp.language_learning_backend.model.User;
import com.yourapp.language_learning_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
	
	@Autowired
	private AIServiceClient aiServiceClient;

	@GetMapping("/test-ai")
	public Mono<ResponseEntity<Map>> testAi(@RequestParam String word, @RequestParam String meaning) {
		return aiServiceClient.generateExample(word, meaning)
				.map(ResponseEntity::ok);
	}
}