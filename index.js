var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt'); //метод для чтения потока, __dirname - константа для пути к папке
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
	console.log("Новые данные получены:\n");
	myWriteShort.write(chunk);
}); //обработчик для получения "кусочков" данных