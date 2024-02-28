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
