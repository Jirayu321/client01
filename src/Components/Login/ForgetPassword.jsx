import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";

import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Login.module.css";

const ForgetPassword = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;
  const [email, setEmail] = React.useState("");
  let Type = location?.state?.type;

  console.log("test02:", Type);

  const send_Mail = (e) => {
    e.preventDefault();
    console.log("form.current:", email);
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      emailjs
        .sendForm(
          "service_u5757dr",
          "template_xxze5ke",
          e.target,
          "Npnv-PIsN0-rxduac"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      navigate("/CreateNewPassword", {
        state: {
          email: `${email}`,
          type: `${Type}`,
        },
      });
    }
  };

  return (
    <>
      <header className={styles?.header}>
        {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" accept={false} />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" accept={true} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" accept={true} />
        ) : (
          <Navbars navigate={navigate} languages="English" accept={true} />
        )}
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "relative",
            left: 83,
            // top: 130,
            // width: "50%",
            // height: "100vh",
          }}
        >
          <div
            style={{
              // position: "fixed",

              width: 500,
              background: " #FFFFFF",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div style={{ padding: 20 }}>
              <h2 className={styles.textLogin}>Forgot Password</h2>
              <p className={styles.textLogin2}>
                Enter your email to receive a link to change your password.
              </p>
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
                  E-mail
                </p>
                <form ref={form} onSubmit={send_Mail}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      marginLeft: 0,
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className={styles.button} type="submit">
                    Send
                  </button>
                </form>
              </div>
              <div
                style={{ position: "relative", right: "40px", top: "285px" }}
              >
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>Privacy policy</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>
                    Copyrights Give Network 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles?.img_ForgetPassword}>
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
export default ForgetPassword;
