def detect_drift(data):
    drift_score = (
        data.stress_level * 0.4 +
        (10 - data.confidence_level) * 0.3 +
        data.past_risk_score * 3
    ) / 10

    if drift_score < 0.3:
        level = "Low"
    elif drift_score < 0.6:
        level = "Medium"
    else:
        level = "High"

    factors = {
        "stress": data.stress_level,
        "confidence": data.confidence_level,
        "past_behavior": data.past_risk_score
    }

    return round(drift_score, 2), level, factors

