import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 100000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login to continue.");
  }

  const userData = user ? (
    <div>
      <Image src="https://i.imgur.com/3s7oHOV.jpg" roundedCircle />

      <h1>Your Profile</h1>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>ID: {id}</p>
      <h2>Games you've favorited: </h2>
    </div>
  ) : (
    <h2>Loading...</h2>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return <div className="text-center pt-4">{user ? userData : errorDiv()}</div>;
};

export default Profile;
