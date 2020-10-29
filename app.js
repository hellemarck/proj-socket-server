// app.js
const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const stock = require('./stock.js');

io.origins(['https://posters.mh-jsramverk.me:443']);


var poster1 = {
    name: "Swim for health",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 200
}

var poster2 = {
    name: "Keeping up",
    rate: 1.002,
    variance: 0.4,
    startingPoint: 210
}

var poster3 = {
    name: "Peace",
    rate: 1.003,
    variance: 0.05,
    startingPoint: 225
}

var poster4 = {
    name: "Keep your teeth clean",
    rate: 1.001,
    variance: 0.05,
    startingPoint: 250
}

var poster5 = {
    name: "Washington DC",
    rate: 1.002,
    variance: 0.04,
    startingPoint: 180
}

var poster6 = {
    name: "Let them grow",
    rate: 1.002,
    variance: 0.06,
    startingPoint: 190
}

var poster7 = {
    name: "Scheveningen",
    rate: 1.004,
    variance: 0.07,
    startingPoint: 220
}

var poster8 = {
    name: "Montreal 1924",
    rate: 1.003,
    variance: 0.04,
    startingPoint: 230
}

var poster9 = {
    name: "BTLM",
    rate: 1.001,
    variance: 0.06,
    startingPoint: 210
}

var poster10 = {
    name: "Like Picasso",
    rate: 1.03,
    variance: 0.05,
    startingPoint: 200
}

var posters = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
    poster8,
    poster9,
    poster10
];

io.on('connection', function (socket) {
    console.info("User connected");
});

setInterval(function() {
    posters.map((poster) => {
        poster["startingPoint"] = stock.getStockPrice(poster);
        return poster;
    })
    io.emit("stocks", posters)
}, 5000)

server.listen(3004, () => console.log("working, port 3004"));


// const cors = require('cors');
