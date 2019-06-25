var fs = require('fs');

//подключение к локальному серверу
var http = require('http');

var server = http.createServer(function (req, res) {
	console.log("URL страницы: " + req.url);
	//res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	// var myReadShort = fs.createReadStream(__dirname + '/index.html'); //метод для чтения потока, __dirname - константа для пути к папке
	// myReadShort.pipe(res); //метод для вывода данных в файл потоками
	var obj = {
		model: "Audi",
		speed: "234.5",
		wheels: 4
	};
	res.end(JSON.stringify(obj)); //вывод объекта JSON в строку
});

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000"); 