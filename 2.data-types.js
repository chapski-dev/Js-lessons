// undefined - не определенный тип
// important: переменная вернёт undefined если она была обьявлена но не определена.

let userName;           // переменная обьявлена но не присвоено значение (не определена);

console.log(typeof userName);  // Выведет undefined
console.log(userName);  // Выведет undefined


// null - представляет собой "ничего(пустое место)"
// important: переменная возвращающая null определена но её значение пустое;
// important: тип данных null содержит только одно значение - null
// warning: оператор typeof переменной со значением null возвращениет тип данных object

let userName = null;  

// true/false - логический (булевый) тип данных
// important: тип данных булинг может принимать два значения true/false; 
// important: можно использовать для проверки
    let trueOrFalse = ( 60 < 10 );
    console.log(trueOrFalse)        //вернет false


    let willYouMerryMe = true;      // переменная обьявлена и является true
    if (willYouMerryMe) {
        console.log('Yes')
    } else {
        console.log('No')
    }

// number - числовой тип данных
// important: тип данных number может принимать целые числа и числа с плавающей запятой

let myAge = 22;
let meHieg = 1.79;
// warning: специальные значения infinity и - infinity 

let infinity = 58 / 0;
let minusInfinity = -58 / 0;

console.log(infinity)               // возвращает infinity
console.log(typeof infinity)        // возвращает number

// warning: специальное значение NaN (Not a Number)
// результат не правильной мат. операции 

let getNan = "awda" / 10;           //деление строки на число
console.log(getNan);                //выведет NaN
console.log(typeof getNan);         // тип number

// important: NaN - уникальное значение и никогда не равно NaN 

console.log (NaN === NaN)           // вернется false

// BigInt - числовой тип данных. может содержать числа произвольной длинны.
// important: правила синтаксиса: числовому литералу добовляется символ n в конце
const BigInteger = 12331241245125125123123n

// string - строковый тип данных
// important: чтобы перменная вернула тип данных string её значения должно быть заключено в ковычки ("", '')
// warning: ("", '') --> являются простыми. между ними нет разницы в синтаксисе.

let myFullName = 'Лёха Лепёха';     // значение переменной заключено в одинарные ковычки
// warning: обратные кавычки (``) позваляют встраивать в строку доп. функционал
let myAge = 22;
let myName = `Ivan`;
console.log(`Hello, my name ${myName}, my age is ${myAge}`);

    // symbol
    // important:

    // object - содержит более сложную структуру данных
    // important: обьект может быть создан с помощью фигурных скобок {} и содержит набор не обязательных свойств
    // important: свойство состоит из пары - ключ: значение. запятыми отделяются свойства между собой
let myInfo = { 
    name: 'Ivan', 
    age = 22
}
console.log(myInfo)                 // { name: 'Ivan', age: 22 }
console.log(typeof myInfo)          // object

    // function
    // important:

        // Преобразование типов:

        // 1. Строковое преобразование
        // important: с помощью специальой функции String() можно изменить тип данных на строковый 
        
let myAge = 22;                     // Тип данных числовой
let myTrue = true;                  // Тип данных bulean

console.log(myAge);                 // Возвращает 22 с типом number
console.log(myTrue);                // Возвращает true с типом bulean

myAge = String(myAge);              //Преобразуем в тип данных string
myTrue = String(myTrue);            //Преобразуем в тип данных string

console.log(myAge);                 // Возвращает 22 с типом string
console.log(myTrue);                // Возвращает true с типом string

        // .2 Численные преобразования
        // important: с помощью специальой функции Number() можно изменить тип данных на числовой

let myAge = "22";                   // Тип данных строковый
console.log(myAge);                 // Возвращает 22 с типом string

myAge = Number(myAge);              //Преобразуем в тип данных number
myAge = +myAge;                     //Преобразуем в тип данных number в краткой форме
     
// warning: если в строке нет чисел результатом будет NaN

let myName = 'Ivan';                // Тип данных строковый
myName = +myName;                   // Преобразует строковый в числовой тип данных

console.log(myName);                // Вернет NaN
console.log(typeof myName);         // Вернет number

        // 3. Логическое преобразование
        // important: с помощью специальой функции Boolean() можно изменить тип данных на логический
let myAge = 22;                     // Тип данных числовой

myAge = Boolean(myAge);             //Преобразуем в тип данных boolean
console.log(myAge);                 // Вернет true


