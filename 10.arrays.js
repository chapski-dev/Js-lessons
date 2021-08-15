// 1.Обьявление массива
let newArray = new Array();
let newArray = [];


// 2.Синтаксис
// important: заполняется значениями через запятую [значение1, значение2, значние3...]
let newArray = [1, 2, 3];

let newArray = [
    1,
    2,
    3,
    '4',
    '5',
    true,
    false,
    function(){
        console.log('Hello world');
    }
];


// 3.Получение значений
let newArray = [
    'Solo',             // 0 позиция
    'Dread',            // 1 позиция
    'Nexus',            // 2 позиция
    'NS',               // 3 позиция
];
console.log(newArray[0]);              // 'Solo'
console.log(newArray[3]);              // 'Dread'
console.log(newArray[15]);             // undefined


// 4.Длинна массива - равна количеству элементов
let newArray = [
    'Solo',             
    'Dread',            
    'Nexus',            
    'NS',               
];
console.log(newArray.length);             // 4 (тк четыре элемента)


// 5.Доступ к массиву
// spread - оператор копирования значения другого массива
const firstArray = new Array(1, 2, 3, 4);
// (!) При присваивании массиву другой массив, копируется ссылка на него, а не его значения
const secondArray = firstArray;         // Присваивает ссылку на значение исходного массива. При изменении secondArray будет изменятся и firstArray 
// Для того чтобы скопировать значение исходного массива, а не его ссылку, используется spread-оператор
const thirdArray = [...firstArray];     // spread-оператор копирует значение исходного массива firstArray


// 6.Редактирование массива
// Изменение значений 
let newArray = [
    'Solo',             // 0 позиция
    'Dread',            // 1 позиция
    'Nexus',            // 2 позиция
    'NS',               // 3 позиция
];
newArray[3] = 'Flash';
console.log(newArray);              // ['Solo', 'Dread', 'Nexus', 'Flash'];

// Добавление значений 
newArray[4] = 'Хвост';
console.log(newArray);              // ['Solo', 'Dread', 'Nexus', 'Flash', 'Хвост'];


// 7.Методы массивов
// push - добавление элемента в конец массива
let party = ['Solo', 'Dread', 'Nexus'];
party.push('NS');                   //Добавляет в конец массива 'NS'
console.log(party);                  // ['Solo', 'Dread', 'Nexus', 'NS'];

// unshift - добавление элемента в начало массива
let party = ['Solo', 'Dread', 'Nexus'];
party.unshift('NS', 'Flash');
console.log(party);                  // ['Solo', 'Dread', 'Nexus', 'NS', 'Flash'];

// shift - удаление первого элемента в массиве
// (!) второй элемент становится первым 
let party = ['Solo', 'Dread', 'Nexus'];
party.shift();
console.log(party);                  // ['Dread', 'Nexus'];

// pop - удаление последнего элемента в массиве
let party = ['Solo', 'Dread', 'Nexus'];
party.pop();
console.log(party);                  // ['Solo', 'Dread'];


// 8. Редактирование элементов массивов
// метод splice - позволяет удалять, добавлять, изменять элементы массива
// (!) изменяет исходный массив (!)
// Удаление элемента
let party = ['Solo', 'Dread', 'Nexus'];
// party.splice(индекс, количество элементов)
party.splice(1,1);                            // Начиная с первой позиции удаляет 1(один) элемент
console.log(party);                           // ['Solo', 'Nexus'];
// (!) так же можно использовать отрицательные значения метода splice 
let party = ['Solo', 'Dread', 'Nexus'];
party.splice(-1,1)                            // Начиная с первой позиции с конца удаляет 1(один) элемент. (с конца)
console.log(party);                           // ['Solo', 'Dread'];
// Удаление элементов с сохранением их в переменную
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.splice(1,1);            // Начиная с первой позиции удаляет 1(один) элемент
console.log(newParty);                       // ['Dread'];
// Замена элемента массива другим элементом
// party.splice(индекс, количество заменяемых элементов, новый элемент)
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.splice(1,1, 'NS');      // Начиная с первой позиции удаляет 1(один) элемент
console.log(party);                          // ['Solo', 'NS', 'Nexus'];
// Добавление элементов 
// party.splice(индекс, 0 - означает добавление, новый(е) элемент(ы))
let party = ['Solo', 'Dread', 'Nexus'];
party.splice(-1,0, "NS", "Flash")           // Начиная с первой позиции добавляет один элемент
console.log(party);                         // ['Solo', 'NS', 'Flash', 'Dread', 'Nexus'];

// Метод slice - создает новый массив в который дублирует часть изначального массива либо весь массив
// Копирование части массива
// party.slice(индекс начальной позицмии, индекс конечной позиции не включая)
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.slice(1,2);            // Начиная с первой позиции копирует до второй позиции не включая
console.log(newParty);                      // ['Dread'];
// (!) так же можно использовать отрицательные значения. отсчет будет идти справа налево
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
let newParty = party.slice(1,-1);           // Начиная с первой позиции копирует до последней позиции не включая
console.log(newParty);                      // ['Dread', 'NS'];
// Копирование всего массива
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.slice;                 // не принимает никаких значений. полностью дублирует массив
console.log(newParty);                      // ['Solo', 'Dread', 'Nexus'];

// Метод concat - создает дубликат массива. может дополнять новыми массивами
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.concat('Flash');       // Создает новый массив копируя все значние и добавляя новое в конец
console.log(newParty);                      // ['Solo', 'Dread', 'Nexus', 'Flash'];
// (!) аналагичный результат но с использованием spread
let newParty = [...party, 'Flash'];       // Создает новый массив копируя все значние и добавляя новое в конец
console.log(newParty);                      // ['Solo', 'Dread', 'Nexus', 'Flash'];

