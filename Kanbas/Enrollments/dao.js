import model from "./model.js";

// retrieve all courses that a user is enrolled in
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

//retrieve all enrolled users for a given course
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

// create an enrollment
export function enrollUserInCourse(userId, courseId) {
  return model.create({ user: userId, course: courseId });
}

// remove an enrollment
export function unenrollUserFromCourse(userId, courseId) {
  return model.deleteOne({ user: userId, course: courseId });
}
