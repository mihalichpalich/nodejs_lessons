var fs = require('fs'); //модуль для работы с файлами

//fs.unlink('text.txt', function () {}); //метод для удаления файлов
fs.unlink('./new-one/some_new.txt', function () {
	fs.rmdir('new-one', function() {});
}); //чтобы удалить папку с файлами нужно сначала удалить файлы в ней

// fs.mkdir('new-one', function() {
// 	fs.writeFile('./new-one/some_new.txt', "Привет мир!", function() {
// 		console.log("Все сработало!");
// 	});
// }); //метод для создания папки

//fs.rmdirSync('new-one'); //метод для удаления папки