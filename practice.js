function capitalize(str) {
  // takes a string and returns it with the first character capitalized
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Not a valid string");
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

module.exports = { capitalize };
