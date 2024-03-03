export default function hasValuesFromArray(set, array) {
/*
Using the array.every() method to iterate over each value in the array
and return true only if the provided callback returns true for every element
The callback checks whether the Set contains the current value from the array
*/
  return array.every((value) => set.has(value));
}
