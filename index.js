// Zadanie 1
const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

function isValidName(name) {
  return typeof name === "string" && name.trim().length >= 3;
}

function capitalize(word) {
  let help = "";
  help = help.concat(word.charAt(0).toUpperCase(), word.slice(1).toLowerCase());
  return help;
}

function nickNameGenerator(array) {
  return array.map((person) => {
    if (isValidName(person.firstName) && isValidName(person.lastName)) {
      let pseudo = "";
      let nickFirst = capitalize(
        person.firstName.slice(-3).split("").reverse().join("")
      );
      let nickLast = person.lastName
        .slice(0, 3)
        .split("")
        .reverse()
        .join("")
        .toLowerCase();
      person.nickName = pseudo.concat(nickFirst, nickLast);
    }
    return person;
  });
}

//Zadanie 2
function zeroDivision(number) {
  if (number === 0) {
    number = 1;
  }
  return number;
}

function addAge() {
  array = nickNameGenerator(people);
  return array.filter((person) => {
    if ("nickName" in person) {
      let sum = person.firstName.length + person.lastName.length;

      if (sum % 2 === 0) {
        person.age = sum;
        return person;
      } else {
        const letterCounter = Object.keys(person).reduce(
          (acc, key) => acc + key.length,
          0
        );
        person.age = Math.round(
          letterCounter / zeroDivision(array.indexOf(person))
        );
        return person;
      }
    }
  });
}

//Zadanie 3
function mostCommonLetter() {
  const array = addAge();
  return array.map((person) => {
    const letters = Object.values(person)
      .filter((item) => typeof item === "string")
      .join("")
      .toLowerCase()
      .split("")
      .reduce((letterCount, letter) => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
        return letterCount;
      }, {});

    let mostCommon = { letter: null, count: 0 };
    Object.keys(letters).forEach((letter) => {
      if (letters[letter] > mostCommon.count) {
        mostCommon = { letter, count: letters[letter] };
      } else if (
        letters[letter] === mostCommon.count &&
        letter < mostCommon.letter
      ) {
        mostCommon = { letter, count: letters[letter] };
      }
    });
    return { ...person, mostCommonLetter: mostCommon };
  });
}

console.log(mostCommonLetter());
