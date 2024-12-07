import Database from "../Database/index.js";
import model from "./model.js";
import mongoose from "mongoose";

// Retrieve Courses from Database
export function findAllCourses() {
  // return model.find();
  const courses = model.find();
  console.log("Fetched courses from database:", courses); // 添加调试日志
  return courses;
}

// Insert Courses into Database
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

// Delete Courses from Database
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

//Update courses in the Database
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
}




export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}


