//setting up a set of RESTful API routes for managing user-related operations
import * as dao from "./Dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

// let currentUser = null; //currentUser is a global variable used to store the currently authenticated user's data.

export default function UserRoutes(app) {
  const createUser = (req, res) => {};
  app.post("/api/users", createUser);

  const deleteUser = (req, res) => {};
  app.delete("/api/users/:userId", deleteUser);

  const findAllUsers = (req, res) => {};
  app.get("/api/users", findAllUsers);

  const findUserById = (req, res) => {};
  app.get("/api/users/:userId", findUserById);

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser; // 更新会话中的用户信息
    res.json(currentUser);
  };
  app.put("/api/users/:userId", updateUser);

  const signup = (req, res) => {
    const user = dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already in use" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser; //将用户存储到会话中
    res.json(currentUser);
  };
  app.post("/api/users/signup", signup);

  const signin = (req, res) => {
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser; // 将用户存储到会话中
      console.log("Session after signin:", req.session); // 检查session
      res.json(currentUser);
      return;
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };
  app.post("/api/users/signin", signin);

  const signout = (req, res) => {
    req.session.destroy(); // 销毁当前会话
    res.sendStatus(200);
  };
  app.post("/api/users/signout", signout);

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"]; // 从会话中获取当前用户
    if (!currentUser) {
      res.sendStatus(401); // 如果没有用户会话，返回 HTTP 401
      return;
    }
    res.json(currentUser);
  };
  app.post("/api/users/profile", profile);

  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);

  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };
  app.post("/api/users/current/courses", createCourse);
}
