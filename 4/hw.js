function getPasswordChecker(password) {
    let pass = password
    return function (testPas) {
        let pas = testPas
        if (pass === pas) {
            return true
        } else {
            return false
        }
    }
}

// test1 = getPasswordChecker(1234)
// test2 = getPasswordChecker(4321)
// console.log(test1(1234))
// console.log(test2(432))

const r1 = require('readline').createInterface(process.stdin, process.stdout)

count = 0
number = 17

function question() {
    r1.question('Enter command:', (cmd) => {
        console.log('You entered:', cmd);
        if (cmd == 'quit') {
            r1.close();
            return
        } else if (cmd == number) {
            count++
            r1.close();
            console.log('Вы угадали использовав попыток - ', count)
            return
        } else if (cmd < number) {
            console.log('Загаданное число больше')
            question()
        } else {
            console.log('Загаданное число меньше')
            question()
        }
        count++
        console.log(count)
        question();
    })
}

question();