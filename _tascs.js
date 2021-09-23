// 27.07 Первое задание 

// Задание 1
// let count = prompt('Введите число:')
// if (count < 10 || count >= 25) {
//     alert('Четко');
// } else {
//     alert('Не порядок');
// }

// Задание 2

// let userPassword;
// userPassword = "777";
// let currentPassword;
// currentPassword = prompt('Введите пароль');
// console.log(currentPassword);

// if (currentPassword === userPassword){
    // alert('Пароль верный');
// } else if (currentPassword === null) {
    // alert('Отменено');
// } else if (currentPassword != userPassword){
    // alert('Я вас не знаю');
// }

// 27.07 Дз
// Задание 1
let number = +prompt("Ввидите число");

if (number  > 0){
    alert("Значение больше 0")
} else if (number  < 0){
    alert("Значение меньше 0")
} else {
    alert("Значение равно 0")
}

// Задание 2
let userName = prompt('Ввидите имя');
console.log(userName);
let userPassword;
userPassword  = prompt('Ввидите пароль');
console.log(userPassword);
const adminName = 'Админ';
const adminPassword = '123456';

if (userName === null){
    alert('Вход отменён')
} else if(userName !== adminName){
    alert('Пользователь не найден')
} else {
    if (userPassword === null ){
        alert('Вход отменён');
        console.log(prompt('Ввидите пароль'));
    } else if (userPassword !== adminPassword){
        alert('Пароль неверен');
        console.log(prompt('Ввидите пароль'));
    } else {
        alert('Добро пожаловать!');
    }
} 

// ToDo: Почему выводится 2 раза promt с запросом пароля?

// } else if(userName === adminName){
//     if (userPassword === null ){
//         alert('Вход отменён');
//         console.log(prompt('Ввидите пароль'));
//     } else if (userPassword !== adminPassword){
//         alert('Пароль неверен');
//         console.log(prompt('Ввидите пароль'));
//     } else if (userPassword === adminPassword){
//         alert('Добро пожаловать!');
//         console.log(prompt('Ввидите пароль'));
//     }
// } 

// Задание 3

let age = prompt('Ввидите число');

if(age >= 14 && age <= 90){
    alert('Верно');
} else {
    alert('Введенные числа не верны')
}


// 29.07 Функции 
// Задание на занятии 
// Задание 1
// todo: Написать функцию, которая возвращает приветствие для пользователя.

const sayHello = (name) => {
    if (typeof name !== String) {
        return;
    } else if (name.toUpperCase() === "Mark"){
        return "I love you"; 
    } else {
        return 'Hello';
    }
}

console.log(sayHello('Mark'));

                                                // 29.07 Домашка

// Задание 1
// * 1
// todo: Найти гипотенузу прямоугольного треугольника по теореме Пифагора.

const calculateHypotenuse = (leg1, leg2) => {
	
}
console.log(`Your answer is: ${calculateHypotenuse(3, 4)}`);

// * 2
// todo: Написать функцию, которая возвращает меньшее из чисел.

const findMin = (firstNumber, secondNumber) => {
	if (firstNumber < secondNumber) {
        alert(firstNumber);
    } else{
        alert(secondNumber);
    };
};
console.log(`Your number is: ${findMin(-50, 4)}`);

// * 3
// todo: Написать функцию, которая возвращает чётное ли число.

const isEven = (number) => {
   if (number % 2 === 0){
       alert("Good!");
   } else {
       alert("Bad");
   }
};
console.log(isEven(12));

// * 4
// todo: Написать функцию, которая удаляет первый и последний элемент строки.

const deleteChar = (string) => {
   console.log(string.slice(1, -1));
};
console.log(deleteChar('12345'));

// * 5
// todo: Написать функцию, которая делает первый символ строки заглавным, а остальные строчными.

const capitalize = (string) => {
    if (!string) return string;

    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitalize('asdfg'));

// * 6
// todo: Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;
  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

let browser = prompt ("???",'');
function findBrowser(){
    if (browser === "IE"){
        alert( 'О, да у вас IE!');
    } else if (browser === undefined || browser != "Chrome"||'Firefox'||'Safari'||'Opera'){
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }else if (browser == "Chrome"||'Firefox'||'Safari'||'Opera'){
        alert( 'Да, и эти браузеры мы поддерживаем' );
    }
}
findBrowser();

