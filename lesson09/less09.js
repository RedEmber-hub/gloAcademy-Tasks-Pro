const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

//контейнеры для двух видов дат
const fullFormatEl = document.createElement('p');
const shortFormatEl = document.createElement('p');
document.body.appendChild(fullFormatEl);
document.body.appendChild(shortFormatEl);

// функция склонения слов
function getWordForm(num, words) {
    if (num % 100 >= 11 && num % 100 <= 14) return words[2];
    if ((num % 10) === 1) return words[0];
    if ((num % 10) >= 2 && (num % 10) <= 4) return words[1];
    return words[2];
}

//ф-ция полной даты и времени
const renderFullDate = () => {
    const today = new Date();
    const dayIndex = (today.getDay() + 6) % 7; // неделя начинается с понедельника
    const dayOfWeek = days[dayIndex]; // день недели
    const day = today.getDate(); // число
    const month = months[today.getMonth()]; // месяц
    const year = today.getFullYear(); // год
    const hours = today.getHours(); // часы
    const minutes = today.getMinutes(); // минуты
    const seconds = today.getSeconds(); // секунды

    const fullDate = `Сегодня ${dayOfWeek}, ${day} ${month} ${year} года, ${hours} ${getWordForm(hours, ['час', 'часа', 'часов'])} ${minutes} ${getWordForm(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${getWordForm(seconds, ['секунда', 'секунды', 'секунд'])}`;

    fullFormatEl.textContent = fullDate;
}

//ф-ция добавляет нуль впереди числа
function addZero(num) {
    if (num < 10) return '0' + num;
    return num;
}

//ф-ция краткой даты и времени
function renderTime() {
    const today = new Date();
    const day = addZero(today.getDate());
    const month = addZero(today.getMonth() + 1);
    const year = today.getFullYear();
    const hours = addZero(today.getHours());
    const minutes = addZero(today.getMinutes());
    const seconds = addZero(today.getSeconds());

    const formatted = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;

    shortFormatEl.textContent = formatted;
}

setInterval(() => {
    renderFullDate();
    renderTime();
}, 500);
