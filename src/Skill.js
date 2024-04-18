import React from "react";
import { Button } from "react-bootstrap";

const Skill = ({ skill }) => {
  return (
    <Button
      className="border-0 text-dark fw-bold "
      style={{ background: skill.color }}
    >
      <span> {skill.language} </span>
      <span>
        {skill.level === "advanced" && "💪"}
        {skill.level === "intermediate" && "👍"}
        {skill.level === "beginner" && "😦"}
      </span>
    </Button>
  );
};

export default Skill;
