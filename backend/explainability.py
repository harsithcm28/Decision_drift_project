def generate_explanation(factors, risk_level, biases):
    explanation = []

    if factors["stress"] > 6:
        explanation.append("High stress affected the decision.")

    if factors["confidence"] < 4:
        explanation.append("Low confidence caused confusion.")

    if risk_level == "High Risk Drift":
        explanation.append("User is slowly taking more risks.")

    if "No major bias detected" not in biases:
        explanation.append("Thinking bias influenced the decision.")

    if not explanation:
        explanation.append("Decision is stable.")

    return explanation
