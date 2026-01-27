def process_stress_input(stress_level):
    if stress_level < 0:
        return 0
    if stress_level > 10:
        return 10
    return stress_level
