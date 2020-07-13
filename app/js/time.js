function get_clock() {
 
var now;
var hours;
var minutes;
var seconds;
var result;

now = new Date();

hours = now.getHours(); // Данный метод возвращает часы

minutes = now.getMinutes(); // Данный метод возвращает минуты

seconds = now.getSeconds(); // Данный метод возвращает секунды

result = hours + " : " + minutes + " : " +  seconds;

document.getElementById("cl").innerHTML = result;

setTimeout("get_clock()", 1000); // Данный метод будет вызывать функцию каждую секунду


}

get_clock();