// 03.08 Циклы и Массивы 
// Задание на занятии
// Задача 1: Трансформировать for в while
// Условие:
for (let i = 0; i < 5; i++){
    alert('number' + i);
}
// Решение:
let i = 0;
while (i < 5){
    alert('number' + i);
    i++;
} 

// Задача 2: с помощью цикла for вывести четные числа от 2 до 10
// Решение:
for (let i = 2; i <= 10; i += 2){
    alert('number' + i);
}

// Задача 3: Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер если найдено, или -1 если не найдено
// find([1, 2, 3 ,4 ,5], 4)


function find(arr, value){                                                          // Решение не верно
    let arr = [1, 2, 3, 4, 5];
    let value = 4;
    for (i = 0; i <= arr.length; i++){
        if (value = arr[3]) {
            break
        } else {
            alert(-1)
        }
    }
};

function find(arr, value){  
    for (let i = 0; i <= arr.length; i++){
        if (value = arr[i]) return i;
    }
    return -1;
    
}
alert(find([], 4));


// 03.08 Домашка
// 1. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 1; i <= 3; i++) {
    console.log('Номер ' + i + '!');
}
// Решение:
let i = 1;
while(i <= 3) {
    console.log('Номер ' + i + '!');
    i++
}

// 2. Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его в консоль.
// Добавьте в начало значения «Рэп» и «Регги».

// Ожидаемые результаты на каждом шаге:
// ['Джаз', 'Блюз']
// ['Джаз', 'Блюз', 'Рок-н-Ролл']
// ['Джаз', 'Классика', 'Рок-н-Ролл']
// ['Классика', 'Рок-н-Ролл']
// ['Рэп', 'Регги', 'Классика', 'Рок-н-Ролл']

const music = ['Джаз', 'Блюз'];
    //шаг 1
music.push('Рок-н-Ролл');
    // получили:
const music = ['Джаз', 'Блюз', 'Рок-н-Ролл'];        
// шаг 2
const music = ['Джаз', 'Блюз', 'Рок-н-Ролл']; 
music.pop();
music.pop();
music.push('Классика');
music.push('Рок-н-Ролл');
// получили:
const music = ['Джаз', 'Классика', 'Рок-н-Ролл'];
    // шаг 3
const music = ['Джаз', 'Классика', 'Рок-н-Ролл'];
music.shift();
music.unshift();
    // получили:
    const music = ['Классика', 'Рок-н-Ролл'];
// шаг 4
const music = ['Классика', 'Рок-н-Ролл'];
music.unshift('Рэп', 'Регги');
// получили:
const music = ['Рэп', 'Регги', 'Классика', 'Рок-н-Ролл'];



// 3. Написать функцию, которая возвращает последний элемент массива.
const longArray = [1,2,3,4,'black'];
function lastElementArray(){
    let i = longArray[longArray.length - 1];
    console.log(i);
};
lastElementArray();

// 4. Напишите код, который запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива.
const longArray = [];
function addToArray(){
    let i = '';
    while (true){
        if (longArray.unshift(prompt("Введите данные", "")) == undefined){
            break;
        } else if (longArray.unshift !== undefined){
            alert(longArray);
        } else { break;
        };
    };
    console.log(longArray);
};
addToArray();

// 5. Написать функцию, которая принимает массив из строчно-числовых значений. Возвращает массив, в котором строчные значения стали числовыми, а числовые строчными.
const longArray = ['2', 4, 5, 1, '8'];
let changedArray = [];
function changType(){
    for (let i = 0; i < longArray.length; i++){
        if( typeof longArray[i] === String){
            changedArray.push(longArray[i] === Number);
        } else if (typeof longArray[i] === Number){
            changedArray.push(longArray[i] === String);
        };
    };
};
changType();

// 6. Написать функцию, которая принимает два массива и возвращает один целый.(через spread)
function returnArr(arr1) {
    const arr2 = [...arr1];
    console.log(arr2);
    // return
};
returnArr([1, 2, 3]);
// 7. Создайте переменную num и присвойте ей значение '12345'.
// Найдите произведение (умножение) цифр этого числа.
let num2 = '12345';
alert(num2[0] * num2[1] * num2[2] * num2[3] * num2[4]);

// 8. Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
// либо не нажмёт кнопку Cancel (ESC). Предполагается, что посетитель вводит не только числа.
let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

