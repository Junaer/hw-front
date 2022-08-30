function numbers(count) {
    let list = []
    for (let i = 2; count !== 0; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i%j==0)
                {
                    flag=0;
                    break;
                }
            }
        }
        else if (i != 2) flag = 0;
        if (flag==1) {
            count -= 1
            list.push(i);
        }
    }
    return list
}

console.log(numbers(process.argv[2]));




