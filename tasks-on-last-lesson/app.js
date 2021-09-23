// При загрузке страницы два input'a. "login" и "password".
// При правильном вводе отображаем на странице "Выполнен вход".
// Credits: login -> "admin", password -> "q"
let sendInfo = document.querySelector("#submit");

sendInfo.addEventListener('click', () => {
    const loginValue = document.querySelector('#input-login').value;
    const passwordValue = document.querySelector('#input-password').value;
    console.log(loginValue);
    console.log(passwordValue);
    if (loginValue === '1' && passwordValue === '2') {
        alert ('Welcom');
    } else {
        alert ('You not right')
    };
});

// При успешном входе записывать в localStorage параметр "isAuth":"true".
// При загрузке страницы проверять localStorage: isAuth:true -> "Вход выполнен", isAuth:false -> "Отправить на ре-логин"
// На странице "Вход выполнен" добавить кнопку "Log out"

// window.addEventListener('load', () => checkStorage());

// const checkStorage = () => {   
//     const isAuth = localStorage.getItem('isAuth');
//     const item = document.querySelector('#item');
//     if (isAuth === "true") {
//         item.innerHTML = `
//         <h2>Sucssec</h2>
//         `
//     } else {
//         alert('try better');
//     };
// };

// window.addEventListener('load', () => askDate());

// const askDate = function () {
//     const askNameValue = prompt("Введите имя", '').value;
//     const askMailValue = prompt("Введите имя", '').value;
//     const askPhoneValue = prompt("Введите имя", '').value;
// };



// const table = document.querySelector("#table");
// const tableRow = document.querySelector("#table-row");
// const addData = document.querySelector("#add");

// const createTabelRow = addData.addEventListener("click", () => {
//     const askNameValue = prompt("Введите имя", '');
//     const askMailValue = prompt("Введите имя", '');
//     const askPhoneValue = prompt("Введите имя", '');
//     tableRow.innerHTML += `
//     <div>${askNameValue}</div>
//     <div>${askMailValue}</div>
//     <div>${askPhoneValue}</div>
//     `
// });

