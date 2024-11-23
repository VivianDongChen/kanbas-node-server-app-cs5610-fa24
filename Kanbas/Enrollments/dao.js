import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollmentUnenrolled = enrollments.find((enrollment) => enrollment.user === userId && enrollment.course === courseId);
    // 错误可能是 enrollmentUnenrolled 为 undefined，需处理这种情况
    if (!enrollmentUnenrolled) {
      console.error(`No enrollment found for user: ${userId} and course: ${courseId}`);
      return; // 或者抛出一个适当的错误
    }
  Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentUnenrolled._id);
}

export function findUserEnrollments(userId) {
  return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}