// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Wehicle(model,company,year,maxspead,capacity){
//     this.model=model;
//     this.company=company;
//     this.year=year;
//     this.maxspead=maxspead;
//     this.capasity=capacity;
//     this.drive=()=>{console.log('їдемо зі швидкістю ${this.maxspead} на годину');}
//     this.info=() => {console.log('модель- ${this.model},виробник-${this.company}');}
//     this.increaseMaxSpeed= function (newSpead){
//         this.maxspead+=newSpead
//     };
//     this.changeYear= function (newValue){
//         this.year=newValue;
//     };
//     this.addDriver=function (driver){
//         this.driver=driver;
//     };
// }

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Carclass{
//     constructor(model,company,year,maxspead,capacity) {
//         this.model=model;
//         this.company=company;
//         this.year= year;
//         this.maxspead=maxspead;
//         this.capasity=capacity;
//     }
//     drive(){
//         console.log('їдемо зі швидкістю ${this.maxspead} на годину');
//     };
//
//     info(){
//         console.log('модель- ${this.model},виробник-${this.company}');}
//     increaseMaxSpeed(newSpead){
//         this.maxspead+=newSpead
//     };
//     changeYear(newValue){
//         this.year=newValue;
//     };
//     addDriver(driver){
//         this.driver=driver;
//     };
// }


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
let popelushkases=[
    new Popelushka('zolushka1',12,35),
    new Popelushka('zolushka2',6,22),
    new Popelushka('zolushka3',18,38),
    new Popelushka('zolushka4',15,40),
    new Popelushka('zolushka5',13,33),
];

class Prince {
    constructor(name,age,shoe) {
        this.name=name;
        this.age=age;
        this.shoe=shoe;
    }
}
let prince= new Prince('sindbad',28,38);
let popelushka = popelushkases.find((value) => value.size === prince.shoe);
console.log(popelushka);