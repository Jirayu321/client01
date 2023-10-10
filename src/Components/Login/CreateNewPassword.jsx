import * as React from "react";

import Navbars from "../Navbar/navbarLogin";
import { Formik } from "formik";

import { useNavigate, useLocation } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";

import IconButton from "@mui/material/IconButton";
import styles from "./Login.module.css";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [valuestype, setValuestype] = React.useState(false);
  const [valuestype2, setValuestype2] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  let Email = location?.state?.email;
  let Type = location?.state?.type;
  console.log("test01:", Email, Type);

  

  const handleClickShowPassword = (i) => {
    // console.log("i:", i, type, valuestype,valuestype2);
    if (i === 1) {
      if (type === "password") {
        setValuestype(!valuestype);
        setType("text");
      } else if (type === "text") {
        setValuestype(!valuestype);
        setType("password");
      }
    } else if (i === 2) {
      if (type2 === "password") {
        setValuestype2(!valuestype2);
        setType2("text");
      } else if (type2 === "text") {
        setValuestype2(!valuestype2);
        setType2("password");
      }
    }
  };

  const Save = () => {
    if (saved === false) {
      setSaved(!saved);
    } else {
      // console.log(saved);
      navigate("/Login", {
        state: {
          email: `${Email}`,
          password: `${password}`,
          type: `${Type}`,
        },
      });
    }
  };

  return (
    <>
      <header className={styles?.header}>
        {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" />
        ) : (
          <Navbars navigate={navigate} languages="English" />
        )}
      </header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            position: "relative",
            width: "50%",
            left: 83,
            // height: "100vh",
          }}
        >
          <div
            style={{
              // position: "fixed",
              // top: 130,
              // left: 100,
              width: 500,
              background: " #FFFFFF",
              // boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: 20,
              padding: 30,
            }}
          >
            {saved === false ? (
              <div style={{ padding: 20 }}>
                <h2 className={styles.textLogin}>Create New Password</h2>
                <p className={styles.textLogin2}>
                  Please create a new password.
                </p>
                <Formik
                  initialValues={{
                    password: "",
                    confirmPassword: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.password) {
                      errors.password = "Please enter your password.";
                    }

                    if (!values.confirmPassword) {
                      errors.confirmPassword =
                        "Please enter your confirmPassword";
                    }
                    if (values.confirmPassword !== values.password) {
                      errors.confirmPassword = "Invalid  confirm Password";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (values) {
                      setPassword(values.password);
                      setConfirm(values.confirmPassword);
                      setSaved(true);
                    } else {
                      console.log("err:", "มันไม่ได้");
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div style={{ textAlign: "left" }}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 20,
                            color: "#242424",
                            textAlign: "left",
                            fontFamily: "DBHeavent",
                          }}
                        >
                          Password
                        </p>
                        {errors.password &&
                        touched.password &&
                        errors.password ? (
                          <>
                            <div
                              style={{
                                position: "relative",
                                margin: "10px 0px 10px 0px",
                              }}
                            >
                              <input
                                type={type}
                                name="password"
                                autoComplete="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password"
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid  red",
                                  borderRadius: 20,
                                  borderColor: "#F1F1F1",
                                  width: "100%",
                                  height: 40,
                                  padding: "5px 12px", // Adjusted padding for a better look
                                  fontSize: 13,
                                  boxSizing: "border-box", // Include padding in the width calculation
                                }}
                              />
                              <IconButton
                                onClick={() => handleClickShowPassword(1)}
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translateY(-50%)", // Center vertically
                                  right: 12, // Adjust the right position
                                }}
                              >
                                {valuestype ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </div>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "red",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                position: "relative",
                                margin: "10px 0px 10px 0px",
                              }}
                            >
                              <input
                                type={type}
                                name="password"
                                autoComplete="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password"
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid red",
                                  borderRadius: 20,
                                  borderColor: "#F1F1F1",
                                  width: "100%",
                                  height: 40,
                                  padding: "5px 12px", // Adjusted padding for a better look
                                  fontSize: 13,
                                  boxSizing: "border-box", // Include padding in the width calculation
                                }}
                              />
                              <IconButton
                                onClick={() => handleClickShowPassword(1)}
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translateY(-50%)", // Center vertically
                                  right: 12, // Adjust the right position
                                }}
                              >
                                {valuestype ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </div>
                          </>
                        )}
                      </div>

                      <div style={{ textAlign: "left" }}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 20,
                            color: "#242424",
                            textAlign: "left",
                            fontFamily: "DBHeavent",
                          }}
                        >
                          ConfirmPassword
                        </p>
                        {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword ? (
                          <>
                            <div
                              style={{
                                position: "relative",
                                margin: "10px 0px 10px 0px",
                              }}
                            >
                              <input
                                type={type2}
                                name="confirmPassword"
                                autoComplete="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                placeholder="confirm Password"
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid red",
                                  borderRadius: 20,
                                  borderColor: "#F1F1F1",
                                  width: "100%",
                                  height: 40,
                                  padding: "5px 12px", // Adjusted padding for a better look
                                  fontSize: 13,
                                  boxSizing: "border-box", // Include padding in the width calculation
                                }}
                              />
                              <IconButton
                                onClick={() => handleClickShowPassword(2)}
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translateY(-50%)", // Center vertically
                                  right: 12, // Adjust the right position
                                }}
                              >
                                {valuestype2 ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </div>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "red",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              {errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword}
                            </p>
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                position: "relative",
                                margin: "10px 0px 10px 0px",
                              }}
                            >
                              <input
                                type={type2}
                                name="confirmPassword"
                                autoComplete="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                placeholder="confirm Password"
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  borderColor: "#F1F1F1",
                                  width: "100%",
                                  height: 40,
                                  padding: "5px 12px", // Adjusted padding for a better look
                                  fontSize: 13,
                                  boxSizing: "border-box", // Include padding in the width calculation
                                }}
                              />
                              <IconButton
                                onClick={() => handleClickShowPassword(2)}
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  transform: "translateY(-50%)", // Center vertically
                                  right: 12, // Adjust the right position
                                }}
                              >
                                {valuestype2 ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </div>
                          </>
                        )}
                      </div>

                      <button
                        className={styles.button}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <p>Save</p>
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            ) : (
              <div style={{ padding: 20 }}>
                <h2 className={styles.textLogin}>Successfully</h2>
                <p className={styles.textLogin2}>
                  Changed password successfully, please log in again.
                </p>

                <button className={styles.button} onClick={Save}>
                  <p>Login</p>
                </button>
              </div>
            )}
          </div>

          <div style={{ top: "140px", position: "relative", right: "45%" }}>
            <div style={{ float: "right" }}>
              <p className={styles.textPolicy}>Privacy policy</p>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <p className={styles.textPolicy}>Copyrights Give Network 2021.</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles?.img_CreateNewPassword}>
            <div>
              <p className={styles.textimg1}>Translation Hero</p>
              <p className={styles.textimg2}>
                ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน เครื่องมือที่น่าสนใจ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateNewPassword;
