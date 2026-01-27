from ml_models.prototype_model import PrototypeRiskModel

model = PrototypeRiskModel()

def detect_risk_drift(stress, confidence, past_risk):
    confidence_inverse = 10 - confidence
    features = [stress, confidence_inverse, past_risk * 10]

    score = model.predict(features)

    if score < 0.3:
        return "Low Risk Drift", score
    elif score < 0.6:
        return "Medium Risk Drift", score
    else:
        return "High Risk Drift", score
