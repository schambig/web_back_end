export default function cleanSet(set, startString) {
  if (
    startString === ''
    || typeof startString !== 'string'
  ) {
    return '';
  }

  // Convert the Set 'set' into an array using the spread operator and filter it based on conditions
  return [...set]
    // Filter the array to include only items that are strings and start with the specified
    // 'startString'
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    // For each filtered item, remove the 'startString' from the beginning using slice
    .map((item) => item.slice(startString.length))
    .join('-');
}

/* const cleanSet = (set, startString) => {
  const str = [];
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }
  // Iterate over each item in the 'set'
  for (const item of set) {
    // Check if 'item' exists and starts with the specified 'startString'
    if (item && item.startsWith(startString)) {
      // If condition is met, remove 'startString' from the beginning of 'item'
      // and push it to 'str' array
      str.push(item.slice(startString.length));
    }
  }

  // Join the elements of 'str' array with '-' separator and return as a single string
  return str.join('-');
};

export default cleanSet; */