// 10.08 Задания на занятии
// Задача 1
// Условие: Проверить строку на полиндром (строка читается в том же порядоке даже если применен метод reverse)
// Решение:
const arr = [];
function checkArray(value){
    const arr = value.split('');
    return arr.reverse().join('') === value;
};
changedArray('abcba');
// Задача 2
// Условие: Написать функцию которая округляет все числовые значения в большую сторону а не числовые удаляет
// Решение:
// const arr = [];
// function roundNum (array){
//     let numsArr = array.filter(item => typeof item === 'number').forEach(item => Math.ceil(item);
// };
// array(5.2, "wada", [], 2.7);

// Задача 3
// Условие: Дан массив со строчными элементами. Вернуть по четному индексу в camelCase а по нечетному без изменений.
// Решение:
const arr = [];
const newArr = arr.map((item, index) => (
    index % 2 === 0 ? item.split('')
                    : item).forEach((item, index) => (
    index % 2 ? item.toLowerCase()
              : item.toUpperCase()
    )));
;

//  Обьекты 12.08
// Задание на занятии
// Задание 1 
// Условие: Создать обьект человека со свойствами: имя, возраст и методом sayIntro(),
//  в котором вы скажете с помощью aletrt() как вас зовут и сколько вам лет
// Решение:

let person = {
    name: "Ivan",
    age: 18,
    sayIntro: function(){
        alert (`${this.name}, ${this.age}`)
    }
}
person.sayIntro();

// Задание 2
// Условие: Создать обьект car с набором свойств по желанию. 
// Вывести в цикле все ключи и значения обьекта
// Решение: 
let car = {
    brand: "Mazda",
    color: red,
};
for (let key in car) {
    console.log(key);                             
    console.log(person[key]);                   
};

// Задание 3
// Создать объект selfGeneratedUser с методами: 
// 1) getInfo(), при вызове которого мы через prompt()
//  поочередно получим данные об имени (name), емейле (email) и телефоне (phone) пользователя
//  и запишем их в соответствующие свойства объекта. 
// 2) introduce(), при вызове которого мы поочередно выводим
//  c помощью alert name, email и phone. 
// Если поля нет - не выводим его, переходим к другому полю.
let selfGeneratedUser = {
    getInfo: function() {
        this.name = prompt('Ваше имя?');
        this.email = prompt('Ваш email?');
        this.phone = prompt('Ваш телефон?');
    },
    introduce: function() {
        if(this.name) {
            alert(this.name);
        };
        if(this.email) {
            alert(this.email);
        };
        if(this.phone) {
            alert(this.phone);
        };
    }
}

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();

// * 1
// todo: Функция принимает МАССИВ пользователей. Возвращает ОБЪЕКТ, состоящий из МАССИВОВ women и men.
// todo: Поля firstName и lastName объеденить в одно fullName.

const users = [
	{
		id: 1,
		firstName: 'Jeanette',
		lastName: 'Penddreth',
		email: 'jpenddreth0@census.gov',
		gender: 'Female',
		ipAddress: '26.58.193.2',
	},
	{
		id: 2,
		firstName: 'Petr',
		lastName: 'Jackson',   
		email: 'gfrediani1@senate.gov',
		gender: 'Male',
		ipAddress: '229.179.4.212',
	},
];
// let fullName = `${users.firstName}  ${users.lastName}`;
// let user1 = users[0];
// let user2 = users[1];
function getArrUsers(arrOfUsers){  
    arrOfUsers = users;
    for (let key in arrOfUsers){
        console.log(key);
    };
    return
};
getArrUsers();
// ОБьекты

// Задание (!1)
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// 1.Создайте пустой объект user.
// 2/Добавьте свойство name со значением John.
// 3.Добавьте свойство surname со значением Smith.
// 4.Измените значение свойства name на Pete.
// 5.Удалите свойство name из объекта.

let user = {};
user.name = 'John';
console.log(user);
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name
console.log(user);


// Задание (!2)
// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule) ); // false

let schedule = {};
function isEmpty(obj){
    for (let key in obj){
        return false;
    };
    return true;
};
isEmpty();
// Задание (!3)
// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
//  Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = Object.values(salaries).reduce((total, person) => total + person, 0);
console.log(sum);


//---------------------------------------------------------------------------------------------------------------------------------
// * 2
// todo: Функция принимает массив объектов.
// todo: Возвращает массив пользователей, отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года.
// todo: Количество пользователей может быть не ограничено.

