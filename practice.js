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

module.exports = { capitalize, reverseString };
