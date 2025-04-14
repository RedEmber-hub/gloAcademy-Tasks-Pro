const myfunction = () => {
    const someInput = prompt('Введите любой текст');

    if (someInput === null || someInput === '') {
        alert('Вы не ввели строку');
        myfunction();
    } else if (!isNaN(someInput)) {
        // Проверка, если введено число (не строка)
        alert('Число введено. Пожалуйста, введите строку!');
        myfunction();
    } else {
        let result = someInput.length > 30 ? someInput.slice(0, 30) + "..." : someInput;
        result.trim();
        alert("Результат: " + result);
    }
}
myfunction();