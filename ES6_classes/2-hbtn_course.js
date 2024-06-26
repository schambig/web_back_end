export default class HolbertonCourse {
  constructor(name, length, students) {
    // verifying types during object creation
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); }
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    // checks whether at least one element in the array meets the callback function condition
    if (Array.isArray(students) !== true || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be a array and its elements of string type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for `_name` attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // getter and setter for `_length` attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  // getter and setter for `_students` attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
