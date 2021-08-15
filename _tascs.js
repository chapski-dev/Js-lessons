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
        } else {break;
        }
    }
    console.log(longArray);
}
addToArray();

// 5. Написать функцию, которая принимает массив из строчно-числовых значений. Возвращает массив, в котором строчные значения стали числовыми, а числовые строчными.
const longArray = ['2', 4, 5, 1, '8'];
let changedArray = [];
function changType(){
    for (let i = 0; i < longArray.length; i++){
        if( typeof longArray[i] === String){
            changedArray.push(longArray[i] === Number)
        } else if (typeof longArray[i] === Number){
            changedArray.push(longArray[i] === String)
        }
    }
}
changType();

// 6. Написать функцию, которая принимает два массива и возвращает один целый.(через spread)

// 7. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

// 8. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC). Предполагается, что посетитель вводит не только числа.

// 10.08 Задания на занятии
// Задача 1
// Условие: Проверить строку на полиндром (строка читается в том же порядоке даже если применен метод reverse)
// Решение:
const arr = [];
function checkArray(value){
    const arr = value.split('');
    return arr.reverse().join('') === value;
}
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
// const arr = [];
// const newArr = arr.map((item, index) => (
//     index % 2 === 0 ? item.split('')
//                     : item).forEach((item, index) => (
//     index % 2 ? item.toLowerCase()
//               : item.toUpperCase()
//     )));
// ;

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