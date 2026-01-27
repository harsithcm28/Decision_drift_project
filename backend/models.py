from pydantic import BaseModel
from typing import List

class DecisionInput(BaseModel):
    user_id: str
    decision_text: str
    stress_level: int
    confidence_level: int
    past_risk_score: float
    risk_tolerance: int

class DriftResponse(BaseModel):
    drift_score: float
    risk_drift_level: str
    ml_risk_score: float
    cognitive_biases: List[str]
    explanation: List[str]
