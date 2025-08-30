const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return `La capital de ${country} no está en la lista.`;
  }
}

// Ejemplos de uso:
console.log(getCapital('Spain'));   // Madrid
console.log(getCapital('Brasil'));  // La capital de Brasil no está 
