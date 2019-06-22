function test() {
	console.log("Привет!");
}

test();

function call(func) {
	func();
}

var printSomething = function() {
	console.log("Просто текст");
};

call(printSomething);