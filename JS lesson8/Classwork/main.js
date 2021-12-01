// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let element = document.getElementById('main_header').classList.add('new-element');

// b) робить шириниу елементу ul 400px

// let elByTag = document.getElementsByTagName('ul');
// elByTag.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elByclassName = document.getElementsByClassName('linkList');
// for (const item of elByclassName){
//     item.style.width='50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// Function addtext(text) {
//     let elByClassName=document.getElementsByClassName('listElement2');
//     elByClassName.innerText = text;
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let back=document.getElementsByTagName('li');
// for (const bi of back){
//     bi.style.background='silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let elements=document.getElementsByTagName('a');
// for ( const el of elements){
//     a.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let allelements=document.getElementsByTagName('a');
// for (const all of allelements ){
//     if (a.innerText === 'link3'){
//         a.style.fontsize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let alldocuments=document.getElementsByTagName('a');
// for (const all of alldocuments){
//     a.classList.add(a.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let headerlist= document.getElementsByClassName('sub-header');
// for (const its of headerlist){
//     its.style.background=prompt('enter color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let someheader= document.getElementsByClassName('sub-header');
// for (const item of someheader){
//     if (item.innerText=== 'content 2 segment'){
//         item.style.color= prompt('which color do you prefare');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.getElementsByClassName('content_1').innerText=prompt();

// l) отримати елементи p та змінити їм padding на 20px
// let paragraphs= document.getElementsByTagName('p');
// for (const par of paragraphs){
//     par.style.padding='20px';
// }
//
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elem= document.getElementsByClassName('text2');
// for (const item of elem) {
//     elem.innerText = 'sep-2021';
// }