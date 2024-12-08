import model from "./model.js";

// retrieve all courses that a user is enrolled in
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(userId, courseId) {
  return model.create({ user, course });
}

export function unenrollUserInCourse(userId, courseId) {
  return model.deleteOne({ user, course });
}

// export function findUserEnrollments(userId) {
//   return Database.enrollments.filter((enrollment) => enrollment.user === userId);
// }
