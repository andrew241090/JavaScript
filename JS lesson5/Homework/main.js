// - створити функцію яка обчислює та повертає площу прямокутника

// const areatriangle = (a, b) => {
//     return a * b;
// }
// console.log(areatriangle(5, 10));
// document.write('Площа прямокутника: ' + areatriangle(5, 10));

// - створити функцію яка обчислює та повертає площу круга
//
// const circlesquare = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(circlesquare(5));
// document.write('Площа круга: ' + circlesquare(5));

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

// const squarecyl = (r, h) => {
//     return 2 * Math.PI * r * h;
// }
// console.log(squarecyl(20,8));
// document.write('Площа циліндра: ' + squarecyl(8, 20));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [9 , 62 , 55 , 4 , 'hello', 'bye', 'roof'];
//
// const arr =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const space=array[i]+" ,";
//        document.write(space);
//     }
// }
// arr(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph =  (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('wefvrf eb  egbfsbbgfbfb');


//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//

// let  main= (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// main('Параграф');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let elementul = (text,item) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < item; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// elementul('dfvdafbv', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let Array = [,false,65,true,'mojo', 87, 'wood'];
//
// let arctos = (arr) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// arctos(Array);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let massiv = (array) => {
//     for (let item of array) {
//         document.write(`<div>${item.id}.${item.name} - ${item.age}</div>`);
//     }
// }
// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
//
// massiv(newArray);

