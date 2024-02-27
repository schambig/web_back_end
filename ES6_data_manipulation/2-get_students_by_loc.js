export default function getStudentsByLocation(students, city) {
  // Use the filter method on the students array to create a new array containing only
  // the student objects whose location matches the provided city
  return students.filter((student) => student.location === city);
}
