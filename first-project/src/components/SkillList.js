import React from "react";

function SkillList({ skills }) {
  if (!skills.length) {
    return <p>No skills found.</p>;
  }

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} - <strong>{skill.user}</strong>
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
