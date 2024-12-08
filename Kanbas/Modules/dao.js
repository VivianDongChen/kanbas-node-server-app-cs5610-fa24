import Database from "../Database/index.js";
import model from "./model.js";

// retrieve modules for a course
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}

//create modules for a course
export function createModule(module) {
  delete module._id
  return model.create(module);
}




export function deleteModule(moduleId) {
  const { modules } = Database;
  Database.modules = modules.filter((module) => module._id !== moduleId);
}

export function updateModule(moduleId, moduleUpdates) {
  const { modules } = Database;
  const module = modules.find((module) => module._id === moduleId);
  Object.assign(module, moduleUpdates);
  return module;
}
