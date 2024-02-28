export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the students array to get only the students located in the specified city
  // Then, map over the filtered students to update their grades based on the provided newGrades
  return students.filter((student) => student.location === city)
    .map((student) => {
      // Initialize a variable to hold the new grade, defaulting to 'N/A'
      let newGrade = 'N/A';
      // Iterate over the newGrades array to find the matching grade for the current student
      newGrades.forEach((grade) => {
        // If the student's ID matches the studentID in newGrades, update the newGrade variable
        if (grade.studentId === student.id) {
          newGrade = grade.grade;
        }
      });
      // Return a new object representing the student with the updated grade, use spread operator
      // console.log(student);
      return { ...student, grade: newGrade };
    });
}

/* const updateStudentGradeByCity = (students, city, newGrades) => {
  // Check if the inputs are arrays, if not, return an empty array
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  // Filter the students array to get only the students located in the specified city
  // Then, map over the filtered students to update their grades based on the provided newGrades
  const studentByCity = students
    .filter((student) => student.location === city)
    .map((student) => {
      // Filter the newGrades array to get the grades of the current student
      const grades = newGrades.filter((note) => student.id === note.studentId);
      // Initialize a variable to hold the grade, defaulting to 'N/A'
      let grade = 'N/A';

      // If there is a grade found for the student, update the grade variable
      if (grades[0]) {
        grade = grades[0].grade;
      }

      // Return a new object representing the student with the updated grade
      return { ...student, grade };
    });

  return studentByCity;
};

export default updateStudentGradeByCity; */
