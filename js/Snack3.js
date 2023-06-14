console.log("JS OK");

const dom = document.querySelector("body");

//# Creo l'Array delle bici
const bikes = [
  {
    name: "bike 1",
    weight: 10,
  },
  {
    name: "bike 2",
    weight: 11,
  },
  {
    name: "bike 3",
    weight: 15,
  },
  {
    name: "bike 4",
    weight: 5,
  },
  {
    name: "bike 5",
    weight: 7,
  },
];

//# Recupero il peso delle biciclette dall'array
const minWeight = bikes.reduce((prev, curr) =>
  prev.weight < curr.weight ? prev : curr
);

console.log(minWeight);

dom.innerHTML = `<div class="m-3">
  <h1>SNACK 3</h1>
  Il nome della bici che pesa meno è: ${minWeight.name} <br>
  Il peso è: ${minWeight.weight}Kg
</div>`;
