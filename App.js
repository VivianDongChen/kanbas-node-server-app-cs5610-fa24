// const express = require("express");
import express from "express";
import HelloRoutes from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParamaters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";


const app = express();

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.NETLIFY_URL || "http://localhost:3001",
//   })
// );

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      console.log("Request Origin:", origin); // 检查请求来源
      if (
        !origin ||
        origin.includes(".netlify.app") ||
        origin === "http://localhost:3001"
      ) {
        callback(null, true);
      } else {
        console.error("CORS Error: Not allowed by CORS");
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json());

HelloRoutes(app);
Lab5(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
