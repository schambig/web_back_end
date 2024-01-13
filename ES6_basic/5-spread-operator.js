export default function concatArrays(array1, array2, string) {
  // Next conditionals are optional
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Both parameters array1 and array2 must be arrays.');
  }

  if (typeof string !== 'string') {
    throw new Error('The third parameter string must be a string.');
  }
  return [...array1, ...array2, ...string];
}
