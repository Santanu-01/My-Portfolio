import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Social_Media from "../../Assets/Projects/Social_media.png";
import medical_chatbot from "../../Assets/Projects/Med_chatbot.png";
import food_delivery from "../../Assets/Projects/Foodie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social_Media}
              isBlog={false}
              title="Social_Media_App"
              description="A full-stack social media web application built with the MERN stack, enabling users to create posts, like, comment, and manage profiles with secure authentication and image uploads."
              ghLink="https://github.com/Santanu-01/Social_Media_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_delivery}
              isBlog={false}
              title="Foodie"
              description="Foodie is a full-stack food delivery web app inspired by Zomato and Swiggy, featuring user authentication, dynamic cart management, and responsive UI with real-time menu browsing."
              ghLink="https://github.com/Santanu-01/foodie-backend"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical_chatbot}
              isBlog={false}
              title="Medical_Catbot"
              description="A smart AI-powered medical chatbot that provides instant health-related information and guidance based on user queries."
              ghLink="https://github.com/Santanu-01/Medical-Chatbot-using-Llama2"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
