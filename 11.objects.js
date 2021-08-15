// * Объявление объекта

let newObject = new Object();   // синтаксис конструктор объекта
let newObject = {};             // синтаксис "Литерал объекта"

// * Синтаксис

// Объект содержит более сложную структуру данных 
// important: Объект может быть создан с помощью фигурных скобок {} и содержит набор необязательных свойств
// important: свойство состоит из пары - ключ значениие: Запятыми , отделяются свойства между собой

let person = {
    neme: 'Ivan',
    age: 18,                // свойство объекта, где age: - ключ, 18 - значение
    loveMusic: true,
    //"love music": true,     // ключ состоящий из нескольких свойств заключается в ковычки
};

console.log(person);            // возвращает объект
console.log(typeof person);     // возвращает тип данных Object

// * Обращение к свойствам объекта

let person = {
    neme: 'Ivan',
    age: 18,              
    "Love music": true,     
};
console.log(person.name);   // обращение к свойству объекта с ключом из одного слова. Возвращает Ivan
console.log(person['love music']);   // обращение к свойству объекта с ключом из нескольких слов. Возвращает true

// * Вложенность

let person = {
    neme: 'Ivan',
    age: 18,              
    "Love music": true,
    address: {
        city: 'Minsk',
        country: 'Belarus'
    }     
};

console.log(person.address.city);       // Доступ к свойству объекта внутри другого объекта. Возвращает строку Minsk

// * Изменение объекта
//  Добавление свойства

let person = {
    neme: 'Ivan',     
};

// Important: Чтобы добавить свойство в объект, необходимо обратиться к объекту и через точку добавить новое свойство
person.age = 22;
console.log(person);        // возвращает объект {name: 'Ivan', age: 22}

// important: таким же способом можно добавить объект внутрь объекта

person.address = {
    city: 'Minsk',
    country: 'Belarus',
};

//  Удаление свойства
// important: Для удаления свойства в объекте используется delete

let person = {
    neme: 'Ivan',
    age: 18,              
    "Love music": true,     
};

delete person['love music'];        // удаляет из объекта свойство 'love music'
delete person.name                  // удаляет из объекта свойство Ivan
console.log(person);                // возвращает объект {age: 18}

// ** Изменение значений свойства
// important: чтобы изменить значение уже существующего свойства необходимо обратиться к нему по ключу

person.age = 22;
console.log(person);        // вернётся {name: 'Ivan', age: 22}

// * Копирование объекта
// Копирование ссылки на объект
// при копирование объекта в другую переменную, сам объект не дублируется, а копируется только его ссылка на него
// это означает что при изменении скопированного объекта, изменится объект их первоначальной перемеенной

let person = {
    neme: 'Ivan',
    age: 18,              
};

let newObject = person;             // Копирование ссылки обьекта person в переменную newObject
newObject.age = 22;
console.log(person);                // вернётся {name: 'Ivan', age: 22}
console.log(newObject);             // вернётся {name: 'Ivan', age: 22}

// * Дублирование обьекта
// important: полное дублирование обьекта а не копирование ссылки на первоночальный обьект
// important: для дублирования обьекта используется Object.assign

let person = {
    neme: 'Ivan',
    age: 18,              
};
// Object.assign (куда(обьект), что(свойство 1), что(свойство 2))
let newObject = Object.assign({}, person)               // дублируется обьект person в переменную newObject со всеми свойствами
newObject.age = 22;
console.log(person);               // вернётся {name: 'Ivan', age: 18}
console.log(newObject);            // вернётся {name: 'Ivan', age: 22}

// (!) аналогичного результата можно добится с помощью spread-оператора
let person = {
    neme: 'Ivan',
    age: 18,              
};
let newObject = { ...person };                
newObject.age = 22;
console.log(person);               // вернётся {name: 'Ivan', age: 18}
console.log(newObject);            // вернётся {name: 'Ivan', age: 22}

// * Проверка свойства на наличие 
let person = {
    neme: 'Ivan',
    age: 18,              
};
if(person.address){                             // если свойство address в обьекте существует то возвращает true 
    console.log(person.address)                 // тогда возвращает его значение
}
// (!) если в обьекте есть ещё один обьект то при обращении к не существующему свойству внутреннего обьекта появится ошибка 
//  important: синтаксис "Опциональная цепочка" позволяет с помощью оператора "?" (вопросительный знак) озбежать ошибки
console.log(person?.address?.city)               // вместо ошибки результатом будет undefined

// * Цикл for in 
// important: используется для перебора всех свойств обьекта
let person = {
    neme: 'Ivan',
    age: 18,              
};

// for(let key in object)
for (let key in person){
    console.log(key);                             // возвращает ключ каждого свойства в обьекта
    console.log(person[key]);                    // возвращает значение каждого из свойств с соответсвующим ключем
}

// *Методы обьекта 
let person = {
    neme: 'Ivan',
    age: 18,              
};
const keys = Object.keys(person)     // Присваивает массив из всех ключей обьекта                
console.log(keys);                   // Возвращает массив из всех ключей обьекта ["name", "age"]


const values = Object.values(person);       // Примсваивает массив из всех значений обьекта
console.log(values);                        // Возвращает ["Ivan", 18]


