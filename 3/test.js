// const numbers = [1, 2, 3, 4, 7]


// // numbers.forEach((number, index) => {
// //   console.log(number, index)
// // })

// for(let i=0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }



let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper