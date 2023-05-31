//BITHDAY greeting

let day = prompt('Введите день Вашего рождения');
let month = prompt('Введите номер месяца в котором Вы родились');
let date = new Date(); 
let current_day = date.getDate();
let current_month = (date.getMonth() + 1);


if (day == current_day && month == current_month){
    alert("HAPPY" + " " + "BITHDAY!!!");
}
