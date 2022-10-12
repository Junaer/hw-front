class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(value) {
        this.available = value;
    }
}

// let boots = new Good(1, 'Ботинки', 'Натуральная кожа', [42, 43], 3500, true)
// console.log(boots.setAvailable())

class GoodsList {
    #good
    constructor(filter, sortPrice, sortDIr) {
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDIr = sortDIr;
        this.#good = []
    }
    get list() {
        // return [this.id, this.name, this.description, this.sizes, this.price, this.available, this.filter, this.sortPrice, this.sortDIr];
        let data = this.#good.filter(item => item.available && this.filter.test(item.name))
        if (this.sortPrice) data.sort((item1, item2) => (item2.price - item1.price) * (this.sortDIr ? -1 : 1))
        return data
    }
    add(value) {
        this.#good.push(value)
        // [this.id] = value.id;
        // [this.name] = value.name;
        // [this.description] = description;
        // [this.sizes] = sizes
        // [this.price] = price;
        // [this.available] = available;
        // [this.filter] = filter;
        // [this.sortPrice] = sortPrice;
        // [this.sortDIr] = sortDIr;
    }
    remove(id) {
        let index = this.#good.findIndex(item => item.id = id)
        this.#good.splice(index, 1)
    }
}

class BasketGood extends Good {
    constructor(good, amount) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available)
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }
    add(good, amount) {
        let index = this.goods.findIndex(item => item.id === good.id)
        if (index !== -1) {
            this.goods[index].amount += amount
        }
        else {
            this.goods.push( new BasketGood(good, amount))
        }
    }
    remove(good, amount) {
        let index = this.goods.findIndex(item=>item.id === good.id)
        if (index === -1) return
        this.goods[index].amount -= amount
        if (!this.goods[index].amount) this.goods.splice(index, 1)
    }
    clear() {
        this.goods = []
    }
    removeUnavailable() {
        this.goods = this.goods.filter(item => item.available)
    }
}

let item1 = new Good(1, 'Ботинки', 'Натуральная кожа', [42, 43], 3501, true)
let item2 = new Good(2, 'Худи', 'С капюшоном', [42, 43, 44], 3502, false)
let item3 = new Good(3, 'Футболка', 'Кайфовая', [42, 43, 46], 2000, true)
let item4 = new Good(3, 'Слынцы', 'Вьетнамские', [42, 38], 1000, true)
let item5 = new Good(3, 'Кроссовки', 'Меховые', [42, 37, 38], 3900, true)
var thisLocal = { data: [item1, item2, item3] }
let boot = new GoodsList(/^([a-zа-яё]+|\d+)$/i, true, true)
for (let i = 0; i < 3; ++i) {
    boot.add(thisLocal.data[i])
}
console.log(boot.list)
let basket = new Basket()
basket.add(item1, 3)
console.log('add1', basket)
basket.add(item1, 2)
console.log('add2', basket)
basket.add(item2, 1)
console.log('add3', basket)

basket.remove(item1, 3)
console.log('remove1', basket)
basket.remove(item1, 2)
console.log('remove2', basket)

basket.clear()
console.log('clear', basket)

basket.add(item1, 3)
basket.add(item1, 2)
basket.add(item2, 1)
basket.removeUnavailable()

console.log('removeUnavailable', basket)

