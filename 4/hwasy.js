const r1 = require('readline').createInterface(process.stdin, process.stdout)


function question (quest) {
    return new Promise((resolve, reject) => {
        r1.question(quest, (data) => {
            resolve(data);
        })
    })
}


number = 17
countt = 0

async function input() {
    while (true) {
        countt++
        const data = await question('Введите число: ');
        console.log('Вы ввели: ', data)
        console.log('Попытка номер: ', countt)
        if (data == 'q') {
            r1.close();
            break
        }else if (data == number) {
            r1.close()
            console.log('Вы угадали число использовав попыток - ', countt )
            break
        } else if (data < number) {
            console.log('Загаданное число больше')
            
        } else {
            console.log('Загаданное число меньше')
            
        }
    }
}

input();