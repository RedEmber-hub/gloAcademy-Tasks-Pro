const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const container = document.createElement('div'); //контейнер <div></div>

weekArray.forEach(day => {
    const p = document.createElement('p'); //создание тега <p></p>
    p.textContent = day; //добавление текста в тег из массива
    container.appendChild(p); // добавление тега в контейнер <div><p></p></div>
})

document.body.appendChild(container); //добавление контейнера в body