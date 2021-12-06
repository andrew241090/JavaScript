// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let blok = document.createElement('div');
// document.body.appendChild(blok);
// blok.classList.add('wrap', 'collapse','alpha', 'beta');
// blok.style.background = 'silver';
// blok.style.color = 'red';
// blok.style.fontSize = '100px';
// document.body.appendChild(blok);
// document.body.appendChild(blok.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let array=['Main','Products','About us','Contacts'];
// for (const arr of array){
//     let element=document.createElement('li');
//     let menus = document.getElementsByClassName('menu');
//     menus[0].appendChild(element);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const arr of coursesAndDurationArray){
//     let item = document.createElement('div');
//     item.innerText = `${arr.title} ${arr.monthDuration}`;
//     document.body.appendChild(item);
// }


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const course of coursesAndDurationArray) {
// let blok = document.createElement('div');
// blok.classList.add('item');
// let h1 = document.createElement('h1');
// h1.classList.add('heading');
// h1.innerText = course.title;
// let p = document.createElement('p');
// p.classList.add('description');
// p.innerText = course.monthDuration;
//
// blok.appendChild(h1);
// blok.appendChild(p);
// document.body.appendChild(blok);
//
// }