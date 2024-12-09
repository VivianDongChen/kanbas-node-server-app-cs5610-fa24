The Kanbas project is an Online Learning Management System (OLMS) inspired by platforms like Canvas. It integrates front-end, back-end, and database technologies to create a full-stack web application for managing courses, users, assignments, and modules. The system is designed to support dual environments, allowing it to run both locally and on the cloud.

1. Features:

(1) User Authentication and Session Management: Includes secure user sessions managed through Express and MongoDB.

(2) Full CRUD Capabilities: Allows the management of courses, users, assignments, and modules via RESTful APIs.

(3) Responsive Design: Built with Bootstrap for optimized user experience.

(4) Local and Cloud Deployment: Developers can run the application locally for testing or deploy it to the cloud for real-world usage.

(5) Scalable Database Integration: MongoDB Atlas ensures robust performance and scalability for cloud deployments.

2. Technologies Used:

(1) Front-End:

React.js: Provides a dynamic single-page interface. React Router is used for navigation between views such as course lists, user profiles, and assignments.

CSS/Bootstrap: Ensures a responsive and visually appealing design across different devices.

(2) State Management:

React Hooks (useState, useEffect): Handles component-level state.

Redux: Manages global application state for seamless data sharing across components.

(3) Back-End:

Node.js and Express.js: Implements the server-side application, exposing RESTful APIs for communication with the front end.

Environment-Specific Configurations: Supports both local and cloud back-end environments using environment variables.

(4) Database:

Local MongoDB: Provides a NoSQL database for development and testing on local machines.

MongoDB Atlas (Cloud Deployment): A managed cloud database used for production, offering scalability, reliability, and ease of management.

(5) Deployment:

Netlify: Hosts the front-end for public access with automatic deployment and CDN support.

Render: Hosts the back-end server for seamless integration with MongoDB Atlas.

3. Dual Environment Setup

The system is configured to work in two distinct environments:

(1) Local Environment:

Runs a local Node.js server connected to a locally hosted MongoDB instance.

Configuration:
env
Copy code
MONGO_CONNECTION_STRING=mongodb://127.0.0.1:27017/kanbas
NODE_ENV=development
PORT=4000

(2) Cloud Environment:

Runs on Render with a MongoDB Atlas instance for cloud-based data storage.

Configuration:
env
Copy code
MONGO_CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/kanbas?retryWrites=true&w=majority
NODE_ENV=production
PORT=4000

The environment is dynamically selected using the NODE_ENV variable, allowing seamless switching between local development and production deployments.

This dual-environment setup provides flexibility for developers to test and debug locally while leveraging cloud infrastructure for scalability and reliability in production. 









