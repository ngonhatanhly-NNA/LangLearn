from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AI Language Service")

class ExampleRequest(BaseModel):
    word: str
    meaning: str = ""

class ExampleResponse(BaseModel):
    example: str
    translation: str
    explanation: str

# Endpoint kiểm tra service sống
@app.get("/health")
def health():
    return {"status": "ok"}

# Endpoint giả lập tạo câu ví dụ (sẽ thay bằng OpenAI sau)
@app.post("/ai/generate-example", response_model=ExampleResponse)
def generate_example(req: ExampleRequest):
    # TODO: Gọi OpenAI API tại đây
    # Tạm trả về dữ liệu cứng
    return ExampleResponse(
        example=f"Hôm qua tôi đã {req.meaning}.",
        translation=f"Yesterday I {req.meaning}.",
        explanation="Đây là câu ví dụ đơn giản."
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)