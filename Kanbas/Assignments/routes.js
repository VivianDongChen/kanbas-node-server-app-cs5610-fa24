import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

  app.get("/api/assignments/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.post("/api/assignments/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = dao.createAssignment(assignment);
    res.send(newAssignment);
  });

//   app.put("/api/modules/:moduleId", (req, res) => {
//     const { moduleId } = req.params;
//     const moduleUpdates = req.body;
//     modulesDao.updateModule(moduleId, moduleUpdates);
//     res.sendStatus(204);
//   });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    dao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  });

}