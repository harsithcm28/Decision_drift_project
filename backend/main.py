from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Input(BaseModel):
    user_id: str
    decision_text: str
    stress_level: int
    confidence_level: int
    past_risk_score: float
    risk_tolerance: int

class Output(BaseModel):
    drift_score: float
    risk_drift_level: str
    explanation: List[str]

@app.get("/")
def root():
    return {"message": "DriftAI Backend is running"}

@app.post("/analyze", response_model=Output)
def analyze(data: Input):
    drift = (data.stress_level + (10 - data.confidence_level)) / 20

    if drift > 0.6:
        risk = "High"
    elif drift > 0.3:
        risk = "Medium"
    else:
        risk = "Low"

    return {
        "drift_score": round(drift, 2),
        "risk_drift_level": risk,
        "explanation": [
            "High stress increases drift",
            "Low confidence increases drift"
        ]
    }
