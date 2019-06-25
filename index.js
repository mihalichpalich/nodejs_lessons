var fs = require('fs'); //модуль для работы с файлами

fs.readFile('text.txt', 'utf8', function(err, data) {
  console.log(data);
}); //асинхронное чтение файла, 3-й аргумент - ф-я, которая выполнится после завершения чтения (1-ый аргумент - ошибка, 
//если файл не прочитан, 2-й - данные 'text.txt')

fs.writeFile('some.txt', 'Hi, it is me', function(err, data) { });

console.log("test"); //выведется раньше чем данные из файла

// var message = "Привет, мир!\n" + file_readed;

// fs.writeFileSync('some_new_file.txt', message);
//console.log(file_readed);
