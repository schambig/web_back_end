export default function getStudentIdsSum(students) {
  // Use the reduce() method to iterate over each student in the students array
  // Accumulate the sum of student IDs starting from an initial value of 0
  return students.reduce((acumulator, student) => acumulator + student.id, 0);
}

/* const getStudentIdsSum = (students) => {
  // Use the map() method to create a new array containing only the IDs of the students
  const all = students
    .map((student) => student.id)
    // Use the reduce() method to calculate the sum of all student IDs
    .reduce((acumulator, currentValue) => acumulator + currentValue);

  // Return the total sum of student IDs
  return all;
};

export default getStudentIdsSum; */
