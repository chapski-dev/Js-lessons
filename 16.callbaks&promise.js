// * Kолбэки

// Функции называют асинхронными, потому что действие будет завершено не сейчас а потом.
// Аргументом в такие функции передается функция которая выполняется по завершению действия.
// Это и есть функция обратного вызова.

function load(scriptUrl, callback){
    let script = document.createElement('script');
    script.scr = scriptUrl;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('Ошибка загрузки'));
};


// * Промисы
// обьект Promise (промис) используются для отложенных и асинхронных вычислений

const newPromise = new Promise((resolve, reject) => {
    resolve('test');
});

newPromise.then((value) => {
    console.log(value);         // возвращает test
});

// Функции могут быть зарегестрированными (подписаные) с помощью методов .then .catch и .finally
Promise.then(
    function(result){/* успешное выполнение*/},
    function(error){/* ошибка */},
);

Promise
    .then(result => {/* успешное выполнение*/})
    .catch(err => {/* ошибка */})

// Первый агрумент метода .then - функция которая выполняется когда промис переходит в состояние "выполнено успешно" и получается результат
// Второй агрумент метода .then - функция которая выполняется когда промис переходит в состояние "выполнено с ошибкой" и получается ошибку

// Агрументы resolve и reject - это колбэки, которые предоставляет сам JavaScript. Наш код - только внутри исполнителя 
// Когда промис получает результат, сейчас или позже - не важно, он должен вызвать один из этих колбэков

// resolve(value) - если работа завершилась успешно, с результатом value.
// reject(error) - если произошла ошибка, error - обьект ошибки 

// Если мы хотели бы обработать только ошибку то можно использовать null в качестве первого аргумента: .then(null, errorFunc)
// или можно воспользоваться методом .catch(errorFunc), который сделает тоже самое

// .finally(() => alert('промис завершен'));
// Функция в агрументе .finally выполниться в любом случае, когда промис завершится: успешно или с ошибкой.

// * Promise.all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(alert());

// * Async / await
// специальный синтаксис для работы с промисами - "async/await"

async function newFunc (){
    return 1;
};      // эта функция всегда возвращает промис

// ключевое словно await заставит интерпретатор JS ждать до тех пор пока промис справа от await не выполнится
// После чего оно вернет его результат и выполнение кода продолжиться

async function newFunc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    let result = await promise;         // будет ждать пока промис не выполнится 
    alert(result);                      // возвращает 1 
};
newFunc();

// * Сетевые запросы
// для сетевых запросов JS можно использовать методы fetch

let response = fetch(url, [options]);

// url - адрес для отрпавки запроса
// options - дополнительные параметры: метод, заголовки и тд.

// Свойства response: 
// status: код статуса HTTP-запроса, например 200.
// ok: логическое значение, будет true, если код HTTP-запроса в диапазоне 200-299

// Методы для response 
response.text();    //читает ответ и возвращает как обычный текст
response.json();    // декодирует ответ в формате JSON
response.formData();    // возвращает ответ как обьект formData
response.body       // можно считывать тело запроса по частям

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
        .then(response =>response.json())
        .then(commits => console.log(commits));

//  установить хедеры запросов
let response = fetch(url, {
    headers: {
        Authentification: "secret",
    }
});

// Для отправки POST запроса или запроса с другим методом, нам необходимо использовать fetch параметры

// method - HTTP метод, например POST
// body - тело запроса

let response = await fetch('fetch/post/user', {
    method: "POST",
    body: JSON.stringify(user),
});

// GET - получение data с сервера (по умолчанию)
// POST - запись данных на сервер и возвращает их обратно
// PUT - обновляет данные на сервере и возвращает их обратно
// DELETE - удаляет, отправляет на сервер и возвращает данные

// Задача 1
// Создайте асинхронную функцию getTasks(), которая возвращает массив обьектов категорий.
// Данные получать по ссылке https://test-todoist.herokuapp.com/api/tasks
// Необходимо вывести имена и описания этих задач на странице в виде списка

const getTasks = async () => {
    const tasks = await fetch('https://test-todoist.herokuapp.com/api/tasks')
    .then(response => response.json())
    .then(tasks => tasks);
    console.log(tasks);
    const main = document.getElementById('main');
    const ul = document.childElement('ul');
    tasks.map(tasks => {
        const li = document.childElement('li');
        li.innerHTML = tasks.discription;
        ul.append(li);
    })
    main.append(ul);
};
getTasks();


// Задача 2
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов польхователей github
// запрашивает у github информацию о них и возвращает массив обьектов-пользователей
// информаци о пользователе github с логином USERNAME доступна по ссылке https://api.github.com/users/USERNAME.

// response - это ответ сервера
// then - обработка "выполнено успешно"
// catch - обработка "запрос не выполнен"
async function getUsers(names) {
    let jobs = [];
    for (let name of names){
        let job = fetch('https://api.github.com/users/'+name)
        .then(response => {
            if(response.status !== 200){
                return null
            } else {
                return response.json();
            }
        })
        .catch(error => console.log(error));
        jobs.push(job);
    };
    let results = await Promise.all(jobs);
    console.log(results);
};

getUsers(['serprok9694', 'chapski-dev', 'EvgeniSasin']);

// Задача 3
// https://test-todoist.herokuapp.com/api/categories
// Необходимо создать сраницу 
// На странице должен выводиться:
// - список категорий, полученных по этому GET запросу: https://test-todoist.herokuapp.com/api/categories
// - кнопка добавить категорию (POST запрос - https://test-todoist.herokuapp.com/api/categories)
// после успешной отправки этого запроса - добавленная категория появляется в списке категорий

// Вид тела(body) для POST запроса {
//                                    "id": 0,
//                                    "name": "string"
//                                 }


const getNames = async () => {
    const items = await fetch('https://test-todoist.herokuapp.com/api/categories')
    .then(response => response.json())
    .then(items => items);
    const main = document.getElementById('main');
    const ul = document.createElement('ul');
    items.map(item => {
        const li = document.createElement('li');
        li.innerHTML = item.name;
        ul.append(li);
    })
    main.append(ul);
};
getNames();