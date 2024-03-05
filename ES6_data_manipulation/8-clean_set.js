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
