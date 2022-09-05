let shop_list = [
    {
    id: 1,
    name: 'Ботинки',
    description: 'Зеленые',
    sizes: [42, 45],
    price: 60,
    available: true,
    },
    {
    id: 2,
    name: 'Кроссовки',
    description: 'Спелые',
    sizes: [42, 43, 44],
    price: 75,
    available: false,
    },
    {
    id: 3,
    name: 'Футболка',
    description: 'Мягкая',
    sizes: [38, 40 ,44],
    price: 15,
    available: true,
    },
    {
    id: 4,
    name: 'Кофта',
    description: 'Капюшонистая',
    sizes: [39, 40],
    price: 90,
    available: true,
    },
    {
    id: 5,
    name: 'Сланцы',
    description: 'Носковые',
    sizes: [35, 37, 39],
    price: 132,
    available: true,
    },
]

let basket = [
    {
    good: shop_list[0],
    amount: 2,
    },
    {
    good: shop_list[1],
    amount: 1,
    },
]

function full_clear_basket () {
    basket = []
}

function clear_one_item (good_type) {
    for (i=0; i<basket.length; i++){
        if (basket[i].good.name === good_type) {
            basket.splice(i, i);

        } 
    }
}

function add_item_basket (good_type) {
    for (i=0; i<basket.length; i++){
        if (basket[i].good.name === good_type) {
            basket[i].amount++
            return basket
        } 
    }
    for (i=0; i<shop_list.length; i++){
        if (shop_list[i].name === good_type) {
            let item =     {
                good: shop_list[i],
                amount: 1,
                }
            basket.push(item)
            return basket
        }
    }
}

function total_basket () {
    let totalAmoun = 0
    let totalSu = 0
    let totalBasket = []
    for (i=0; i<basket.length; i++) {
        totalAmoun += basket[i].amount
        totalSu += basket[i].good.price*basket[i].amount
    }
    totalBasket.totalAmount = totalAmoun;
    totalBasket.totalSum = totalSu;
    return totalBasket
}


full_clear_basket()

add_item_basket('Сланцы');

add_item_basket('Сланцы');

clear_one_item('Кроссовки')

console.log(total_basket())




