const price = [10, 20, 30];

const numbers = [2, 4, 6];

function addOne(number) {
  return number + 1;
}

const result = numbers.map(addOne);

console.log(result);

const products = [
  { id: 1, name: "Chair", price: 60 },
  { id: 2, name: "Lamp", price: 35 },
  { id: 3, name: "Table", price: 120 },
];