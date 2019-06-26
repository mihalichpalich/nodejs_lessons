var express = require('express');

var app = express(); //доступ к ф-ям библиотеки express через переменную

app.get('/', function(req, res) {
	res.send('This is home');
}); //при загрузке главной страницы срабатывает ф-я

app.get('/news', function(req, res) {
	res.send('This is news');
});

app.get('/news/:id', function(req, res) { //'/news/:id/:name'
	res.send('ID is - ' + req.params.id /*+ req.params.name*/);
}); //загрузка страницы по id (и name)

app.listen(3000);