const arr = ['2132153', '784546', '87327387', '527234', '2027827', '4728337', '176784'];

const arrfilter = (array) => {
    array.forEach(item => {
        if (item.slice(0, 1) == '2' || item.slice(0, 1) == '4') {
            console.log(item);
        }
    });
}
arrfilter(arr);

const displayPrimeNumbers = () => {
    // ф-ция проверки простое ли число
    const isPrime = (num) => {
        if (num <= 1) return 'Не простое';  // число 1 не простое
        if (num !== 2 && num % 2 === 0) return 'Не простое';

        for (let i = 2; i < num; i++) {
            if (num % i === 0) { // если есть остаток от деления, то число не простое
                return 'Не простое';
            }
        }

        return 'Простое';
    }

    for (let num = 1; num <= 100; num++) {
        if (isPrime(num) === 'Простое') {
            console.log(`${num} - Делители этого числа: 1 и ${num}`);  // Выводим простое число
        }
    }
}
displayPrimeNumbers();