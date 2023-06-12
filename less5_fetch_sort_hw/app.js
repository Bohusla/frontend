let arr = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        arr = json;
        sortData();
    });

// сначала сортируем массив, потом выводим на экран

function sortData() {
    document.getElementById('tab_body').innerHTML = ""; // обнуляем таблицу
    for (let i = 0; i < arr.length; i++) {
        let tr = '<tr>'; // создаем строку таблицы
        tr += '<td>' + arr[i].id + '</td>'; // добавляем столб 1 в строку
        tr += '<td>' + arr[i].name + '</td>'; // добавляем столб 2 в строку
        tr += '</td>'; // закрываем строку таблицы
        document.getElementById('tab_body').innerHTML += tr; // добавляем полученную строку в дом
    }
}


function sortAskID() {
    // сортируем в этом месте по возрастанию
    arr.sort((a, b) => a.id > b.id ? 1 : -1);
    document.getElementById('sortAskID').style.display = "none";
    document.getElementById('sortDeskID').style.display = "inherit";
    // скрыть текущпю кнопку
    // показать обратную кнопку
    sortData();
}
function sortDeskID() {
    // сортируем в этом месте по убыванию
    arr.sort((a, b) => a.id < b.id ? 1 : -1);
    document.getElementById('sortDeskID').style.display = "none";
    document.getElementById('sortAskID').style.display = "inherit";

    sortData();
}

function sortAskName() {
    // сортируем в этом месте по возрастанию
    arr.sort((a, b) => a.name > b.name ? 1 : -1);
    document.getElementById('sortAskName').style.display = "none";
    document.getElementById('sortDeskName').style.display = "inherit";
    // скрыть текущпю кнопку
    // показать обратную кнопку
    sortData();
}
function sortDeskName() {
    // сортируем в этом месте по убыванию
    arr.sort((a, b) => a.name < b.name ? 1 : -1);
    document.getElementById('sortDeskName').style.display = "none";
    document.getElementById('sortAskName').style.display = "inherit";

    sortData();
}


