// 1.Запись числа
// Тип данных number может принимать числа с плавающей точкой

let myAge = 22;
let myHeight = 1.79;

// important: большие числа можно разделять нижним подчеркиванием для большего удобства в чтении:
let number = 1_000_000;         //Возвращает один миллион;


// 2.Округление числа

// *Math.floor
// important: округляет число В МЕНЬШУЮ сторону 
let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);           // Вернет 5;
console.log(numTwo);           // Вернет 2;
console.log(numThree);         // Вернет -3;


// *Math.ceil 
// important: округляет число В БОЛЬШУЮ сторону
let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);           // Вернет 6;
console.log(numTwo);           // Вернет 3;
console.log(numThree);         // Вернет -2;


// *Math.round
// important: округляет число ДО БЛИЖАЙШЕГО ЦЕЛОГО
let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);           // Вернет 6;
console.log(numTwo);           // Вернет 2;
console.log(numThree);         // Вернет -2;


// *Метод toFixed(n);
// important: округляет число до n знаков после запятой, но ВОЗВРАЩАЕТ СТРОКОВЫЙ РЕЗУЛЬТАТ
let numOne = 5.845;             
console.log(numOne.toFixed(1))   // Вернет строку "5.8";
console.log(+numOne.toFixed(1))  // Вернет число 5.8;

// *Функций isNaN
// important: проверяет выражение на значение NaN. возвращает true или false

//сложение числа со строкой возвращает NaN
console.log(isNaN(38 + 'попугаев'));    // Вернет true
console.log(isNaN('попугаев' + 38));    // Вернет true (строка при сложении с числом склеивает )
console.log(isNaN('35' + 38));          // Вернет 3538 (false) (строка при сложении с числом склеивает но получается совместное число)
