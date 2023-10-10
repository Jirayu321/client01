import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./About_us.module.css";

const About_us = () => {
  const { innerWidth: width } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;
  const goSignup = () => {
    navigate("/Signup");
  };

  return (
    <>
      {width > 768 ? (
        <>
          <header className={styles.App_header}>
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

          <>
            <div className={styles.fram1C}>
              <div style={{ height: "1vw" }}>
                <div className={styles.Boxfram1C}>
                  <div>
                    <p className={styles.H_text01}>About us</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p>
                      Translation hero comes with a functions and capabilities
                      to support the work and needs of all users.
                    </p>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      top: 40,
                    }}
                  >
                    <button
                      className={styles.fram1_button2}
                      onClick={() => goSignup()}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  {width >= 1024 ? (
                    <div className={styles.Boxfram3_3}>
                      <div>
                        <p className={styles.HBoxdetaile3_1}>machine based </p>
                        <p className={styles.HBoxdetaile3_1}>translator</p>
                        <p className={styles.HBoxdetaile_general}>
                          AI support translator, a helper that makes the work of
                          translators even easier. Correct grammar and reduce
                          the time, the work process is faster.
                        </p>
                      </div>
                      <div className={styles.Imggeneral5} />
                    </div>
                  ) : (
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral5} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          machine based translator
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          AI support translator, a helper that makes the work of
                          translators even easier. Correct grammar and reduce
                          the time, the work process is faster.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {width >= 1024 ? (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        1 stop service for
                      </p>
                      <p className={styles.HBoxdetaile3_1}>translator</p>
                      <p className={styles.HBoxdetaile_general}>
                        AI support translator, a helper that makes the work of
                        translators even easier. Correct grammar and reduce the
                        time, the work process is faster.
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />
                  </div>

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.Imggeneral2} />
                    <div style={{ marginLeft: 100 }}>
                      <p className={styles.HBoxdetaile3_1}>Recommend more,</p>
                      <p className={styles.HBoxdetaile3_1}>gain more</p>
                      <p className={styles.HBoxdetaile_general}>
                        The more you recommend, the more The more customers
                        recommend our services, the more The more you get more
                        privileges.
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_3_4}>
                    <div>
                      <p className={styles.HBoxdetaile3_1}>Personal Tool </p>
                      <p className={styles.HBoxdetaile3_1}>Assistant</p>
                      <p className={styles.HBoxdetaile_general}>
                        Translation tool for translators We have tools that make
                        the work of translators easier and more efficient.
                      </p>
                    </div>
                    <div className={styles.Imggeneral3} />
                  </div>
                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              ) : (
                <div className={styles.frame3}>
                  <div className={styles.Boxfram3_3_2}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        1 stop service for translator
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        AI support translator, a helper that makes the work of
                        translators even easier. Correct grammar and reduce the
                        time, the work process is faster.
                      </p>
                    </div>
                    <div className={styles.Imggeneral1} />

                    <div className={styles.Boxfram3_3_3}>
                      <div className={styles.INBoxfram3_3_2}>
                        <p className={styles.HBoxdetaile3_1}>
                          Recommend more,gain more
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          The more you recommend, the more The more customers
                          recommend our services, the more The more you get more
                          privileges.
                        </p>
                      </div>
                      <div className={styles.Imggeneral2} />
                    </div>
                  </div>

                  <div className={styles.detailefram_general2}>
                    <div className={styles.Boxfram3_3}>
                      <div className={styles.Imggeneral3} />
                      <div>
                        <p className={styles.HBoxdetaile3_1}>
                          Personal Tool Assistant
                        </p>
                        <p className={styles.HBoxdetaile_general}>
                          Translation tool for translators We have tools that
                          make the work of translators easier and more
                          efficient.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: "100vw" }}>
                    <Footer v="English" />
                  </div>
                </div>
              )}
            </div>
          </>
        </>
      ) : (
        <>
          <header className={styles.App_header}>
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

          <>
            <div className={styles.fram1C}>
              <div>
                <div
                  style={{
                    textAlign: "center",
                    justifyItems: "center",
                    display: "inline-grid",
                    position: "relative",
                    top: 190,
                  }}
                >
                  <div>
                    <p className={styles.H_text01}>About us</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p className={styles.textH01}>
                      Translation hero comes with a functions and capabilities
                      to support the work and needs of all users.
                    </p>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      top: 40,
                    }}
                  >
                    <button
                      className={styles.fram1_button2}
                      onClick={() => goSignup()}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.frame2}>
                <div className={styles.detailefram_general}>
                  <div className={styles.Boxfram3_3}>
                    <div className={styles.Imggeneral5} />
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        machine based translator
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        AI support translator, a helper that makes the work of
                        translators even easier. Correct grammar and reduce the
                        time, the work process is faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.frame3}>
                <div className={styles.Boxfram3_3_2}>
                  <div className={styles.INBoxfram3_3_2}>
                    <p className={styles.HBoxdetaile3_1}>
                      1 stop service for translator
                    </p>
                    <p className={styles.HBoxdetaile_general}>
                      AI support translator, a helper that makes the work of
                      translators even easier. Correct grammar and reduce the
                      time, the work process is faster.
                    </p>
                  </div>
                  <div className={styles.Imggeneral1} />

                  <div className={styles.Boxfram3_3_3}>
                    <div className={styles.INBoxfram3_3_2}>
                      <p className={styles.HBoxdetaile3_1}>
                        Recommend more,gain more
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        The more you recommend, the more The more customers
                        recommend our services, the more The more you get more
                        privileges.
                      </p>
                    </div>
                    <div className={styles.Imggeneral2} />
                  </div>
                </div>

                <div className={styles.detailefram_general2}>
                  <div className={styles.Boxfram3_3}>
                    <div className={styles.Imggeneral3} />
                    <div>
                      <p className={styles.HBoxdetaile3_1}>
                        Personal Tool Assistant
                      </p>
                      <p className={styles.HBoxdetaile_general}>
                        Translation tool for translators We have tools that make
                        the work of translators easier and more efficient.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ width: "100vw" }}>
                  <Footer v="English" />
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};
export default About_us;
