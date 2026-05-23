package com.langlearn.language_learning_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vocabularies")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Vocabulary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String word; // Từ vựng gốc (Kanji hoặc tiếng Anh)

    private String reading; 

    @Column(nullable = false)
    private String meaning; // Ý nghĩa tiếng Việt

    @Column(columnDefinition = "TEXT")
    private String generatedExample; // Câu ví dụ AI tự sinh

    @Column(columnDefinition = "TEXT")
    private String exampleTranslation; // Dịch nghĩa câu ví dụ
    
    // Khóa ngoại liên kết với bảng User (mỗi user có tập từ vựng riêng)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}