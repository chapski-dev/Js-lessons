// * Storage

// c появлением веб-приложений потребовалось хранить пользовательскую информацию на клиентском компьютере
// Информация отосящаяся к конкретному пользователю должна находится на его компьютере,
//  будь то сведения для входа в систему, предпочтения или другие данные

// Тип Storage позволяет хранить пары имен и значений при этом максимальный обьем хранилища определяется браузером

// * sessionStorage
// Обьект sessionStorage хранит данные только втечение сеанса, то есть до закрытия браузера.
// Данные, сохраненные в обьекте sessionStorage остаются в нем при обновлении страницы

// sessionStorage существует только в рамках текущей вкладки браузера
// Другая вкладка с той же страницей будет иметь другое хранилище
// Данные продолжают существовать после перезагрузки страницы, но не после закрытия/открытия вкладки


// * localStorage
// Основные особенности localStorage: 
// этот обьект один на все вкладки и окна в рамках источника (один и тот же домен/протокол/порт)
// Данные не имеют срока давности по которому они истекают или удаляются.
//  Сохраняются после перезапуска браузера и даже ОС (операционной системы)


// Методы: 
// setItem(key, value) - сохранить пару (ключ, значение)
// getItem(key) - получить данные(значение) по ключу key
// removeItem(key) - удалить данные с ключем key
// clear() - удалить всё
// key(index) - получить ключ по заданной позиции
// lenght - количество элементов в хранилище

// (!) - value в storage может быть только типа string

// * События storage 
// когда обновляются данные в localStorage или sessionStorage - генерируются события storage:
// window.onstorage = e/* е = addEventLissener или (Event)*/ => {};

// Задача 1 
// Создать страницу: поле ввода имени и кнопка сохранить. 
// При нажатии кнопки - данные сохраняются в localstorage и
// на экране исчезают эти поля и кнопка и  оявляется сообщение -  Добро пожаловать, (имя) 
// При перезагрузке страницы, если в localstorage есть эти данные - сообщение должно остаться на экране

window.addEventListener('load', () => checkStorage());

const checkStorage = () => {
    const name = localStorage.getItem("name");
    if (name) {
        document.getElementById("main").innerHTML = `Добро пожаловать, ${name}`;
    };
}
const save = () => {
    const value = document.getElementById("name").value;
    if (!value) {
        alert('Введите имя');
        return;
    };
    localStorage.setItem("name", value)

    checkStorage();
};

// Задача 2
// Создать страницу - при открытии на ней посередине появляется модальное окно с каким либо текстом,
// чекбоксом (с текстом “не показывать больше”)  и кнопкой закрыть
// Если был нажат чекбокс и нажата кнопка закрыть
// - при перезагрузке модальное окно больше не должно появляться

// window.addEventListener('load', () => {
//     if (!localStorage.getItem('checked')) {
//         openForm();
//     }
// })

// const save = () => {
//     const isChecked = document.getElementById("checkbox").checked;
//     if (isChecked) {
//         localStorage.setItem("checked", isChecked);
//     }
//     closeForm();
// }

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }
// const closeMobailMenu = document.querySelector(".mobile-menu__list");
// closeMobailMenu.onclick = function () {
//     document.querySelector(".mobile-menu__checkbox").checked = false;
// };