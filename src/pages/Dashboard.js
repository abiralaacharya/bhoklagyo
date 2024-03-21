import React, { useState } from "react";
import "./dashboard.css";
import Nav from "./Nav";

const Dashboard = () => {
  const [image, setImage] = useState("caption1.jpg");
  const [name, setName] = useState("XYZ");
  const [address, setAddress] = useState("Birtamode");
  const [email, setEmail] = useState("abiralacharya80@gmail.com");
  const [phone, setPhone] = useState("9824055745");
  const [bio, setBio] = useState("Best restaurant in Jhapa");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <Nav />
      <h1>Restaurant Profile</h1>

      {isEditing ? (
        <div className="dfirst">
          <div className="dimage">
            <img src={image} alt="Restaurant" className="resimg" />
            <input
              className="ebutton"
              type="file"
              id="image"
              onChange={handleImageChange}
            />
          </div>
          <div htmlFor="name" className="edit">
            Restaurant Name:
          </div>
          <input
            type="text"
            id="name"
            className="border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ textTransform: "none" }}
          />
          <div htmlFor="address" className="edit">
            Address :
          </div>
          <input
            type="text"
            id="address"
            className="border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ textTransform: "none" }}
          />
          <div htmlFor="email" className="edit">
            Email :
          </div>
          <input
            type="text"
            id="email"
            className="border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ textTransform: "none" }}
          />
          <div htmlFor="phone" className="edit">
            Phone :
          </div>
          <input
            type="number"
            id="email"
            className="border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ textTransform: "none" }}
          />
          <div htmlFor="bio" className="edit">
            Bio :
          </div>
          <input
            type="text"
            id="bio"
            className="border"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={{ textTransform: "none" }}
          />
          <button className="button1" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      ) : (
        <div className="dfirst">
          <div className="dimage">
            <img src={image} alt="Restaurant" className="resimg" />
          </div>
          <div className="details">
            Restaurant Name: {name}
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
          </div>
          <div className="details">Address: {address}</div>
          <div className="details">Email: {email}</div>
          <div className="details">Phone: {phone}</div>
          <div className="details">Bio: {bio}</div>
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
      <div className="dsecond">
        <table>
          <thead>
            <tr>
              <th>Sn.no</th>
              <th>Latest order</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item 1</td>
              <td>2</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item 2</td>
              <td>3</td>
              <td>$17</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Item 3</td>
              <td>2</td>
              <td>$15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
