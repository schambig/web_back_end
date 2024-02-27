export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

/* const getStudentsByLocation = (students, city) => {
  const studentsLocation = students.filter(
    (student) => student.location === city,
  );

  return studentsLocation;
};

export default getStudentsByLocation; */
