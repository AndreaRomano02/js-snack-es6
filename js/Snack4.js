console.log("JS OK");

// TRACCIA 4
/**
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const teams = [
  {
    name: "Inter",
    score: 0,
    foul: 0,
  },
  {
    name: "Milan",
    score: 0,
    foul: 0,
  },
  {
    name: "Juventus",
    score: 0,
    foul: 0,
  },
  {
    name: "PSG",
    score: 0,
    foul: 0,
  },
  {
    name: "Livorno",
    score: 0,
    foul: 0,
  },
  {
    name: "Roma",
    score: 0,
    foul: 0,
  },
];

//# Creo un nuovo array e scorrendo tutti i singoli oggetti
//# inserisco un numero random al punteggio ed ai falli
const teamsScoredFoul = teams.map((team) => {
  team.score = Math.floor(Math.random() * 11);
  team.foul = Math.floor(Math.random() * 11);
  return team;
});

const teamsFoul = [...teamsScoredFoul];
teamsFoul.forEach((team) => delete team.score);

console.table(teamsFoul);
