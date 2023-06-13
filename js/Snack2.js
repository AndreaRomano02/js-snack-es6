console.log('JS OK');

//# Array principale con gli studenti
const students = [
  {
    id: 213,
    name: 'Marco della Rovere',
    grades: 78,
  },
  {
    id: 110,
    name: 'Paola Cortellessa',
    grades: 96,
  },
  {
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48,
  },
  {
    id: 145,
    name: 'Gaia Borromini ',
    grades: 74,
  },
  {
    id: 196,
    name: 'Luigi Grimaldello ',
    grades: 68,
  },
  {
    id: 102,
    name: 'Piero della Francesca',
    grades: 50,
  },
  {
    id: 120,
    name: 'Francesca da Polenta ',
    grades: 84,
  },
];

console.table(students);

//# Array con studenti con i voti maggiori di 70
const studentsGrades = students.filter((student) => student.grades >= 70);
console.table(studentsGrades);

//# Array con studenti con i voti maggiori di 70 e id maggiore di 120
const studentsGradesAndId = students.filter((student) => {
  return student.grades >= 70 && student.id >= 120;
});
console.table(studentsGradesAndId);

//# Converto e stampo i nomi in maiuscolo
const studentClassName = students.map((student) => student.name.toUpperCase());
console.table(studentClassName);
