// Операторы: унарный, бинарный, и операнды.

// 1. Операнд - это то к чему применяется оператор, иначе называют аргументом.
let age = 38 - 18;                           //числа 38 и 18 - явл. операндами
let age = e - h;                             // e и h - явл. операндамиъ


// 2. Бинарный оператор - это оператор который применяется к двум операндам
let age = 38 - 18;                           // Вычитание "-" является оператором


// 3. Унарный оператор - это оператор который применятеся к одному операнду 
let age = -38;                                // Знак минус "-" является оператором


// 4. Математические операторы

х = 20 + 2;
х = 20 - 2;
х = 20 * 2;
х = 20 / 2;
х = 20 % 2;         // Взятие остатка от деления %
х = 20 ** 2;        // Возведение в степень **


// 5. Сложение строк 
// important: строки можно складывать с помощью бинарного оператора сложения 

let message = '30' + 'попугаев';                 // Возвращает - '38попугаев'

let message = 'попугаев' + 38;                  // Если хотя бы один из операндов является строковым то результат преобразуется в строковый
                                                // Возвращает - 'попугаев38'
let message = 30 + 8 + 'попугаев';              // Математические операции до встречи с строкой выполняются как обычно
                                                // Возвращает - 'попугаев38'

// important: Другие математические операторы работают только с числами. поэтому преобразуют строки в числа
let message = '38' - 20;                        // Преобразует строку в число и вернет 18
let message = '38' + 20;                        // Преобразует строку в число и вернет 3820

// warning: Недопустимая математическая операция 
let message = 30 * 'попугаев';                 // Возвращает NaN


// 6. Декримент и инкремент - увеличивает или уменьшает переменную на единицу с помощью ++ и --

// Постфиксная форма
let age = 22;
let newAge = age++;
console.log(newAge);                            // Возвращает 22 потом прибавляет единицу

// Префиксная форма
let age = 22;
let newAge = ++age;
console.log(newAge);                            // Прибавляет единицу и сразу возвращает 23


// 7. Операторы сравнения - возвращают логический тип данных со значениями true/fals
console.log(5 < 10);                            // true
console.log("Женя" > "женя");                   // false

// warning: при сравнении разных типов данных значения преобразуются в число
console.log(true > 0);                          // true
console.log(false < 10);                        // true
console.log("38" > 3);                          // true                      
console.log("007" == 7);                        // true                          

// warning: =, ==, или != при сравнении разных типов данных приводит значения к числу
console.log("2"== 2);                           // true      


// 8. Оператор строгого равенства === или !== проверяет значения без приведения типов к одному (числовому)
console.log("38" !== 38);                      // true   
console.log("007" === 7);                      // false