// Метод sort - сортирует массив меняя в нем порядок элементов (числа, строки(по алфавиту), булевые значения, undifined)
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.sort);                         // ['Dread', 'NS', 'Nexus','Solo']; - в алфавитном порядке 
// (!) для сортировки можно использовать стрелочную функцию
let newArray = [1, 4, 3, 9, 6]
console.log(newArray.sort((a, b) => a -b));                         // ['Dread', 'NS', 'Nexus','Solo']; - в алфавитном порядке

// Метод revers - меняет порядок в массиве на обратный
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.reverse);                         // ['Nexus', 'NS','Dread', 'Solo'];

// Метод map - вызывает функцию для каждого элемента массива и возвращает НОВЫЙ МАССИВ (и ничего больше) с результатом выполнения функции
// party.map((элемент массива, индекс, сам массив) => {});
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
let newArray = party.map(item => item[0]);          // возвращает первую букву (0(нулевой) индекс) каждого элемента массива
console.log(newArray);                              // ['S', 'D', 'N', 'N']; - в алфавитном порядке

// Методы split и join 
// split("") - преобразует строку в массив по заданному разделителю
let stringParty = 'Solo, Dread, Nexus';          // Строка из слов разделенных друг от друга запятой
let arraуParty = stringParty.split(',')          // Запятая "," является разедлителем
console.log(arraуParty);                         // ['Solo', 'Dread', 'Nexus']

// (!) можно ограничить количество элементов которые попадут в массив
let stringParty = 'Solo, Dread, Nexus';          
let arraуParty = stringParty.split(',', 2)       // Запятая "," является раздeлителем. 2 элемента попадут в новый массив
console.log(arraуParty);                         // ['Solo', 'Dread']

// join("") - преобразует массив в строку с заданным разделителем
let arraуParty = 'Solo, Dread, Nexus';           // Строка из слов разделенных друг от друга запятой
let stringParty = arraуParty.join(';')           // Точка с запятой ";" является разедлителем
console.log(arraуParty);                         // ['Solo, Dread, Nexus']

// 9.Проверка
// (!) массив не является отдельным типом данных. значит typeof выдаст тип object
// (!) проверить что массив является массивом можно с помощью Array.isArray();
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
if (Array.isArray(party)){
    console.log("Это массив");
} else {
    console.log("404");
};

// 10. Перебор элементов массивов
// цикл for
let party = ['Solo', 'Dread', 'Nexus'];
for (let i = 0; i < party.length; i++){                 // возвращает значение каждого элемента массива пока i меньше длинны массива
    console.log(party[i]);                              // поочередной возвращает Solo Dread Nexus
}
// цикл for of - испульзуется для вывода значений массива
let party = ['Solo', 'Dread', 'Nexus'];
for (let partyItem of party){                           // возвращает значение каждого элемента массива
    console.log(partyItem);                              // поочередной возвращает Solo Dread Nexus
}

// Метод forEach - выполняет функцию для каждого элемента массива
// (!) выполняет на текущем массиве не создавая новый
// party.forEach((элемент массива, индекс, сам массив) => {});
let party = ['Solo', 'Dread', 'Nexus'];
party.forEach((item, index, array) => {
    console.log(item + ' имеет '+ index + ' в ' + array)
});


// 11. Метод filter - позволяет фильтровать по заданному условию исходный массив
// ToDo: отфильтровать массив и оставить только обьекты где возраст равен 22
// party.filter(function(элемент массива, индекс, сам массив)) {})

let party = [
    {name: 'Dread', age: 18},
    {name: 'Solo', age: 22},
    {name: 'NS', age: 25},
    {name: 'Nexus', age: 17},
    {name: 'Flash', age: 22},
    {name: 'Dendy', age: 23},
];

const filtredParty = party.filter(function(person, index, array){
    if (person.age = 22){
        return true
    };
});
// аналогично но более кратко
const filtredParty = party.filter(function(person, index, array){
    return person.age === 22;
});
// warning: запись можно упростить с использованием стрелочной функции
const filtredParty = party.filter(person => person.age === 22);


// 12. Метод reduce - позволяет вычислить единое значение на основе всего массива 
// ToDo: вычислить суммарный age всех персонажей
let party = [
    {name: 'Dread', age: 18},
    {name: 'Solo', age: 22},
    {name: 'NS', age: 25},
    {name: 'Nexus', age: 17},
    {name: 'Flash', age: 22},
    {name: 'Dendy', age: 23},
];
//  party.reduce((начальное значение, элемент массива, индекс, сам массив) => {}, начальное значение);
const totalAge = party.reduce((total, person, index, array) => {
    return total += person.age;                            //  вернет 127
}, 0);                      
// warning: запись можно упростить с использованием стрелочной функции
const totalAge = party.reduce((total, person, index, array) => total += person.age, 0);   


// 13. Метод find - обеспечивает поиск в массиве обьектов(или определенный элемент) с определенным условием
// (!) возвращает первый попавшийся элемент удовлетворяющий словиям
// party.find((элемент массива, индекс, сам массив) => {});
// ToDo: найти первого персонажа с возрастом 17
const youngPerson = party.find((person, index, array) => person.age === 17);
console.log(youngPerson);                           // возвращает обьект { name: 'Nexus', age: 17 }


// 14. Метод findIndex - поиск в массиве обьектов(или определенный элемент) с определенным условием
// (!) возвращает индекс первого попавщегося элемента удовлетворяющий условиям
// party.findIndex((элемент, индекс, сам массив) => {});
const youngPerson = party.findIndex((person, index, array) => person.age === 17);               // возвращает индекс первого попавшегося персонажа с возрастом 17
console.log(youngPerson);                           // возвращает индекс 3







