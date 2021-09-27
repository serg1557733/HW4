/* 1  Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).
1 аргумент - какая-то функция
2 аргумент - значение контекста
3 + ... аргументы - любое кол-во аргументов
Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, и возвращать эту функцию с новым контекстом.
Сам контекст, который мы хотим установить, находиться во втором аргументе */

function bindFunc(fnc, context, ...arg) {
   let bindFunc = fnc.bind(context, [arg]);

   return bindFunc;
}

function sum(){
   return this.a + this.b;
}

const obj = {
   a: 5,
   b: 10
}

console.log(bindFunc(sum, obj)());


/*2 Написать функцию, которая не принимает никаких аргументов. В теле функции написать логику для нахождения суммы значений любого количества ключей (значения ключей должны быть больше нуля) из переданного контекста.
Обращаться к objectA напрямую нельзя :)

Пример
const func = function() {
 this.a + this.b
}


 */
const objectA = {
   a: 1,
   b: 2,
   c: 3,
  };

const valuesObjSumm = function() {
   if (!!Object.values(this).length > 0 ) {
      return Object.values(this).filter(element => element > 0).reduce((sumKeys, key) => sumKeys + key);
   } else {
      console.log(`Object hasnt keys or keys < 0`);
   }
};


console.log(valuesObjSumm.bind(objectA)()); 


/* 3
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
 */
const valObject0 = {
   values: [1, '2', 4, 8, '8',  3, 10, null, false],
  };


  const valObject1 = {
   values: [1, '8', 4, 4 , 8, '8',  3, 10, null, true, 7, 6],
  };


function getNewArray() {
   console.log(Object.values(this)) // 
     return Object.values(this).flat().filter(item => item > 2 && item % 2 === 0 && item < 10 && typeof(item) === 'number');
  };


  console.log(getNewArray.call(valObject0)); 
  console.log(getNewArray.call(valObject1)); 