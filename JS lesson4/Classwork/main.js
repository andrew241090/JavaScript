// - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)

// function numbers(a,b,c){
//     if (a<b && a<c) {
//         console.log(a);
//     }
//     else if(b<a && b<c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
//     };
//     numbers(2,6,1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(a,b,c){
//     if (a>b && a>c) {
//         console.log(a);
//     }
//     else if(b>a && b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
//     };
//     numbers(2,6,1);

// - створити функцію яка повертає найбільше число з масиву

// let massive=[34,6,87,-4,65,44,1];
// function maxnumberofarray(arr){
//     let min=arr[0];
//  for (const item of arr){
//      if (item>min){
//          min=item;
//      }
//  }
//  return min;
// }
// document.write(`<h2>Найбільше число масиву: ${maxnumberofarray(massive)}</h2>`)


// - створити функцію яка повертає найменьше число з масиву
//
// let massive=[34,6,87,-4,65,44,1];
// function maxnumberofarray(arr){
//     let min=arr[0];
//  for (const item of arr){
//      if (item<min){
//          min=item;
//      }
//  }
//  return min;
// }
// document.write(`<h2>Найменше число масиву: ${maxnumberofarray(massive)}</h2>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumarray=[4,6,7,34,3,9];
// function summarry(array){
//     let sum=0;
//     for (const item of array){
//         sum=item+sum;
//     }
//     return sum;
// }
// document.write(summarry(sumarray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sumarray=[4,6,7,34,3,9];
//
// function middlenumber(array){
//     let sum=0;
//     for (const number of array){
//         sum=number+sum;
//     }
//     return sum/array.length;
//
// }
// document.write(middlenumber(sumarray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function  minMax(arg){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element < max) {
//             max = element;
//         }
//         if (element > min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Максимальне число з введених: ' + minMax(99, 4, 7, 546, 89,-5))

// - створити функцію яка заповнює масив рандомними числами

// function Random (size) {
//     let arrayEmpty = [];
//     for (let i = 0; i < size; i++){
//         arrayEmpty.push(Math.floor(Math.random()*1000));
//     }
// return arrayEmpty
// };
// document.write(Random(16))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function Random (size,limit) {
//     let arrayEmpty = [];
//     for (let i = 0; i < size; i++){
//         arrayEmpty.push(Math.floor(Math.random()*limit));
//     }
// return arrayEmpty
// };
// document.write(Random(10,100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;
}
document.write(reverse(newArr));
