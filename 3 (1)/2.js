"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

  
function result(num) {
    if (isNaN(num)) {
        alert("Значение задано неверно");
    }else {
    return num / 100 * 87
    }
}

const num = +prompt('Введите число');
console.log(`Размер заработной платы за вычетом налогов равен ${result(num)}`);