const initialData = [
	{ username: 'Boris', age: 25, },
	{ username: 'Alex', age: 21, },
	{ username: 'Oleg', age: 14, },
	{ username: 'Dmitriy', age: 35, },
	{ username: 'Lida', age: 72, },
];
function getArray(arr) {
    let values = arr.map(i => Object.values(i) )
    console.log(values);
    if(Object.values(values) < 21){
        delete values.age;
    };
    values.sort();
    return
};
getArray(initialData);
//---------------------------------------------------------------------------------------------------------------------------------
// * 3
// todo: Функция принимает массив объектов пользователей первым параметром, id пользователя вторым параметром.
// todo: Функция должна удалить всех пользователей с передаваемыми в неё id и вернуть массив с оствашимеся пользователями.

const usersIdList = [
	{ name: 'Nick', id: 1, },
	{ name: 'Alex', id: 2, },
	{ name: 'Oleg', id: 3, },
	{ name: 'Dima', id: 4, },
	{ name: 'Lida', id: 5, },
];

//---------------------------------------------------------------------------------------------------------------------------------
// * 4
// todo: Функция принимает массив из числовых и строчных значений.
// todo: Результатом функции является новый массив объектов.
// todo: Каждый элемент нового массива должен сожержать поля значения, индекса, типа данных (number или string).

//---------------------------------------------------------------------------------------------------------------------------------
// * 6
// todo: Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map.

const newReleases = [{
	id: 70111470,
	title: "Die Hard",
	boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 654356453,
	title: "Bad Boys",
	boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
}, {
	id: 65432445,
	title: "The Chamber",
	boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 675465,
	title: "Fracture",
	boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
}];
//---------------------------------------------------------------------------------------------------------------------------------
// * 7
// todo: Выведите массив с id для видео у которых рейтинг 5.0. 
// todo: В качестве входных данных используйте newReleases из предыдущего задания.

//---------------------------------------------------------------------------------------------------------------------------------
// * 8
// todo: Преобразуйте массив в объект используя функцию reduce.

const videos = [{
	id: 65432445,
	title: "The Chamber"
}, {
	id: 675465,
	title: "Fracture"
}, {
	id: 70111470,
	title: "Die Hard"
}, {
	id: 654356453,
	title: "Bad Boys"
}];

// --------------
// * 9
// todo: С помощью функций map, reduce, вывести url у которого самая большая площадь.

const boxarts = [
	{
		width: 200,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
	},
	{
		width: 150,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
	},
	{
		width: 300,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
	},
	{
		width: 425,
		height: 150,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
	}
];

boxarts.reduce((acc, el) => {
    if (!acc) return {squere: el.width * el.height, url: el.url}
    if (el.width * el.height > acc.squere) {
        return {squere: el.width * el.height, url: el.url}
    } else {
        return acc;
    }
}).url


// Задание на занятии по DOM 
// 17.08.2021
// Задание 1 - Найти в документе элемент с id = "my-first-elem"
document.getElementById('my-first-elem');
document.querySelector('#my-first-elem');

// Задание 2 - Найти все элементы с классом container 
document.querySelectorAll('.container');
document.getElementsByClassName ('container');

// Задание 3 - Найти первые 2 элемента с классом 'element'

document.getElementsByClassName('element')[0,1];
document.querySelectorAll('.element')[0,1];

// Задание 4 
// Условие: Создать элемент p с классом 'text' и с текстом - "Это всего лишь текст",
// после него вставте див с классом "alert" и с текстом "А это сообщение об ошибке",
// с красным фоном и белыми полями (padding) размером 20px
// Решение:
const p = document.createElement('p').classList.add('text');
p.innerText = "Это всего лишь текст";
const div = document.createElement('div').classList.add('alert').innerText = "А это сообщение об ошибке";
div.style.backgroundColor = "red";
div.style.color = 'white';
div.style.padding = '20px';
p.after(div);

// Дз от 17.08 на 19.08
// Задание 1
function showMessage (text, color, top, left){
    const div = document.createElement('div').classList.add('message');
    div.innerText = text;
    div.style.backgroundColor = color;
    div.style.position = 'fixed';
    div.style.top = top;
    div.style.left = left;
    if (document.querySelectorAll('.message').length > 3) {
        // showMessage.remove([0])
        document.querySelectorAll('.message')[0].remove()
    }
}
