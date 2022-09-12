function tax (SI, UTM){
    if (SI <= 13.5 * UTM){
        return 0;
    }

    if (SI > 13.5 * UTM && SI <= 30 * UTM) {
        return (SI * 0.04 - 0.54 * UTM);
    }

    if (SI > 30 * UTM && SI <= 50 * UTM) {
        return (SI * 0.08 - 1.74 * UTM);
    }

    if (SI > 50 * UTM && SI <= 70 * UTM) {
        return (SI * 0.135 - 4.49 * UTM);
    }

    if (SI > 70 * UTM && SI <= 90 * UTM) {
        return (SI * 0.23 - 11.14 * UTM);
    }

    if (SI > 90 * UTM && SI <= 120 * UTM) {
        return (SI * 0.304 - 17.8 * UTM);
    }

    if (SI > 120 * UTM && SI <= 310 * UTM) {
        return (SI * 0.35 - 23.32 * UTM);
    }

    if (SI > 310 * UTM) {
        return (SI * 0.4 - 38.82 * UTM);
    }
}