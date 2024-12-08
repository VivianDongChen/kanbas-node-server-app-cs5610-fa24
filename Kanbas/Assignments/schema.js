import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    score: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default assignmentSchema;