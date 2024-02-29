export default function createInt8TypedArray(length, position, value) {
  // Create new ArrayBuffer with length value
  const buffer = new ArrayBuffer(length);
  // Creating new DataView to handle the buffer
  const data = new DataView(buffer);
  // Checking the specified position is within the bounds of the array
  if (position < length) {
    // If the position is within bounds, set the value at that position as an unsigned 8-bit int
    // This will change value to hexadecimal representation
    data.setUint8(position, value);
  } else {
    // If the position is outside the bounds, throwing an error
    throw Error('Position outside range');
  }
  // Returning the created DataView
  return data;
}
