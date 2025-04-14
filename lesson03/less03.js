let namePerson = prompt('Введите имя').toLowerCase();
console.log(namePerson === 'Артем' ? директор : namePerson === 'Александр' ? преподаватель : 'студент');

const chooseLanguageAndDays = () => {
    let lang = prompt('Выберите и напишите нужный вам язык (ru или en)').toLowerCase();
    if (lang === 'ru') {
        console.log('Понедельник, вторник, среда, четверг, пятница, субоота, воскресенье');
    } else if (lang === 'en') {
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    } else {
        console.log('Пожалуйста, выберите "ru" или "en"');
        chooseLanguageAndDays();
    }
}
chooseLanguageAndDays();

const chooseLanguageAndDaysTwo = () => {
    let lang = prompt('Выберите и напишите нужный вам язык (ru или en)').toLowerCase();
    switch (lang) {
        case 'ru':
            console.log('Понедельник, вторник, среда, четверг, пятница, субоота, воскресенье');
            break;
        case 'en':
            console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
            break;
        default:
            console.log('Пожалуйста, выберите "ru" или "en"');
            chooseLanguageAndDaysTwo();
    }
}
chooseLanguageAndDaysTwo();

const chooseLanguageAndDaysThree = () => {
    let lang = prompt('Выберите и напишите нужный вам язык (ru или en)').toLowerCase();

    const daysArray = lang === 'ru' ? ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(daysArray.join(', '));
}
chooseLanguageAndDaysThree();