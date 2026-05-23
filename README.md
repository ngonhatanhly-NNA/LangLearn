# LangLearn
# 🌟 LinguaAI

> **Trợ lý học ngôn ngữ thông minh tích hợp AI & Spaced Repetition**

## 📖 Tổng quan dự án

**LangLearnI** là một nền tảng học từ vựng tùy biến 100%, được thiết kế theo kiến trúc Microservices. Hệ thống kết hợp sức mạnh của **Java Spring Boot** (Core Business) và **Python FastAPI** (AI Engine) để mang lại trải nghiệm học tập sinh động và hiệu quả.

Dự án áp dụng thuật toán **Spaced Repetition (SM-2)** để tối ưu hóa trí nhớ dài hạn, phù hợp với mọi giai đoạn học tập—từ làm quen bảng chữ cái, ghi nhớ từ vựng/ngữ pháp cơ bản, đến chinh phục các cấp độ ngôn ngữ phức tạp. Hơn thế nữa, LinguaAI tích hợp các dịch vụ Trí tuệ nhân tạo hàng đầu (**GPT-4o, DALL-E, Google TTS**) để tự động sinh câu ví dụ, hình ảnh minh họa và giọng đọc chuẩn bản xứ.

---

## ✨ Tính năng nổi bật

* **🧠 Học tập theo Spaced Repetition (SM-2):** Đánh giá chất lượng ghi nhớ sau mỗi lần lật Flashcard. Hệ thống tự động tính toán lại `interval`, `ease_factor` và thời điểm ôn tập tiếp theo.
* **🤖 Tích hợp AI toàn diện:** Tự động tạo câu ví dụ theo ngữ cảnh, sinh ảnh minh họa bằng DALL-E, và phát âm chuẩn qua Google TTS ngay khi bạn thêm từ vựng mới.
* **📚 Quản lý từ vựng thông minh:** Thêm, sửa, xóa và tra cứu từ vựng/ngữ pháp dễ dàng. Dashboard trực quan giúp theo dõi tiến độ, streak học tập hàng ngày và tỉ lệ ghi nhớ.
* **💬 Chatbot luyện tập:** Luyện giao tiếp trực tiếp với AI bằng chính những từ vựng bạn đang học. Hệ thống AI có thể được mở rộng và fine-tune sâu hơn (tùy chỉnh Epochs, Optimizers) để phân tích lỗi sai chính xác.

---

## 🏗️ Kiến trúc Hệ thống

Dự án sử dụng kiến trúc **Microservices**, giao tiếp thông qua REST API và được container hóa hoàn toàn bằng Docker.

```text
Client (React SPA) 
    │
    ├──> Backend Core (Java Spring Boot)  : Quản lý User, Flashcards, Logic SM‑2
    │       │
    │       └──> AI Service (Python FastAPI) : Xử lý Prompt, OpenAI API, DALL-E, TTS
    │
    └──> MySQL Database (Dữ liệu quan hệ)

💻 Tech StackThành phầnCông nghệChi tiếtFrontendReact 18, Vite, Tailwind CSSUI responsive, quản lý state với Context API/Zustand, Axios interceptors.Backend CoreJava 17, Spring Boot 3.3Spring Data JPA, Spring Security, JWT Auth, xử lý nghiệp vụ cốt lõi.AI EnginePython 3.11, FastAPIPydantic, OpenAI API client, kiến trúc async hiệu suất cao.DatabaseMySQL 8.0Lưu trữ quan hệ (User, Vocabulary, Review logs).DevOpsDocker, Docker Compose, GitHub ActionsContainerization, CI/CD pipeline, tự động test và build image.📂 Cấu trúc thư mụcBackend Core (/language-learning-backend)Plaintextsrc/main/java/com/linguaai/
├── config/        # Security, CORS, WebClient (gọi Python Service)
├── model/         # User, Vocabulary, Review entities
├── dto/           # Data Transfer Objects
├── repository/    # Spring Data JPA Interfaces
├── service/       # Logic SM-2, AuthService, AIClient
├── security/      # JWT Utils, Filters
└── controller/    # REST Endpoints
AI Engine (/ai-service)Plaintextai-service/
├── main.py              # FastAPI app & Router mounting
├── routers/             # /ai/generate, /dictionary
├── services/            # OpenAI wrapper, TTS client, Jisho/Mazii client
├── models/              # Pydantic schemas
└── requirements.txt
Frontend (/frontend)Plaintextsrc/
├── api/                 # Cấu hình Axios
├── components/          # Flashcards, Forms, Charts
├── pages/               # Home, Login, Dashboard, Review
└── context/             # Auth Context
🚀 Hướng dẫn cài đặt & Chạy cục bộ1. Clone repository:Bashgit clone [https://github.com/yourusername/LinguaAI.git](https://github.com/yourusername/LinguaAI.git)
cd LinguaAI
2. Cấu hình biến môi trường:Tạo file .env và application.yml theo cấu trúc sau:/ai-service/.envCode snippetOPENAI_API_KEY=your_openai_api_key
/language-learning-backend/src/main/resources/application.yml (hoặc cấu hình qua biến môi trường)YAMLspring:
  datasource:
    password: your_db_password
jwt:
  secret: your_super_secret_key
3. Khởi chạy với Docker Compose:Bashdocker-compose up -d --build
4. Truy cập ứng dụng:Frontend: http://localhost:5173Spring Boot API: http://localhost:8080/api/v1FastAPI Swagger UI: http://localhost:8000/docs🎯 Định hướng phát triển (Roadmap)[x] Giai đoạn 1 (MVP): Xác thực JWT, CRUD từ vựng, tự động sinh audio/ví dụ.[x] Giai đoạn 2: Áp dụng thuật toán SM-2, xây dựng giao diện Flashcard tương tác.[ ] Giai đoạn 3: Tích hợp Chatbot luyện tập ngữ cảnh, DALL-E tự động sinh ảnh từ vựng, phân tích điểm yếu học tập.[ ] Giai đoạn 4: Triển khai CI/CD hoàn chỉnh lên Vercel/Railway, tích hợp Prometheus/Grafana monitoring.💡 Thông tin CV / Resume HighlightsDự án này chứng minh khả năng thiết kế và xây dựng hệ thống Full-stack phân tán với các điểm nhấn:Phát triển và kết nối thành công 2 ngôn ngữ backend (Java & Python) thông qua REST API.Thiết kế hệ thống Microservices, tách biệt rõ ràng giữa Business Logic (Java) và AI Processing (Python).Áp dụng thực tế thuật toán học máy (Spaced Repetition) và tích hợp API bên thứ ba (OpenAI, Google Cloud).Thực hành DevOps cơ bản với Docker và quy trình CI/CD.
