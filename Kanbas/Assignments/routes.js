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

}