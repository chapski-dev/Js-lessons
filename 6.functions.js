// 1. Обьявление функции (function declaration)
// important: вызвать такую функцию можно как до так и после обьявления такой функции!!!
// *function имя(параметр(ргумент), парамерт...){тело функции}
function showMessage(myName, myMessage){                                  // Обьявление функции
    console.log(`${myName}, ${myMessage}, my friend`);                    // Вывод приветсвия: Способ 1
    console.log(myName + " , " + myMessage + "+" + "my friend");          // Вывод приветсвия: Способ 2
}
showMessage("Дима", "hello");                                                            // Вызов функции


// warning: переменная обьявленая внутри функции видна только внутри функции, за пределами она не видна

function showAge(){
    const myAge = 22;                               // Обьявления локальной переменной
}
console.log(myAge);                                 // Ошибка myAge is not defined


// 2. Деректива return
// important: Деректива return используется для вывода результата работы функции
// important: когда код встречает return, функция возвращает результат и код дальше не выполняется 


// 3. Функциональное выражение (function expression)
// important: вызвать такуб функцию можно только после её обьявления
const showAge = function(age){
    console.log(`My age is ${age}`);
}

showAge(18);                                    // Возвращает строку "My age is 18"


// 4. Стрелочная функци (arrow function)
// const имя переменной = (параметр, параметр, ...) => тело функции
const showMessage = (myName,myMessage) => `${myName}, ${myMessage} my friend`;          // заменяет собой дерективу return

console.log(showMessage(`Waidy`, `hello`));                                             // возвращает строку "Waidy, hello my friend"

// warning: для многострочной функции нужны фигурные {} скобки и деректива return;

const showMessage = (myName, myMessage) => {
    return `${myName}, ${myMessage} my friend`;
}

console.log(showMessage(`Waidy`, `hello`));                                            // возвращает строку "Waidy, hello my friend"


