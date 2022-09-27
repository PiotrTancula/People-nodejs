import { writeFile } from 'node:fs';

const genders = ['male', 'female'];

const maleNames = ['Jimmy', 'Billy', 'Alicia', 'John', 'Gary', 'Kerry', 'Jeff', 'Dave', 'Chuck', 'Steve', 'Richard', 'Alicja',
  'Dariusz', 'Kamil', 'Sylwester', 'Andrzej', 'Tomasz', 'Grzegorz', 'Patryk', 'Jacek'
];

const femaleNames = ['Daria', 'Anna', 'Alicja', 'Iwona', 'Alice', 'Barbara', 'Kate', 'Emily', 'Sabina', 'Monika', 'Iza',
  'Magda', 'Marta', 'Renata', 'Julia', 'Justyna', 'Gabriela', 'Ewelina', 'Natalia', 'Olga', 'Patrycja'
];

const age = [18, 20, 30, 40, 60, 70, 25, 35, 45, 55, 65, 76, 19, 21, 22, 23, 24, 34, 35, 36];

const lastNames = ['Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Davies', 'Johnson', 'Nowak', 'Kowalski',
  'Kaczmarek', 'Pietrzak', 'Olszewski', 'Adamczyk', 'Michalak', 'Mazur', 'Krawczyk', 'Piotrowski', 'Grabowski', 'Jankowski'];



const randChoice = (arr) => {
  return (
    Math.floor(Math.random() * arr)
  )
}

const people = [];

for (let i = 0; i < 20; i++) {

  const singleGender = genders[randChoice[genders.length]];
  const singleMaleName = maleNames[randChoice(maleNames.length)];
  const singleFemaleName = femaleNames[randChoice(femaleNames.length)];
  const singleLastName = lastNames[randChoice(lastNames.length)];
  const singleAge = age[randChoice(age.length)];

  people.push(
    {
      gender: singleGender,
      firstName: (singleGender === 'male' ? singleMaleName : singleFemaleName),
      lastName: singleLastName,
      age: singleAge

    }
  )
};

writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});