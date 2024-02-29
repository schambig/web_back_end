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

/* const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);
  // Checking if the specified position is greater than the length of the buffer minus 1
  // Since array indexes start from 0, the last index is length - 1
  if (position > length - 1) {
    // If the position is greater than the last index
    throw new Error('Position outside range');
  }
  // Setting the value at the specified position in the DataView
  // Unlike setUint8(), setInt8() sets a signed 8-bit integer,
  // allowing a wider range of values including negatives
  data.setInt8(position, value);
  return data;
};

export default createInt8TypedArray; */
