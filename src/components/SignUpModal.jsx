import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Form from "react-bootstrap/Form";

function SignUpModal(props, { defaultValueTap }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [driverLicense, setDrive] = useState("");
  const [photo, setPhoto] = useState(
    "https://source.unsplash.com/150x100/?user"
  );
  const [key, setKey] = useState("Login");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleDrive = (e) => setDrive(e.target.value);
  const handleImage = (e) => setPhoto(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, email, password, photo, driverLicense };
    axios
      .post(`${API_URL}/api/auth/signup`, requestBody)
      .then(() => {
        setKey("Login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/api/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Tabs
          defaultActiveKey={key}
          activeKey={key}
          id="uncontrolled-tab-example"
          className=""
          onClick={() => (key == "Login" ? setKey("SignUp") : setKey("Login"))}
        >
          <Tab eventKey="Login" title="Login">
            <Form onSubmit={handleLoginSubmit}>
              <h5 className="text-2xl font-semibold text-gray-700 mb-6 sticky left-0">
                Log In
              </h5>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  id="email1"
                  value={email}
                  onChange={handleEmail}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  name="password"
                  id="password1"
                  value={password}
                  onChange={handlePassword}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-end">
                <button type="submit" className="btn">
                  Log In
                </button>
                <a onClick={props.onHide} className=" btn-close close-btn"></a>
              </Form.Group>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p className="message-form mb-0">Don&apos;t have an account yet?</p>
            <Link
              className="link-to message-form"
              onClick={() => {
                setKey("SignUp"); // Abre el modal de registro
              }}
            >
              Sign Up
            </Link>
          </Tab>
          <Tab eventKey="SignUp" title="SignUp">
            <Form onSubmit={handleSignupSubmit}>
              <h5 className="text-2xl font-semibold text-gray-700 mb-6 sticky left-0">
                Sign Up
              </h5>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  id="email2"
                  value={email}
                  onChange={handleEmail}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  name="password"
                  id="password2"
                  value={password}
                  onChange={handlePassword}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleName}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Driver License</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  name="driver"
                  id="driver"
                  value={driverLicense}
                  onChange={handleDrive}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <button
                  type="submit"
                  className="btn"
                >
                  Create Account
                </button>
                <a onClick={props.onHide} className=" btn-close close-btn"></a>
              </Form.Group>
            </Form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p className="message-form mb-0">Already have an account?</p>
            <Link
              className="link-to message-form"
              onClick={() => {
                setKey("Login");
              }}
            >
              Login
            </Link>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
