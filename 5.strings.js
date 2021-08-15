// 1. Запись строки
// important: чтобы переменная вернула тип данных string её значение должно быть заключено в кавычки
// warning: обратные кавычки позволяют встраивать в строку доп. функционал
let myName = `Ivan`;
let myAge = 22;
console.log(`Hello, im ${myName}, my age is ${myAge}`);


// 2. Строковое преобразование
// important: с помощью специальной функции sting можно изменить тип данных на строковый
let myAge = 22;
let myTrue = true;

console.log(myAge);                 // Вернет 22
console.log(typeof myAge);          // Вернет number
console.log(myTrue);                // Вернет true
console.log(typeof myTrue);         // Вернет boolean

myAge = String(myAge);              // Преобразует в строку
myTrue = String(myTrue);            // Преобразует в строку

console.log(myAge);                 // Вернет "22"
console.log(typeof myAge);          // Вернет string
console.log(myTrue);                // Вернет "true"
console.log(typeof myTrue);         // Вернет string


// 3. Работа с символами строки
// *Свойства length
// important: позволяет получить длинну строки и возвращает количество символов
let parrot = '38 попугаев';
console.log(parrot.length);          // Вернет число 11 (тк 11 символов в строке)

// *Получение символа по индексу 
// important: индексация символов начинается с 0; (!)
let parrot = '38 попугаев';
console.log(parrot[3]);              // Вернет "п"

// important: если нужно получить последний символ произвольной строки:
let parrot = '38 попугаев';
console.log(parrot[parrot.length - 1]);  // Вернет "в"


// 4. Изменение регистра 
// .toUpperCase() позволяет изменить регистр на верхний 
let parrot = '38 попугаев';
console.log(parrot.toUpperCase());      //Вернет "38 ПОПУГАЕВ"

// .toLowerCase() позволяет изменить регистр на нижний 
let parrot = '38 ПоПугаев';
console.log(parrot.toLowerCase());      //Вернет "38 попугаев"


// 5. Поиск в строке
// * .indexOf(substring, position)
// important: .indexOf(текст подстроки, позиция). Возвращает -1 если совпадений не найдено.
let parrot = '38 попугаев';
console.log(parrot.indexOf("попуг"));      //Вернет 3 (3 - это позиция с которой начинается совпадение(по индексу(индекс начинается с 0)))
console.log(parrot.indexOf("попуг", 6));   // Вернет -1 (совпадений не найдено тк поиск был начат с 6(по индексу) позиции)

// * .includes(substring, position)
// important: .includes(текст подстроки, позиция). Возвращает true если есть совпадение и false если совпадений не найдено.

let parrot = '38 попугаев';
console.log(parrot.includes("попуг"));      //Вернет true
console.log(parrot.includes("попуг", 6));   // Вернет false (начиная с 6 позиции совпадений не найдено)

// Метод slace
// important: slice(start, end) возвращает строку со start(включая) до end не включая 
let parrot = '38 попугаев';
console.log(parrot.slice(3));      //Вернет "попугаев"
console.log(parrot.slice(1, -1));      //Вернет "8 попугае"

