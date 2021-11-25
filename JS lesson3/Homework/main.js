// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    // let number= [5,18,56,4,8];
    // let sring= ['wood','fish','mirror','eclipse','tupe'];
    // let diffrent= [false,'Ivan',75,true,3]
    // console.log(number,sring,diffrent);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


   // let empty = [];
   //  empty[0]=1;
   //  empty[1]="andriy";
   //  empty[2]=true;
   //  empty[3]=45;
   //  empty[4]='volvo';
   //  console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//
 for (let i=0; i<10; i++){
  document.write('<div>item</div>');
 }
for (let i=0; i<10; i++){
 document.write(`<div>item ${i}</div>`);
}



// let i=0;
// while (i<20 ){
//  i++
//  document.write(`<div>текст</div>`);
//  }
// let i=0;
// while (i<20 ){
//  i++
//  document.write(`<div>текст ${i}</div>`);
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayofnumbers = [32,3,5,65,7,54,1,90,23,77];
// for (let i = 0; i < arrayofnumbers.length; i++) {
//     let arrayofnumber = arrayofnumbers[i];
//     console.log(arrayofnumber);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrstring=['image','contract','wood','night','open','enjoy','awesome','soul','grand','huge'];
// let i=0;
// while (i<arrstring.length){
//     console.log(arrstring[i]);
//     i++;
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrmix= [34,"гараж",false,true,234,"invisible",'cart',56,'slalom',true];
// let i=0;
// while (i<arrmix.length){
//     console.log(arrmix[i]);
//     i++;
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrmix= [34,"гараж",false,true,234,"invisible",'cart',56,'slalom',true];
// for (let i = 0; i < arrmix.length; i++) {
//     const arrmix1 = arrmix[i];
//     if (typeof arrmix1==="boolean") {
//         console.log(arrmix[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrmix= [34,"гараж",false,true,234,"invisible",'cart',56,'slalom',true];
// for (let i = 0; i < arrmix.length; i++) {
//     const arrmix1 = arrmix[i];
//     if (typeof arrmix1==="number") {
//         console.log(arrmix[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrmix= [34,"гараж",false,true,234,"invisible",'cart',56,'slalom',true];
// for (let i = 0; i < arrmix.length; i++) {
//     const arrmix1 = arrmix[i];
//     if (typeof arrmix1==="string") {
//         console.log(arrmix[i]);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//     let arrempty= [];
//     arrempty[0]=1;
//     arrempty[1]=34;
//     arrempty[2]='door';
//     arrempty[3]=true;
//     arrempty[4]=76;
//     arrempty[5]='window';
//     arrempty[6]='football';
//     arrempty[7]='weak';
//     arrempty[8]=23;
//     arrempty[9]=false;
//     console.log(arrempty);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 ===0 && i !== 0){
//             console.log(i);
//             document.write(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i !==0){
//         console.log(i);
//         document.write(i);
//     }
// }
