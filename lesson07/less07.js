const weekArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

weekArray.forEach(week => {
    document.body.innerHTML += `<p>${week}</p>`
})