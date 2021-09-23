// DOM - обьектная модель документа (Doccunent Object Model)
// DOM - представляет документ как иерархическое дерево элементов, позволяя добавлять удалять и изменять отдельные части страницы

<html>
    <head>
        <title>Simple Page</title>
    </head>
    <body>
        <p>Hellow</p>
    </body>
</html>

// обращение к элементам DOM представляется в JavaScript с помощью глобального обьекта document

const oroginalTitle = document.title;  // возвращает Simple Page

// Задание заголовка документа

document.title = "New Page Titile"      // новый заголовок документа

// получение полного URL-aдреса

const url = document.url;


// * Получание элементов

// ** Метод getElementById - принимает индентификатор элемента который нужно получить и возвращает этот элемент или null если его не существует

<div id="myDiv"> Some Text</div>
// этот элемент можно получить следующим образом: 
const div = document.getElementById('myDiv');           // получение ссылки на div 

// ** Метод querySelector - принимает CSS-запрос и возвращает первый соответсвующий ему элемент, либо null если таковой не найден
document.querySelector('div');
document.querySelector('.block');

// ** Метод querySelecorAll - принимает CSS-запрос и возвращает массив со всеми свойствами
document.querySelectorAll('.block');

// ** Метод getElementByClassName - принимает строку с одним или несколькими именами и возвращает массив
document.getElementsByClassName('.class');


// * Свойство classList - это свойство существует специально для добавления удаления или замены имен классов

// у него есть доп. методы
// ** Метод add - добавляет класс
// ** Метод contains - указывает есть ли указанный класс в элементе
// ** Метод remove - удаляет класс
// ** Метод toggle - удаляет класс если он уже есть и добавляет если отсутсвует

const block = document.querySelector('.root');
block.classList.add('new-class');


// * Стили и их изменения при помощи JS
// у любого html элемента есть свойство style доступное при помощи Js
// каждое css свойство можно определить или переопределить при помощи обращения к свойству style элемента
// свойтсва которые в css пишутся через дефис в JS испульзуются в camelCase:
// css: background-color: red;
// js: backgroundColor 

const block = document.querySelector(".root");
block.style.color = "red";
block.style.textTransform = "uppercase";

// * Создание Элементов 
// элементы можно создавать с помощью метода document.createElement(), который принимает имя тега создаваемого элемента
const div = document.createElement('div');

// * Добавление элементов
// методы добавления:
// ** Метод block.append() - добавляет узлы или строки в конец block
// ** Метод block.prepend() - вставляет узлы или строки в начало block
// ** Метод block.before() - вставляет узлы или строки до block
// ** Метод block.after() - вставляет узлы или строки после block
// ** Метод block.replaceWith() - заменяет block заданными узлами или строками


// * Свойства innerHTML - устанавливает или получает разметку дочерних элементов
block.innerHTML = '<p>test!</p>';

// * Удаление узлов
block.remove();


