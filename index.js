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
	var obj = {title: "Новость", id: 4, paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99]};
	res.render('news', {newsID: req.params.id, obj: obj});  //отображение шаблона из папки views (обязательно!) 
															//в браузере и передача параметров
});

app.listen(3000);