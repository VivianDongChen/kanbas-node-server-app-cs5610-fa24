import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  const assignmentsOfCourse = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return assignmentsOfCourse;
}

  export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
  }