// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let element = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = function () { element.style.display = 'none'};


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn = document.getElementsByTagName('button')[0];
btn.onclick = function () {btn.style.display= 'none'};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let btn = document.getElementById('btn');
btn.onclick = function () {
    let age = document.getElementById('age').value;
            if (!age) {
                alert('Ви не ввели свого віку');
            } else if (age < 18) {
                alert('Вам менше 18 років');
            } else {
                alert('Вітаємо на сайті.');
            }
};

// - Создайте меню, которое раскрывается/сворачивается при клике

    let menu = document.getElementsByClassName('menu')[0];
    menu.onclick = function () {
    this.classList.toggle('target')
}



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
]
for (const comment of comments) {
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let title = document.createElement('h2');
    title.innerText = comment.title;
    let bodyComment = document.createElement('div');
    bodyComment.classList.add('bodyComment')
    bodyComment.innerText= comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';
    btn.onclick = function (){
        bodyComment.classList.toggle('hide-body')
    }



    commentDiv.append(title,bodyComment,btn);
    document.body.append(commentDiv);

}