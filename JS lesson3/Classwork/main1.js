// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrnumb.length) {
//     console.log(arrnumb[i]);
//     i++;
// }
// 2. перебрати його циклом for
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrnumb.length; i++) {
//     const arrnumbElement = arrnumb[i];
//     console.log(arrnumb[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrnumb.length){
//     if (i % 2 === 0) {
//         console.log(arrnumb[i]);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrnumb.length; i++) {
//     const Element = arrnumb[i];
//     if (Element % 2 === 0){
//         console.log(Element);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i < arrnumb.length){
//     let temp=arrnumb[i];
//     if (temp % 2 === 0) {
//         console.log(temp);
//     }
// i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrnumb.length; i++) {
//     const arrnumbElement = arrnumb[i];
//     if (arrnumbElement % 2 ===0){
//         console.log(arrnumbElement);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten

// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let item of arrnumb){
//     if (item % 3 === 0){
//         item='okten';
//     }
//         console.log(item);
// }
// 8. вивести масив в зворотньому порядку.
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let  i = arrnumb.length -1;i > 0; i--) {
//     const arrnumbElement = arrnumb[i];
//     console.log(arrnumbElement)
// }

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
//  let i = arrnumb.length;
//  while (i>-1 ) {
//     console.log(arrnumb[i]);
//     i-=1;
// }
// 2. перебрати його циклом for
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrnumb.length-1;i >= 0; i--) {
//     const arrnumbElement = arrnumb[i];
//     console.log(arrnumb[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrnumb.length;
// while ( i>-1 ){
//     if (i % 2 === 0) {
//         console.log(arrnumb[i]);
//     }
//     i-=1;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let  i =arrnumb.length-1; i >0; i--) {
//     const Element = arrnumb[i];
//     if (Element % 2 === 0){
//         console.log(Element);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// let i= arrnumb.length;
// while (i>-1 ){
//     let temp=arrnumb[i];
//     if (temp % 2 === 0) {
//         console.log(temp);
//     }
// i-=1;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrnumb.length - 1; i >= 0; i--) {
//     const arrnumbElement = arrnumb[i];
//     if (arrnumbElement % 2 ===0){
//         console.log(arrnumbElement);
//     }
//
// }

// 7. замінити кожне число кратне 3 на слово "okten

// let arrnumb = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrnumb.length - 1; i >= 0; i--) {
//     let item = arrnumb[i];
//     if (item %3===0) {
//         item='okten';
//     }
//     console.log(item);
// }