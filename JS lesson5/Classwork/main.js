// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let threenumbers = (a, b, c) =>  {
//     if (a <b && a < c) {
//         document.write(a);
//         console.log(a);
//     } else if (b < c && b < a) {
//         console.log(b);
//         document.write(b);
//     } else {
//         console.log(c);
//         document.write(c);
//     }
// };
// threenumbers(3, 1, 5);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let threenumbers = (a, b, c) =>  {
//     if (a >b && a > c) {
//         document.write(a);
//         console.log(a);
//     } else if (b > c && b > a) {
//         console.log(b);
//         document.write(b);
//     } else {
//         console.log(c);
//         document.write(c);
//     }
// };
// threenumbers(3, 1, 5);

// - створити функцію яка повертає найбільше число з масиву
//
// let arr = [4,89,9,1,547,267,777];
//
// const arrmaxnumber = (array) => {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//             console.log(max);
//         }
//     }
//     return max;
// }
// arrmaxnumber(arr);

// - створити функцію яка повертає найменьше число з масиву
//
// let minArray = [200,3,4,5,6,-10,40000,3,600]
// const arrayMin = (array) => {
//     let min = array[0];
//     for (const element of array) {
//         if(element < min){
//             min = element;
//             console.log(min);
//         }
//     }
//     return min;
// }
// document.write(`<h2>Найменший елемент масиву: ${arrayMin(minArray)}</h2>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summArray = [1,2,3,4,6];
// const sumElement =  (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// document.write(sumElement(summArray));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let medium = [1,2,3,6,9];
// const ser =  (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum/array.length;
// }
// document.write(ser(medium));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const returnnumberminMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// returnnumberminMax(45, 14, -100, 4444434,65);
// document.write('Найменше число масиву'+ returnnumberminMax(45, 14, -100, 4444434,65));

// - створити функцію яка заповнює масив рандомними числами

// const Random = (length,size)=> {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*size));
//     }
// return arr;
// }
//
// document.write(Random(55,999))


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const randomNumber = (length,limit) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random() * limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(20,100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [1, 2, 3, 4]
// const reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//     return newArr;
// }
// console.log(reverse(array));