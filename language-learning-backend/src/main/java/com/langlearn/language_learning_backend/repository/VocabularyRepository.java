package com.langlearn.language_learning_backend.repository;

import com.langlearn.language_learning_backend.model.Vocabulary;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VocabularyRepository extends JpaRepository<Vocabulary, Long> {
    List<Vocabulary> findByUserId(Long userId); // Hàm tự động sinh ra query tìm từ vựng theo User
}