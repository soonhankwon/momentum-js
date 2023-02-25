const calculator = {
    plus: function (a, b) {
        return (a + b);
    },
    minus: function (a, b) {
        return (a - b);
    },
    divide: function (a, b) {
        return (a / b);
    },
    times: function (a, b) {
        return (a * b);
    },
    pow: function (a, b) {
        return (a ** b);
    }
};

const plusResult = calculator.plus(4, 5);
const minusResult = calculator.minus(plusResult, 2);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powResult = calculator.pow(divideResult, minusResult);