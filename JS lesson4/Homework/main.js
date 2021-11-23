// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareRectangle (a,b){
//     let square= a * b;
//     // return square;
//     console.log(square);
// }
// squareRectangle(5,10);
// squareRectangle(7,8);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCube (r){
//   let weight=2 * 3.14 * r * r;
//   return weight;
// }
// squareCube(10);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function squareculindr (h,r){
//     let  S=2*3.14*(r+h);
//     return S;
// }
// squareculindr(25,5)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function array(arr){
//     for (let users of arr)
//         console.log(users);
// }
// array([23,45,543,'Hello']);


    // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function Paragraph (text){
//     document.write(`<div>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`</div>`);
// }
// Paragraph('SSLKDJJ OSIJDFFOJO JJLKSFD EWF W' );

    // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function threeElement(text){
//     document.write(`<ul>`);
//      document.write(`<li>${text}</li>`);
//      document.write(`<li>${text}</li>`);
//      document.write(`<li>${text}</li>`);
//      document.write(`</ul>`);
// }
// threeElement('sadgf dgdg  dfg dfdsg dfg g')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function masive(text, size){
//      document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         const textElement = document.write(`<li>${text}</li>`);
//     }
//      document.write(`</ul>`);
// }
// masive('sdkfj fsdff', 6);

    // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function primitive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
// }
// let somearr=[true,54,65,'building'];
// primitive(somearr);


    // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let massivearr=[{id:1, name:"Andrew", age:31},{id:2, name:"Roman", age:12},{id:3, name:"Bogdan", age:25},{id:4, name:"Slava", age:36}];
// function massellements(arr){
//     for (let item of arr){
//         document.write(`<div> ${item.id}- ${item.name} - ${item.age}</div>`);
//     }
// }
// massellements(massivearr);