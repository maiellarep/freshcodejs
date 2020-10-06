/*
	Задания 1-2
*/

//Решение с помощью цикла while
function whileSolution () 
{
	var lim1 = parseInt(document.getElementById('lim1').value);
	var lim2 = parseInt(document.getElementById('lim2').value);
	var result = 0;
	if(lim1 > lim2)
	{
		result = "lim1 > lim2";
	}
	else {
		while (lim1 <= lim2) 
			{
				result += lim1;
				lim1++;
			}
	}
	
	document.getElementById('whileS').value = "Решение с помощью while: " + result;
}

//Решение с помощью цикла for
function forSolution ()
{
	var lim1 = parseInt(document.getElementById('lim1').value);
	var lim2 = parseInt(document.getElementById('lim2').value);
	var result = 0;
	for(let i = lim1; i <= lim2; i++)
	{
		result += i;
	}

	document.getElementById('forS').value = "Решение с помощью for: " + result;
}

//Решение с помощью формулы для нахождения суммы первых n членов арифметической прогресиии
function progrSolution()
{
	var lim1 = parseInt(document.getElementById('lim1').value);
	var lim2 = parseInt(document.getElementById('lim2').value);
	var res = (lim1+lim2)/2*(lim2-lim1+1);
	document.getElementById('first').value = "Результат: " + res;
}


//............................................................................................................
//Задание 3: Реализовать стрелочную функцию произведения двух чисел

ProductNum = () => {
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);	
	var result = num1*num2; 
	document.getElementById('numbersProduct').value = "Произведение двух чисел: " + result;
}

//Задания 3.1-3.6


function RandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Задание 3.1
var array = [];

function initialization() 
{
	var n = parseInt(document.getElementById('arraylen').value);
	for (var i = 0; i < n; i++)
	{
		array[i] = RandomNumber(-10, 10);
		document.getElementById('array').value += array[i] + ", ";
	}
}

function info() {
	document.getElementById('length').value = "Размер массива: " + array.length;

	evenIndex();
	evenElements();
	indexZeros();
	amountZeros();
}

//Задание 3.3
function evenIndex()
{
	for(let i = 0; i < array.length; i += 2)
	{
		document.getElementById('evenind').value += array[i] + ", ";
	}
}

//Задание 3.4
function evenElements()
{
	for(let i = 0; i < array.length; i++)
	{
		if(array[i] % 2 === 0)
		{
			document.getElementById('evennum').value += array[i] + ", ";
		}
	}
}

//Задание 3.5
function indexZeros() 
{
	for(let i = 0; i < array.length; i++)
	{
		
		if(array[i] === 0)
		{
			document.getElementById('indexZeros').value += i + ", ";
		}
	}
}

//Задание 3.6
function amountZeros() 
{
	var counter = 0;
	for(let i = 0; i < array.length; i++)
	{	
		if(array[i] === 0)
		{
			counter++;
		}
		
	}

	if(counter === 0)
	{
		document.getElementById('amountZeros').value = 'В массиве нет нулевых элементов';
	}
	else
	{
		document.getElementById('amountZeros').value ='Количество нулевых элементов в массиве ' + counter;
	}
}

//........................................................................................

function carObj() {
	var car = {
	"number":  document.getElementById('carNum').value,
	"color": document.getElementById('carColor').value,
	"name": document.getElementById('carName').value,
	"model": document.getElementById('carModel').value,
	}

	console.log(car);
}


//........................................................................................
function Book (author, name, year, publishingHouse) 
{
	this.author = author;
	this.name = name;
	this.year = year;
	this.publishingHouse = publishingHouse;
}

function firstEBook (author, name, year, publishingHouse, format, eNumber)
{
	this.author = author;
	this.name = name;
	this.year = year;
	this.publishingHouse = publishingHouse;
	this.format = format;
	this.eNumber = eNumber;
}

function Books1() {
	var book = new Book("BookAuthor", "BookName", "BookYear", "BookPubHouse");
	var ebook = new firstEBook("EBookAuthor", "EBookName", "EBookYear", "EBookPubHouse", "EBookFormat", "EBookeNumber");

	console.log(book);
	console.log(ebook);
}

//......................................................................

function EBook (format, eNumber)
{
	this.format = format;
	this.eNumber = eNumber;
}

function Books2()
{
	var book = new Book("BookAuthor", "BookName", "BookYear", "BookPubHouse");
	var ebook = new EBook("EBookFormat", "EBookeNumber");

	ebook.__proto__ = book;

	console.log(book);
	console.log(ebook);
}