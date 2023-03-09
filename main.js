let numbers = [];
let number1;

for (let i = 0; i < 7; i++) {
    let number1 = Number(prompt('Enter number'));
    numbers.push(number1);
}
console.log(numbers[0]);
console.log(numbers[6]);

console.log(numbers.length);