import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Stack } from "react-bootstrap";
import Skill from "./Skill";

const App = () => {
  const dataSkills = [
    {
      language: "React",
      level: "advanced",
      color: "#15dea5",
    },
    {
      language: "React-Redux",
      level: "intermediate",
      color: "#15dea5",
    },
    {
      language: "React-Native",
      level: "intermediate",
      color: "#15dea5",
    },
    {
      language: "Redux-Toolkit",
      level: "intermediate",
      color: "#15dea5",
    },
    {
      language: "React-Rtk-Query",
      level: "intermediate",
      color: "#15dea5",
    },
    {
      language: "HTML+CSS+JS",
      level: "advanced",
      color: "yellow",
    },

    {
      language: "Git & GitHub",
      level: "intermediate",
      color: "#75FF33",
    },
    {
      language: "Node+Mongo+Express",
      level: "advanced",
      color: "#33CFFF",
    },
    {
      language: "VueJs",
      level: "beginner",
      color: "#D633FF",
    },
    {
      language: "SQL",
      level: "intermediate",
      color: "#FF33C1",
    },
  ];

  const skills = dataSkills.map((skill, index) => (
    <Skill key={index} skill={skill} />
  ));

  return (
    <div className="vh-100 pt-3" style={{ background: "#f7f7f7" }}>
      <Card
        border="black"
        className="mx-auto p-1 border-4 "
        style={{ width: "450px" }}
      >
        <Card.Img variant="top" src="souley.jpg" />
        <Card.Body>
          <Card.Title as="h1">Développeur REACT</Card.Title>
          <Card.Text>
            Je m'appelle <em>Souleymane DRAME</em> et je suis passionné par la
            création d'applications Web conviviales et réactives en utilisant
            les dernières technologies.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="pt-2">
          <Stack gap={2} direction="horizontal" className="d-flex flex-wrap">
            {skills}
          </Stack>
          <hr />
          <span className="p-2 text-bg-dark ">
            Contactez-moi par mail au sdrame81@gmail.com
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default App;
