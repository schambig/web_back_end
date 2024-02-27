export default function getListStudentIds(students) {
  if (!Array.isArray(students)) { // If it's not an array, return an empty array
    return [];
  }
  // If the argument is an array, use the map method to create a new array containing
  // only the ids of each student object
  return students.map((student) => student.id);
}

/* const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }
  const ids = ids.map((item) => item.id);

  return ids;
};

export default getListStudentIds; */
