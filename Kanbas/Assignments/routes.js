import * as dao from "./dao.js";
// import * as modulesDao from "../Modules/dao.js";

export default function AssignmentRoutes(app) {

// export default function CourseRoutes(app) {
//   app.get("/api/courses", (req, res) => {
//     const courses = dao.findAllCourses();
//     res.send(courses);
//   });

//   app.delete("/api/courses/:courseId", (req, res) => {
//     const { courseId } = req.params;
//     dao.deleteCourse(courseId);
//     res.sendStatus(204);
//   });

//   app.put("/api/courses/:courseId", (req, res) => {
//     const { courseId } = req.params;
//     const courseUpdates = req.body;
//     dao.updateCourse(courseId, courseUpdates);
//     res.sendStatus(204);
//   });

  app.get("/api/assignments/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

//   app.post("/api/courses/:courseId/modules", (req, res) => {
//     const { courseId } = req.params;
//     const module = {
//       ...req.body,
//       course: courseId,
//     };
//     const newModule = modulesDao.createModule(module);
//     res.send(newModule);
//   });

//   app.post("/api/assignments/:courseId/assignments", (req, res) => {
//     const { courseId } = req.params;
//     const assignment = {
//       ...req.body,
//       assignment: assignmentId,
//     };
//     const newAssignment = dao.createAssignment(assignment);
//     res.send(newAssignment);
//   });

}