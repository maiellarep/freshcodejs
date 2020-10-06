function clearString() 
{
	var str = document.getElementById('task1').value;
	var result = "";
   	result = str.replace(/[^\w\s]/g, "")
          .replace(/\s+/g, " ");
    document.getElementById('readyStr').value = result;
}


//..............................................................................................

function zeros()
{
	var num = parseInt(document.getElementById('task2Num').value);
	var len = parseInt(document.getElementById('task2len').value);
	var res = Math.abs(num).toString();
	while(res.length < len)
	{
		res = '0' + res;
	}

	if(num < 0)
	{
		res = '-' + res;
	}
	document.getElementById('task2Res').value = res;
}

//.................................................................................................

//решение с помощью регулярного выражения
function toCamelCase()
{
	var str = document.getElementById('camelTask').value;
	var res = str.replace(/(\s[a-z])/g, (g) => `${g[1].toUpperCase()}`);
	document.getElementById('camel1Res').value += res;
}

//решение с помощью массива
function CamelCase()
{
	var str = document.getElementById('camelTask').value;
	var words = str.split(" ");
	var res = words[0];
	for (i = 1; i < words.length; i++)
	{
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		res += words[i];
	}
	document.getElementById('camel2Res').value += res;
}
//.................................................................................................
function fibonacci (n) {
    if (n < 3) {
        return [1, 1];
    }

    var a = fibonacci(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
};

function getF() {
	var n = document.getElementById('fibonacciLen').value;
	var res = fibonacci(n);
		for(let i = 0; i < n; i++)
	{
		document.getElementById('fibonacciRes').value += res[i] + ", ";
	}
}
//................................................................................................
function RandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrayFilter()
{
	var len = parseInt(document.getElementById('arraylen').value);
	var array = [];
	for (var i = 0; i < len; i++)
	{
		array[i] = RandomNumber(-10, 10);
		document.getElementById('before').value += array[i] + ", ";
	}


	array = array.filter(f => f > 0);

	for (var i = 0; i < array.length; i++)
	{
		document.getElementById('after').value += array[i] + ", ";
	}
}


//.............................................................................................
class Artist {

	constructor(name, surname, phoneNumber, email) 
	{
		this.name = name;
		this.surname = surname;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.paintAmount = 0;
		this.artistPaint = [];
	}

	addPainting(paintingName, paintingYear, technique, width, height)
	{
		this.artistPaint.push(new Painting(paintingName, paintingYear, technique, width, height));
		this.paintAmount++;
	}

	getPaintInfo()
	{
		this.artistPaint.forEach ((ithem) => {
			console.log("Работа художника");
			console.log("Название " + ithem.paintingName);
			console.log("Год " + ithem.paintingYear);
			console.log("Техника " + ithem.technique);
			console.log("Размер " + ithem.size);
		})
	}

	getPainAmount() {
		console.log("Количество работ:" + this.paintAmount);
	}
}

class Painting {

	constructor(paintingName, paintingYear, technique, width, height) 
	{
		this.paintingName = paintingName;
		this.paintingYear = paintingYear;
		this.technique = technique;
		this.size = [];
		this.size[0] = width;
		this.size[1] = height;
	}
}

function createArtist(){
	var art = new Artist('John', 'Smith', '+5694939596', 'johniam@gmail.com');
	art.addPainting('MyPainting', '2020', 'acryl', 60, 40);
	art.getPaintInfo();
	art.getPainAmount();
	console.log(art);
}



//..................................................................................

var clickAmount = 0;
function clickCounter()
{
	clickAmount++;
	document.getElementById("showCount").innerHTML = "Количество нажатий: " +  clickAmount;
}

//....................................................................................

function parCounter()
{
	var p = document.querySelectorAll("#parTask p");
	for(var i = 0; i < p.length; i++)
	{
		p[i].innerHTML = "Номер абзаца : " + (i + 1) + "<br/>" + p[i].innerHTML;
	}
}

//....................................................................................

var divs = document.querySelectorAll("#divTask div");

for (var i = 0; i < divs.length; i++)
{
	divs[i].addEventListener('click', redColor);
}

function redColor() 
{
	this.style.backgroundColor = 'red';
	this.removeEventListener('click', redColor);
	this.addEventListener('click', greenColor);
}

function greenColor() 
{
	this.style.backgroundColor = 'green';
	this.removeEventListener('click', greenColor);
	this.addEventListener('click', redColor);
}

//.................................................................

function numberPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(35);
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success);
	});
}

function booleanPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(true);
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success);
	});
}

function stringPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve("Promise для string");
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success);
	});
}

function symbolPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(Symbol('sym'));
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success.toString());
	});
}

function nullPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(null);
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success);
	});
}

function undefinedPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve();
		}, 2000);
	});

	promise.then((success) => {
		console.log("Операция была выполнена успешно. Данные: " + success);
	});
}

function objectPromise()
{
	let promise = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve({
				name: "Ralph",
				species: "dog",
				breed: "German Shepherd"
			});
		}, 2000);
	});

	promise.then((success) => {
		let str = '';
		for(k in success) {
			str += k+": "+ success[k]+"\r\n"; 
		}
		console.log("Операция была выполнена успешно. Данные: " + str);
	});
}

function promises() {
	numberPromise();
	booleanPromise();
	stringPromise();
	symbolPromise();
	nullPromise();
	undefinedPromise();
	objectPromise();
}
