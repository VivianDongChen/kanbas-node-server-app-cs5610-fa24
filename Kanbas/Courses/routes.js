import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import mongoose from "mongoose";

export default function CourseRoutes(app) {
  // Retrieve Courses from database
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    console.log("Courses from database:", courses); // 添加调试日志
    res.send(courses);
  });

  // Insert Courses into database
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });

  //delete courses from database
  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  });















  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    dao.updateCourse(courseId, courseUpdates);
    res.sendStatus(204);
  });

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });
}
