var express = require('express');

var app = express(); //доступ к ф-ям библиотеки express через переменную
var obj = {title: "Новость", id: 4, paragraphs: ['Параграф', 'Обычный текст', 'Числа: 2, 4, 6', 99]};

app.set('view engine', 'ejs'); //добавление шаблонизатора

app.use('/public', express.static('public')); //подключение статических файлов (css, img и т.д.), указываем url и саму папку

app.get('/', function(req, res) {
	res.render('index');  //отображение шаблона из папки views (обязательно!) в браузере и передача параметров
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/news/:id', function(req, res) {
	res.render('news', {newsID: req.params.id, obj: obj});  
});

app.listen(3000);