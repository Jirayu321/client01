import * as React from "react";
import logo from "../../logo.svg";
import {
  Navbar,
  Container,
  // Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import {
  overviewEN,
  // overviewTH,
  //  overviewDE
} from "../Data/DataLanguage";
// import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import manu from "../../Images/menu01.svg";
import styles from "./Navbar.module.css";
import "./Navbar.css";

const navbarHome = (props) => {
  // const { innerWidth: width } = window;
  const you = props?.languages;
  const pathname = window.location.pathname;
  const navigate = props?.navigate;

  const promotion = (x) => {
    if (x === 1) {
      window.scrollTo(0, 0);
    } else {
      navigate("/About_us");
    }
  };

  const gologin = (x) => {
    navigate("/Login", { state: { languages: `${x}`, accept: true } });
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}`, accept: true } });
  };

  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/" onClick={() => goHome(you)}>
          <div style={{ left: "40%", position: "relative" }}>
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle>
          <img src={manu} alt="toggle icon" />
        </Navbar.Toggle>
        {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} /> */}

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <>
              <div className={styles.dd}>
                {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                  <div
                    className={styles.NavLi}
                    onClick={() =>
                      navigate("/", {
                        state: { languages: `${you}`, accept: true },
                      })
                    }
                  >
                    <p className={styles.textNavA}>
                      {overviewEN[0].label}
                      {/* home */}
                    </p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    onClick={() =>
                      navigate("/", {
                        state: { languages: `${you}`, accept: true },
                      })
                    }
                  >
                    <p className={styles.textNavO}>
                      {overviewEN[0].label}
                      {/* home */}
                    </p>
                  </div>
                )}

                {pathname === "/About_us" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p className={styles.textNavA}>About us</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p className={styles.textNavO}>About us</p>
                  </div>
                )}
                {pathname === "/Services_general" ||
                pathname === "/Services_official" ? (
                  <NavDropdown
                    className={styles.NavLi}
                    style={{
                      marginLeft: 10,
                      color: "#808080",
                      fontSize: 20,
                      float: "left",
                      padding: 0,
                    }}
                    title={
                      <div className={styles.icon_accounts}>
                        <p className={styles.textNavA}>Services</p>
                        <AiFillCaretDown className={styles.AiFillCaretDown1} />
                      </div>
                    }
                  >
                    <NavDropdown.Item
                      onClick={() =>
                        navigate("/Services_general", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      General Document
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() =>
                        navigate("/Services_official", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      Official Document
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown
                    className={styles.NavLi}
                    style={{
                      color: "#808080",
                      fontSize: 20,
                      float: "left",
                      padding: 0,
                    }}
                    title={
                      <div className={styles.icon_accounts}>
                        <p className={styles.textNavO}>Services</p>
                        <AiFillCaretDown className={styles.AiFillCaretDown2} />
                      </div>
                    }
                  >
                    <NavDropdown.Item
                      onClick={() =>
                        navigate("/Services_general", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      General Document
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() =>
                        navigate("/Services_official", {
                          state: { languages: `${you}`, accept: true },
                        })
                      }
                    >
                      Official Document
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                {pathname === "/Price" ? (
                  <div
                    className={styles.NavLi}
                    onClick={() =>
                      navigate("/Price", {
                        state: { languages: `${you}`, accept: true },
                      })
                    }
                  >
                    <p className={styles.textNavA}>Price</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    onClick={() =>
                      navigate("/Price", {
                        state: { languages: `${you}`, accept: true },
                      })
                    }
                  >
                    <p className={styles.textNavO}>Price</p>
                  </div>
                )}

                {/* {pathname === "/FAQs" ? (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs" {
                      state: { languages: `${you}`, accept: true },
                    })}
                  >
                    <p className={styles.textNavA}>FAQs</p>
                  </div>
                ) : (
                  <div
                    className={styles.NavLi}
                    style={{ color: "black" }}
                    onClick={() => navigate("/FAQs")}
                  >
                    <p className={styles.textNavO}>FAQs</p>
                  </div>
                )} */}
                <div className={styles.dd2}>
                  <button
                    className={styles.buttonLogin}
                    onClick={() => gologin("English")}
                  >
                    <p className={styles.textP}>{overviewEN[4].label}</p>
                  </button>
                </div>
              </div>
            </>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default navbarHome;
