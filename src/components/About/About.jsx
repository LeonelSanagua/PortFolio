import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <div id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="order-2 order-md-1">
            <div id="title">
              Hola, Soy
              <br /> Leonel Sanagua
            </div>
            <div id="textLoop">
              Y soy{" "}
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Backend Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div id="subTitle">
              ¡Bienvenido/a a mi mundo digital! Soy un apasionado del desarrollo
              web y las tecnologías digitales. Me caracterizo por mi motivación
              y adaptabilidad ante cualquier desafío, siempre buscando aprender
              y trabajar de manera colaborativa. Mi creatividad y dedicación se
              reflejan en cada proyecto que emprendo. Con grandes ideas y un
              compromiso firme con la calidad, estoy emocionado/a por seguir
              creciendo y contribuyendo al apasionante mundo del desarrollo.
              ¡Gracias por visitar mi espacio! ¡Acompáñame en este viaje hacia
              nuevas fronteras del desarrollo tecnológico!
            </div>
            <div id="SocialMediaIcons" className="mb-5">
              <a
                id="SocialMediaIcon"
                href="https://www.linkedin.com/in/shafa-shabudeen/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                id="SocialMediaIcon"
                href="https://github.com/shafa-shabudeen"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a id="SocialMediaIcon" href="mailto:shafashabbu@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-md-end order-1 order-md-2 mt-md-0 mt-3"
          >
            <div id="heroContainer">
              <img src="./Profile.jpeg" alt="hero image" id="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
