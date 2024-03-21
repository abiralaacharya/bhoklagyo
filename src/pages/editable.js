import React, { useState } from "react";

const Dashboard= () => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save changes, like sending data to backend
  };

  return (
    <div>
      <h1>User Information</h1>
      {isEditing ? (
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <button onClick={handleSave}>Save Changes</button>
        </div>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
