var events = require("events"); //модуль событий
var util = require("util"); //модуль наследования

// var myEmit = new events.EventEmitter(); //включение обработки событий

// myEmit.on('some_event', function(text) {
//   console.log(text);
// });

// myEmit.emit('some_event', 'Обработчик событий сработал!');

var Cars = function(model) {
  this.model=model;
};

util.inherits(Cars, events.EventEmitter); //наследование обработчика событий для всех Cars

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');

var cars = [bmw, audi, volvo];
cars.forEach(function(car) {
  car.on('speed', function(text) {
  	console.log(car.model + " speed is - " + text);
  });
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');