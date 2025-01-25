import React, { useState } from "react";

function Profile() {
  const [skills, setSkills] = useState(["React", "Node.js"]);

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  return (
    <div>
      <h2>Your Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <AddSkill onAddSkill={addSkill} />
    </div>
  );
}

function AddSkill({ onAddSkill }) {
  const [newSkill, setNewSkill] = useState("");

  const handleSubmit = () => {
    if (newSkill) {
      onAddSkill(newSkill);
      setNewSkill("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new skill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Skill</button>
    </div>
  );
}

export default Profile;
