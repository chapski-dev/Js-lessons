// * Класс

//  В обьектно-ориентированном програмировании (ООП) класс - это расширяемый шаблон кода для создания обьектов
// который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)

// Синтаксис классов не вводит новую Обьектно-ориентированию модель,
// а предоставляет более простой и понятный способ создания обьектов и 
// организацию наследования

function Person(name,age) {
    this.name = name;
    this.age = age;
};
Person.prototype.sayName = function() {
    alert(this.name);
}
Person.prototype.getOlder = function(years) {
    this.age += years;
};


class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    sayName() {
        alert(this.name);
    };
    getOlder(years) {
        this.age += years;
    };
};

// Задача 1
// Переписать функцию-конструктор в виде класса:
function Car(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.changeColor = function(newColor) {
    this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');

class Car {
    constructor(name, year, color){
        this.name = name;
        this.year = year;
        this.color = color;
    }
    changeColor(newColor){
        this.color = newColor;
    };
};
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');


// Определение класса начинается с ключевого слава class, за которым следует имя типа
// Свойства и методы класса определяются в фигурных скобках
// чтобы определить метод, достаточно указать его имя и скобки а ключевое слово function не требуется

// Если метод называется constructor - он работает как конструктор обьекта
// Все остальные методы и свойства, определенные в фигурных скобках класса, применяются к прототипу

// Метод constructor - специальный метод необходимый для создания и инициализации обьектов, созданных с помощью класса
// В классе может быть только один метод с именем constructor 

class Person {
    constructor (name){
        this.name = name;
    };
    sayHi() {
        alert(this.name);
    };
};
let user = new Person('Alex');
user.sayHi();

// Кошда вызывается new Person - создается новый обьект,
// конструктор запускается с заданным аргументом и сохраняет его в this.name

// Задача 2
// Ваша задача реализовать класс Person 
// Вы должны заполнить метод constructor, чтобы принять имя как строку и возраст как число
// Реализовать метод getInfo получаения информации, который должен вернуть, например Jhons age 34

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    getInfo() {
        alert(`${this.name} age ${this.age}`)
    };
};
let user = new Person ("Jhons", 34);
user.getInfo();

// * Наследование
// Главное преимущество классов над более традиционным JS синтаксисом - простота реализации наследования
// Можно использовать простой синтаксис, общий для многих языков: ключевое слово extends

class Employee extends Person {

}

// если мы определим свой метод с таким же именем в дочрнем классе, 
// то он будет использоваться взамен родительского
// Обычно мы не заменяем родительский метод,
// а скорее делаем новый на его основе изменяя или расшияя его функциональность
// Мы делаем что то в нашем методе и вызываем родительский метод до или после,
//  или в процессе с помощью ключевого слова "super"

// super.method(...) вызывает родительский метод
// super(...)        вызывает родительский конструктор (работает только внутри нашего конструктора)

// наследование конструктора: 

// constructor(name, age) {
//     super(name);
//     this.age = age;
// }


// Задача 3
// Ваша задача - реализовать класс Cat, который расширяет Animal
//  и заменить метод speak, чтобы вернуть имя кошки + мяу
// например "Mr Whiskers moews"

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak(){
        alert(this.name + 'say hi')
    }
}

class Cat extends Animal {
    constructor (name){
        super(name);
    }
    speak(){
        alert(this.name + 'moews')
    }
}

let cat = new Cat("Mr Whiskers");
cat.speak();


class Person {
    constructor(firstName, secName){
        this.firstName = firstName;
        this.secName = secName;
    }
    fullName(){
        console.log(`${this.firstName} ${this.secName}`);
        return `${this.firstName} ${this.secName}`;
    }
}
let person = new Person("Alex", "Petrov")
person.fullName(); // Alex Petrov

class Employee extends Person {
    constructor (firstName, secName, vacancy){
        super(fullName, secName);
        this.vacancy = vacancy;
    }
    getInfo(){
        console.log(`${super.fullName()} (${this.vacancy})`);
    }
}
let employee = new Employee('Alex', 'Petrov', 'developer');
employee.getInfo();         // Alex Petrov (developer)


// Задача 4
// Создать класс Person со стандартными свойствами (имя, возраст)
// и действиями(идти, разговаривать, есть) человека
// от него наследовать классы "ребенок" и "взрослый" 
// со своими особенностями (например у ребенка - "плакать" и "ходить в школу")

class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    canGo(){
        console.log('Умеет кушат');
    }
    canSpeac(){
        console.log('Умеет говорить');
    }
    canEating(){
        console.log('Умеет кушат');

    }
};

class Child extends Person {
    constructor (name, age){
        super(name, age);
    }
    canCry(){
        console.log("Все время плачет");
    }
    canGo(){
        console.log("Не умеет ходить");
    }
    canSpeac(){
        console.log("И не умеет говорить");
    }
}
let child = new Child ('Alex', 3);

class Adalt extends Person {
    constructor (name, age){
        super(name, age);
    }
    canWork(){
        console.log("Взрослые работают");
    }
}
let adalt = new Adalt ("Alex", 28);