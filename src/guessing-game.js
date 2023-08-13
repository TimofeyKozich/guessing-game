class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        return this.minRange + Math.round((this.maxRange - this.minRange) / 2);
    }

    lower() {
        this.maxRange = this.minRange + Math.round((this.maxRange - this.minRange) / 2);
    }

    greater() {
        this.minRange = this.minRange + Math.round((this.maxRange - this.minRange) / 2);
    }
}

module.exports = GuessingGame;