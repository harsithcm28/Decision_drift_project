def detect_cognitive_bias(text):
    text = text.lower()
    biases = []

    if "definitely" in text or "sure" in text:
        biases.append("Overconfidence Bias")

    if "loss" in text or "lose" in text:
        biases.append("Loss Aversion Bias")

    if "always" in text or "never" in text:
        biases.append("Confirmation Bias")

    if not biases:
        biases.append("No major bias detected")

    return biases
