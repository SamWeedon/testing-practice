function capitalize(str) {
  // takes a string and returns it with the first character capitalized
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Not a valid string");
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("Not a string");
  } else {
    let reversedString = "";
    for (let i = str.length - 1; i > -1; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function caesarCipher(str, shift) {
  // Uses the Caesar Shift Cipher to encrypt a string given a shift factor

  const isUpperCase = function (char) {
    // checks if a character is upper-case or not
    if (char === char.toUpperCase()) return true;
    else return false;
  };

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // creates a new, shifted alphabet based on the shift factor
  const shiftedAlphabet = alphabet.map((letter, index) => {
    let newIndex = index + shift;
    if (newIndex > 25) {
      newIndex -= 26;
    }
    return alphabet[newIndex];
  });

  // iterates through the string and builds the encrypted string using the shifted alphabet
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let locationInAlphabet = alphabet.indexOf(str[i].toLowerCase());

    // if the character is in the alphabet, add its corresponding shifted character to the string.
    // Otherwise, just add whatever is in the original string. Preserve case.
    if (locationInAlphabet !== -1) {
      if (isUpperCase(str[i])) {
        newString += shiftedAlphabet[locationInAlphabet].toUpperCase();
      } else {
        newString += shiftedAlphabet[locationInAlphabet];
      }
    } else {
      newString += str[i];
    }
  }
  return newString;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };
