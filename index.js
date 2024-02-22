// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(paramString) {
  let paramArray = paramString.split('&');
  let obj = {};

  for (let i=0; i < paramArray.length; i++) {
    let split = paramArray[i].split('=');
    let key = split[0];
    let value = split[1];
    obj[key] = value;
  }

  return obj;
}

function isLeapYear(year) {
  if (typeof year !== 'number') return 'Please enter a number';
  if (year < 0) return 'Year cannot be negative';
  const div4 = year % 4 == 0;
  const div400 = year % 400 == 0;
  const notDiv100 = year % 100 !== 0;
  return ((div4 && notDiv100) || (div400 && notDiv100));
}