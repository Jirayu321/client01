import * as React from "react";
import logo from "../../Images/logo2.svg";
import GlobeLocation from "../../Images/GlobeLocation.svg";
import Earth from "../../Images//Earth.svg";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";

// import { logoutUser } from "../../slices/auth";
import styles from "./navbarHome2.module.css";

// import { Avatar } from "@mui/material";

const navbarHome2 = (props) => {
  const navigate = props?.navigate;
  const you = props?.languages;
  // const dispatch = props?.dispatch;
  const value = props?.value;

  const goHome = (x) => {
    const pathname = window.location.pathname;
    if (pathname === "/In") {
      navigate("/In", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Matching") {
      navigate("/Matching", {
        state: { languages: `${x}`, value: `${value}` },
      });
    } else if (pathname === "/Order") {
      navigate("/Order", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Chat") {
      navigate("/Chat", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Chats") {
      navigate("/Chats", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Dashboard_freelance") {
      navigate("/Dashboard_freelance", {
        state: { languages: `${x}`, value: `${value}` },
      });
    } else {
      navigate("/Notification", {
        state: { languages: `${x}`, value: `${value}` },
      });
    }
  };

  // const Logout = () => {
  //   dispatch(logoutUser());
  //   window.location.reload();
  // };

  return (
    <Navbar
      expand="lg"
      className={styles?.navbardb2}
      style={{
        boxShadow: "none",
        background: "transparent",
        zIndex: "unset",
        position: "unset",
        boxShadow: "none",
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <div className={styles.box4navbarHome2}>
              <img src={Earth} alt="Earth" style={{ float: "left" }} />
              {you === "English" ? (
                <NavDropdown
                  title="EN"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : you === "German" ? (
                <NavDropdown
                  title="DE"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : you === "Thai" ? (
                <NavDropdown
                  title="TH"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="EN"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>

            <div className={styles.box4navbarHome2}>
              <img
                src={GlobeLocation}
                alt="LoGlobeLocationgo"
                style={{ float: "left" }}
              />
              <p
                style={{
                  marginLeft: 10,
                  color: "#808080",
                  fontSize: 13,
                  float: "left",
                }}
              >
                Thailand
              </p>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarHome2;
