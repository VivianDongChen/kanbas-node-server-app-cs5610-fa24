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

//   export function updateModule(moduleId, moduleUpdates) {
//     const { modules } = Database;
//     const module = modules.find((module) => module._id === moduleId);
//     Object.assign(module, moduleUpdates);
//     return module;
//   }

  export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }