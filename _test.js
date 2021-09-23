const getNames = async () => {
    const items = await fetch('https://test-todoist.herokuapp.com/api/categories')
    .then(response => response.json())
    .then(items => items);
    const main = document.getElementById('main');
    const ul = document.createElement('ul');
    items.map(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} ${item.id}`;
        ul.append(li);
    })
    main.append(ul);
};
getNames();

let newName = {
    name: "Aleshka",
    id: 1488, 
};

const btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', pushMessage);
async function pushMessage(){
    const pushedInfo = await fetch('https://test-todoist.herokuapp.com/api/categories', {
    method: "POST",
    body: JSON.stringify(newName),
    })
    .then(response => response.json())
    .then(pushedInfo => pushedInfo);
};


// let response = await fetch('https://test-todoist.herokuapp.com/api/categories', {
//     method: "POST",
//     body: JSON.stringify(newName),
// });