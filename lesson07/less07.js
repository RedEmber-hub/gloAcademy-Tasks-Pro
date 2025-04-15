const renderWeek = () => {
    const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const weekends = ['Суббота', 'Воскресенье'];
    const today = new Date().toLocaleDateString('ru-RU', { weekday: 'long' });

    const container = document.createElement('div'); //контейнер <div></div>
    document.body.appendChild(container); //добавление контейнера в body

    weekArray.forEach(day => {
        const p = document.createElement('p'); //создание тега <p></p>
        p.textContent = day; //добавление текста в тег из массива
        container.appendChild(p); // добавление тега в контейнер <div><p></p></div>

        if (weekends.includes(day)) {
            p.style.fontStyle = 'italic';
        }
        if (day.toLowerCase() === today.toLowerCase()) {
            p.style.fontWeight = '700';
        }
    })
}

renderWeek();