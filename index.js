var fs = require('fs'); //модуль для работы с файлами

var file_readed = fs.readFileSync('text.txt', 'utf8'); //синхронное чтение текста
console.log(file_readed);
