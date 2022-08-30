function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let num = randomInteger(1, 1000)

guessNum = 0

while (+guessNum !== num) {
    let guessNum = prompt('Введите число от 1 до 1000')
    console.log('Я загадал число:', num);
    console.log('Пользователь ввёл', guessNum);
    if (guessNum > num) {
        alert('Ваше число больше загаданного');
    } else if (guessNum < num) {
        alert('Ваше число меньше загаданного');
    } else if (isNaN(guessNum)) {
        alert('Не корректный ввод');
    } else if (guessNum == num) {
        alert('Вы угадали');
        break
    }
}


