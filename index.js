var express = require('express');

var app = express(); //доступ к ф-ям библиотеки express через переменную

app.set('view engine', 'ejs'); //добавление шаблонизатора

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/about.html');
});

app.get('/news/:id', function(req, res) {
	res.render();  //отображение шаблона в браузере и передача параметров
});

app.listen(3000);