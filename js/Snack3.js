console.log("JS OK");

let dom = document.querySelector("body");

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
const minWeight = bikes.reduce((prev, curr) => {
  return prev.weight < curr.weight ? prev : curr;
}, bikes[0]);

console.log(minWeight);

dom.innerHTML = `<div class="m-3">
  <h1>SNACK 3</h1>
  Il nome della bici che pesa meno è: ${minWeight.name} <br>
  Il peso è: ${minWeight.weight}Kg
</div>`;

let minWeight2 = bikes[0];

for (let bike of bikes) if (bike.weight < minWeight2.weight) minWeight2 = bike;

console.log(minWeight2);

//# Destructuring di 'minWeight2'
const { name, weight } = minWeight2;

dom.innerHTML += `<div class="m-3">
  <h1>SNACK 3 Secondo metodo</h1>
  Il nome della bici che pesa meno è: ${name} <br>
  Il peso è: ${weight}Kg
</div>`;
