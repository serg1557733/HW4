# HW4
A-Level Home Work 4
HomeWork
Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).
1 аргумент - какая-то функция

2 аргумент - значение контекста

3 + ... аргументы - любое кол-во аргументов

Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, и возвращать эту функцию с новым контекстом.

Сам контекст, который мы хотим установить, находиться во втором аргументе

Написать функцию, которая не принимает никаких аргументов. В теле функции написать логику для нахождения суммы значений любого количества ключей (значения ключей должны быть больше нуля) из переданного контекста.
Обращаться к objectA напрямую нельзя :)

Пример

const func = function() {
 this.a + this.b + .....
}

const objectA = {
 a: 1,
 b: 2,
 c: 3,
}

Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10. Новый массив будет состоять из значений ключа values из контекста, если такого ключа нет, то выводим сообщение "Не найдено".
Обращаться к valObject0 напрямую нельзя :)

Если хотите использовать map, то внутри map this всегда равен глобальному объекту. Чтобы это поменять передаем нужное значение this во второй аргумент map -

arr.map(() => {}, this);

Пример:

function getNewArray() {
 ....
};

const valObject0 = {
 values: [1, '2', 4, 8, '8',  3, 10, null, false],
};


const result = getNewArray...; // Ссылаясь на массив ключа values из valObject0 [4, 8]
