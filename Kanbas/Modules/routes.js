import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {

  //delete modules
  app.delete("/api/modules/:moduleId", async(req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.send(status);  
  });

  //update modules
  app.put("/api/modules/:moduleId", async(req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  });
}
