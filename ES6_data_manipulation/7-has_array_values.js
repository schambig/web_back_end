export default function hasValuesFromArray(set, array) {
/*
Using the array.every() method to iterate over each value in the array
and return true only if the provided callback returns true for every element
The callback checks whether the Set contains the current value from the array
*/
  return array.every((value) => set.has(value));
}

/* const hasValuesFromArray = (set, array) => {
  // Iterating over each item in the array using a for...of loop
  for (const item of array) {
    // Checking if the Set does not contain the current item
    if (!set.has(item)) {
      // If the Set does not contain the current item, returning false immediately
      // as it means not all values in the array are present in the Set
      return false;
    }
  }
  // If the loop completes without encountering any missing values, returning true
  // indicating that all values in the array are present in the Set
  return true;
};

export default hasValuesFromArray; */
