import Database from "../Database/index.js";
import model from "./model.js";

//retrieve modules for a course
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}

//create modules for a course
export function createModule(module) {
  delete module._id
  return model.create(module);
}

//delete modules
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}

// update modules
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({_id: moduleId}, moduleUpdates);
}
