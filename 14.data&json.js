// * обьект Date
// Он содержит дату и время, а так же представляет методы управления ими
// Даты храняться в нем как количество миллисекунд, прошедщих с полуночи 1 января 1970г
// согласно универсальному временному коду (Universal Time Code, UTC)

// чтобы создать обьект даты, испульзуем оператор new с конструктором Date
let now = new Date();
// если констуктор Date вызывается без аргументов создается обьект с текущими значениями даты и времени

let date = new Date('2017-01-26');

// * Получение значений 
getFullYear()  // получить год (4 цифры)
getMonth()      // получить месяц, от 0 до 11 (0 - январь, 11 - декабрь)
getDate()       // получить день месяца, от 1 до 31
getHours(), getMinuts(), getSeconds(), getMiliseconds()
getDay()        // получить день недели от 0 до 6 (0 - воскресение, 6 - суббота)

let now = Date.now();   // Возвращает количество милисекунд с 1 января 1970 года

// * Разбор строки с датой
Date.parse(str);        // считывает дату из строки
// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss:sssZ
// YYYY-MM-DDTHH - это дата: год-месяц-день
// символ "Т" используется в качестве разделителя
// HH:mm:ss.sss - время: часы, минуты, секунды, миллисекунды
// нобязательная часть "Z" обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0



// * JSON
// json - это формат данных
// json - поддерживает значения 3х типов
// Простые значения - строки, числа, логические значения, и значения null можно предоставлять в JSON используя тот же синтаксис что и в JS
// Специальные значния undefined не поддерживается
// Обьекты - первый сложный тип данных служаший для хнанения упорядоченных пар ключей и значений
// Массивы - второй сложный тип данных который предоставляет упорядочнный список значений

// JSON - легко использовать для обмена данных
// У обьекта JSON есть два метода: stringify() и parse()
// в простых сценариях они просто серилизуют обьект в js в строку json и преобразуют её в значение JS соответсвенно
// JSON.stringify() для преобразования обьектов в JSON 
// JSON.parse() для преобразования JSON обратно в обьект

let book = {
    title: "some title",
    authors: ['first', 'second'],
    edition: 3,
    year: 2017,
};

let jsonText = JSON.stringify(book);  // возвращает (внизу)
// вот что:
// let book = "{"title":"some title","authors": ["first","second"],"edition":3,"year":2017}"

