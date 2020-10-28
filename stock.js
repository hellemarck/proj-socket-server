var stock = {
    randomAroundZero: function () {
        var num = Math.random() > 0.5 ? 1 : -1;
        return num;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;

        var result = start * rate + variance * stock.randomAroundZero();
        if (result > 1500) {
            return result = 200;
        } else {
            return result.toFixed(2);
        }
    }
};

module.exports = stock;
