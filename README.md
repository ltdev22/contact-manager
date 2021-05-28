# mern-contact-manager
A web app for managing contacts developed on MERN stack, so react.js and context API on the frontend and node.js/express.js and mongodb on the backend running on docker.
Developed following the online course [React Front to Back](https://www.udemy.com/course/modern-react-front-to-back) on Udemy.

### Main commands
1. To run the app on docker `docker-compose up`
2. To run commands within the containers `docker-compose exec server sh`, `docker-compose exec client sh`

---
### History Steps
1. Created a GitHub repository.
2. Run in the terminal `docker run -v ${PWD}:/app ltweb22/react-cli create-react-app .` to create a fresh react app.
3. Run `docker run -v ${PWD}:/app ltweb22/react-cli npm install`.
4. Dockerize the app.