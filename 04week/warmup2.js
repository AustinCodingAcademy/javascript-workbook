let numbers = [10, 5, 7, 2, 25, 12, 15];

numbers.reduce(function (x, value, index) {
    if (value > x) {
        return value
    } else {
        return x;
    }
});