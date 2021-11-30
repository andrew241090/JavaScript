// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
//
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//  let users = [
//      new User(23, "Andriy", "Velam",'dsf@mail.com', '380934252345'),
//      new User(54,"Marko","Disney",'ddsssf@mail.com','380934252345'),
//      new User(5,"Joyi","Kvarta",'kvartg@mail.com','38098777777'),
//      new User(7,"Nastya","Fotel",'fotel@mail.com','38098234234'),
//      new User(99,"Bogdan","Picca",'piica@mail.com','4575675675'),
//      new User(65,"Sergiy","Edem",'ede@mail.com','3809344433333'),
//      new User(1,"Ivan","Sicilia",'sicicf@mail.com','38093455555'),
//      new User(3,"Dimon","Epam",'epamf@mail.com','38097212123'),
//      new User(6,"Kolya",'Rixos','rixos@mail.com','380935454645'),
//      new User(4,"Taras","Termal",'termal@mail.com','38093455454')
//  ];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUser = users.filter(value => value.id % 2 ===0);
// console.log(filterUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortusers=users.sort((a,b)=>a.id-b.id);
// console.log(sortusers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    this.order=order;
}
}
// створити пустий масив, наповнити його 10 об'єктами Client

let clients=[
    new Client(1,'andrew','andrusyshyn','andrusyhsyn@mail.com','380975474221',['beer','milk','sosuage']),
    new Client(2,'bogdan','leskiv','leskiv@mail.com','380989635422',['onion','salt','sigarets','water']),
    new Client(3,'ivan','kmitj','kmit@mail.com','380934345356',['chips','chokolade']),
    new Client(4,'volodymyr','benduga','benduga@mail.com','38095566776',['potato','corn','meat']),
    new Client(5,'vasyl','voloshin','voloshin@mail.com','380934554455',['tomat','chiken','bread','carrot','sugar'])
]
    // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortclient= clients.sort((a,b) => b.order.length - a.order.length);
console.log(sortclient);