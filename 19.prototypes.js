// * Прототипы

// Каждая функция создается со свойством prototype
// prototype - это обьект содержащий свойства и методы,
// которые должны быть доступны в экземплярах конкретного ссылочного типа
// Этот обьект в буквальном смысле является прототипом для обьекта,
// создаваемого при высове конструктора
// Приемущества использования прототипа в том что его свойства и методы общие для обьектов
// Вместо того чтобы назначать атрибуты обьекту в конструкторе их можно назначить непосредственно прототипу

// Когда мы хотим прочитать свойства из Object а оно отсутсвует, JS автоматически берет его из прототипа
// В програмировании такой механизм называется прототипным наследованием

// Свойства [[prototype]]  является внутренним и скрытым но есть много способов задать его

let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal;  // присваиваем обьекту rabbit прототип animal 
console.log(rabbit.eats);   // вернет true

let animal = {
    eats: true,
};
function Rabbit(name) {         // Создаем фукнцию генератора обьектов
    this.name = name;           // 
};
Rabbit.prototype = animal;
//  Установка Rabbit.prototype = animal; буквально говорит интерпретатору следующее: 
// При создании обьекта через new Rabbit() запиши ему animal в [[Prototype]]
let rabbit = new Rabbit('White rabbit'); // rabbit.__proto__ = animal
console.log(rabbit.eats); // true


// С помощью прототипов встроенных обьектов можно получать сслыки
// на методы, предполагаемые по умолчанию и определять новые методы
// Кроме того эти прототипы можно изменять, что позволяет добавлять
// методы к встроенным обьектам
// obj = new Object(), где Object - встроенная функция-конструктор 
// для обьектов с собственным свойством prototype, которое
// ссылается на огромный обьект с методом toString() и другими 
// Другие встроенные обьекты, такие как Array, Date, Function и другие,
// так же хранят свои методы в прототипах


function Animal() {
    this.run = function() {
        alert('run');
    };
};

function Rabbit() {
    this.jump = function() {
        alert('jump');
    };
};
Rabbit.prototype = new Animal();
let rabbit = new Rabbit();
console.log(rabbit.run); // run

// * Методы прототипов 
Object.getPrototypeOf(obj)  // Возвращается свойтсва [[prototype]] обьекта obj
Object.setPrototypeOf(obj)  // устанавливает свойство [[prototype]] обьекта obj

// Задача 1
// Создать функцию Dog, которая наследует метод eat из обьекта Animal
function Dog(){};
function Animal() {
    this.eat = function(){
        console.log('eat');
    };
};
Dog.__proto__ = new Animal();
let dog = new Dog();
dog.eat();