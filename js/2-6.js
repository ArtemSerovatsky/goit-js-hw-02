let numbers = [];
let input;
let total = 0;

do {
  input = prompt("введите число!", 0);
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }

    numbers.push(+input);
  }
} while (input !== null);
if (numbers.length !== 0) {
  for (let number of numbers) {
    total += +number;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
