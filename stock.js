var stock = {
    randomAroundZero: function () {
        var num = Math.random() > 0.5 ? 1 : -1;
        // console.log(num);
        //blir -1 eller 1
        return num;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;

        return start * rate + variance * stock.randomAroundZero();
    }
};

module.exports = stock;
