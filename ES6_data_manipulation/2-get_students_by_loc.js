export default function getStudentsByLocation(students, city) {
  // Use the filter method on the students array to create a new array containing only
  // the student objects whose location matches the provided city
  return students.filter((student) => student.location === city);
}

/* const getStudentsByLocation = (students, city) => {
  const studentsLocation = students.filter(
    (student) => student.location === city,
  );

  return studentsLocation;
};

export default getStudentsByLocation; */
