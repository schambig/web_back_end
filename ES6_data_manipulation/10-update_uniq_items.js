export default function updateUniqueItems(map) {
  // Check if the input 'map' is an instance of Map using instanceof
  if (map instanceof Map !== true) {
    throw Error('Cannot process');
  }

  // Iterate over each key-value pair in the Map using forEach method
  map.forEach((key, value) => {
    // For each key-value pair, check if the value is equal to 1
    if (value === 1) {
      map.set(key, 100);
    }
  });
}

/* const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each key-value pair in the Map using for...of loop with destructuring
  for (const [key, value] of map) {
    // For each key-value pair, check if the value is equal to 1
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
};

export default updateUniqueItems; */
