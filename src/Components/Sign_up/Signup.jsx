import * as React from "react";
// import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";
import { Formik } from "formik";
import { data, data2 } from "../Data/data";

//test
// import {
//   useDispatch,
//   // useSelector
// } from "react-redux";

// import { registerUser } from "../../slices/auth";

// import { data, data5 } from "../Data/data";

import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import File from "../../Images/file.svg";
import Checkcircle from "../../Images/checkcircle.svg";
import Check from "../../Images/Check.svg";
import Logo from "../../logo.svg";

import {
  REGI01_box1EN,
  REGI01_box1DE,
  REGI01_box1TH,
} from "../Data/DataLanguage";

import {
  IconButton,
  FormControlLabel,
  Input,
  Modal,
  Box,
  Checkbox,
  Autocomplete,
  TextField,
} from "@mui/material";

import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import downloadcloud01 from "../../Images/downloadcloud01.jpg";
import styles from "./Signup.module.css";

const Signup = () => {
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;

  //test
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  function chcek_width() {
    if (width < 768) {
      navigate("/");
      toast.error("Please change your Sign up tool.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const [images2, setImages2] = React.useState([]);
  const [images3, setImages3] = React.useState([]);
  const [images4, setImages4] = React.useState([]);
  const [images5, setImages5] = React.useState([]);
  const [images6, setImages6] = React.useState([]);
  const [images7, setImages7] = React.useState([]);
  const [type_User, setType_User] = React.useState("");

  const [translators, setTranslators] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobilePhone: "",
    imgProfile: "",
    companyName: "",
    juristicPersonNumber: "",
    website: "",
    address: "",
    district: "",
    province: "",
    country: "",
    postalCode: "",
    bankname: "",
    branchname: "",
    accountname: "",
    accountnumber: "",
    watermark: "",
    certificate: "",
    languages: [],
    idcard: "",
    education: "",
    portfolio: "",
    bookbank: "",
    documents: [],
    answer: "",
    question: "",
    type: "",
  });
  const [openModel, setopenModel] = React.useState({
    openModel1: false,
    openModel2: false,
  });

  const [screen, setScreen] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [valuestype, setValuestype] = React.useState(false);
  const [valuestype2, setValuestype2] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  function onImageChange(e, i) {
    const files = [...e.target.files];
    const ImageURLs = [];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSizeInBytes = 25 * 1024 * 1024; // 25MB

    const validateAndSetImageState = (files, key) => {
      const validFiles = [];

      for (let file of files) {
        // Check file type
        if (!allowedTypes.includes(file.type)) {
          toast.error(`Invalid file type for ${file.name}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          continue;
        }

        // Check file size
        if (file.size > maxSizeInBytes) {
          toast.error(`File size exceeds 25MB for ${file.name}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          continue;
        }

        validFiles.push(file);
      }

      if (validFiles.length > 0) {
        const imageURLs = validFiles.map((file) => URL.createObjectURL(file));
        // setImages(validFiles);
        setTranslators({ ...translators, [key]: imageURLs });
      }
    };

    switch (i) {
      case 1:
        console.log("case 1");
        files.forEach((image) => ImageURLs.push(URL.createObjectURL(image)));
        setTranslators({ ...translators, imgProfile: ImageURLs });
        break;

      case 2:
        console.log("case 2");
        setImages2(files);
        validateAndSetImageState(files, "idcard");
        break;

      case 3:
        console.log("case 3");
        if (files.length !== 0) {
          setImages3(files);
          validateAndSetImageState(files, "education");
        }
        break;

      case 4:
        console.log("case 4");
        if (files.length !== 0) {
          setImages4(files);
          validateAndSetImageState(files, "portfolio");
        }
        break;

      case 5:
        console.log("case 5");
        if (files.length !== 0) {
          setImages5(files);
          validateAndSetImageState(files, "bookbank");
        }
        break;

      case 6:
        console.log("case 6");
        if (files.length !== 0) {
          setImages6(files);
          validateAndSetImageState(files, "watermark");
        }
        break;

      case 7:
        console.log("case 7");
        if (files.length !== 0) {
          setImages7(files);
          validateAndSetImageState(files, "certificate");
        }
        break;

      default:
        console.log("Invalid case");
        setImages2([]);
        setImages3([]);
        setImages4([]);
        setImages5([]);
        setImages6([]);
        setImages7([]);
    }
  }

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

  function setScreenNumber(i) {
    switch (i) {
      case "type": {
        setTranslators({ ...translators, type: type_User });
        setScreen("1");
        break;
      }
      case 1:
        setScreen("2");
        break;
      case 2:
        setScreen("3");
        break;
      case 3:
        setScreen("4");
        break;
      case 4:
        setScreen("5");
        break;
      case 5:
        setScreen("6");
        break;
      case 6:
        setScreen("7");
        break;
      case 7:
        setopenModel({
          ...openModel,
          openModel1: true,
        });
        // navigate("/Login");
        break;
      case "back":
        setTranslators({ ...translators, type: "" });
        setType_User("");
        setScreen("type");
        break;
      default:
        setScreen("");
    }
  }

  function OpneMode(x) {
    if (x === 2) {
      setopenModel({
        ...openModel,
        openModel1: false,
        openModel2: true,
      });
      setTimeout(function () {
        setopenModel({
          ...openModel,
          openModel1: false,
          openModel2: false,
        });
        navigate("/Login");
      }, 3000);
    }
  }

  const handleInputDocumentsChange = (e) => {
    const newValue = e.target.value;

    setTranslators((prevTranslators) => ({
      ...prevTranslators,
      documents: prevTranslators.answer + newValue, // Concatenate the new answer
    }));
  };

  console.log("screen", screen, translators?.type, translators);

  React.useEffect(() => {
    chcek_width();
  });

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

      <Modal
        hideBackdrop
        open={openModel?.openModel1}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel1: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={styles.ModalBoxPayment}>
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            <img src={Logo} alt="logo" className={styles.Logo} />
            <p className={styles.H_text01}>Terms and Conditions</p>
            <p className={styles.H_text02}>
              The company agrees to provide truthful information. and can
              receive translation work and forward it to translators who are
              competent in the languages stated by the company above. and will
              be responsible for all translation works translated from the
              company
            </p>
          </div>
          <div className={styles.borderReceipt}></div>
          <div id="keep-mounted-modal-description">
            <div>
              <div className={styles.boxpayment}>
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) => setChecked(true)}
                      />
                    }
                    label="accept the terms and conditions"
                  />
                </>
              </div>
            </div>
            <div className={styles.BoxbuttonModalBoxPayment}>
              {checked === true ? (
                <button
                  className={styles.buttonModel1}
                  onClick={() => OpneMode(2)}
                >
                  Submit
                </button>
              ) : (
                <button
                  className={styles.buttonModel2}
                  // onClick={() => OpneMode(2)}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        hideBackdrop
        open={openModel?.openModel2}
        onClose={() =>
          setopenModel({
            ...openModel,
            openModel2: false,
          })
        }
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={styles.ModalBoxPayment2}>
          <div
            id="keep-mounted-modal-description"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            <img src={Check} alt="logo" className={styles.Logo2} />
            <p className={styles.H_text03}>
              Your translator application has been sent. Wait for confirmation
              by email
            </p>
          </div>
        </Box>
      </Modal>

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
            left: 100,
          }}
        >
          {screen === "" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <h2 className={styles.textH}>{REGI01_box1EN[2].label}</h2>
                  <p className={styles.textLogin2}>Create new account.</p>

                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                      mobilePhone: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Please enter your email.";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }

                      if (!values.name) {
                        errors.name = "Please enter your name.";
                      }

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

                      if (!values.mobilePhone) {
                        errors.mobilePhone = "Please enter your mobilePhone.";
                      } else if (!/^\d{10}$/i.test(values.mobilePhone)) {
                        errors.mobilePhone = "Invalid phone number";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      if (values) {
                        // console.log("values:", values);
                        setTranslators({
                          ...translators,
                          name: values.name,
                          email: values.email,
                          password: values.password,
                          confirmPassword: values.confirmPassword,
                          mobilePhone: values.mobilePhone,
                        });
                        setSubmitting(false);
                        setScreen("type");
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
                        <div style={{ textAlign: "left", marginTop: 10 }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[5].label}
                          </p>
                          {errors.name && touched.name && errors.name ? (
                            <>
                              <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder={REGI01_box1EN[5].label}
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid red ",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 20,
                                  color: "red",
                                  textAlign: "left",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                {errors.name && touched.name && errors.name}
                              </p>
                            </>
                          ) : (
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              placeholder={REGI01_box1EN[5].label}
                              style={{
                                background: "#FFFFFF",
                                border: "1px solid #F1F1F1 ",
                                borderRadius: 20,
                                width: "100%",
                                height: 30,
                                padding: 20,
                                paddingLeft: 12,
                                margin: 10,
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
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
                            {REGI01_box1EN[6].label}
                          </p>
                          {errors.email && touched.email && errors.email ? (
                            <>
                              <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder={REGI01_box1EN[7].label}
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid red",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 20,
                                  color: "red",
                                  textAlign: "left",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                {errors.email && touched.email && errors.email}
                              </p>
                            </>
                          ) : (
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder={REGI01_box1EN[7].label}
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
                                fontSize: 13,
                              }}
                            />
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
                            {REGI01_box1EN[8].label}
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
                                  placeholder={REGI01_box1EN[9].label}
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
                                  placeholder={REGI01_box1EN[9].label}
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
                              {/* <IconButton
                                onClick={() => handleClickShowPassword(1)}
                                edge="end"
                                style={{
                                  position: "absolute",
                                  right: 50,
                                  top: 344,
                                }}
                              >
                                {valuestype ? <FiEye /> : <FiEyeOff />}
                              </IconButton>
                            </> */}
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
                            {REGI01_box1EN[10].label}
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
                                  placeholder={REGI01_box1EN[9].label}
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
                                  placeholder={REGI01_box1EN[9].label}
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

                        <div style={{ textAlign: "left", marginBottom: 10 }}>
                          <p
                            style={{
                              fontWeight: 500,
                              fontSize: 20,
                              color: "#242424",
                              textAlign: "left",
                              fontFamily: "DBHeavent",
                            }}
                          >
                            {REGI01_box1EN[11].label}
                          </p>
                          {errors.mobilePhone &&
                          touched.mobilePhone &&
                          errors.mobilePhone ? (
                            <>
                              <input
                                type="text"
                                name="mobilePhone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobilePhone}
                                placeholder={REGI01_box1EN[11].label}
                                style={{
                                  background: "#FFFFFF",
                                  border: "1px solid #dc3545",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 20,
                                  color: "red",
                                  textAlign: "left",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                {errors.mobilePhone &&
                                  touched.mobilePhone &&
                                  errors.mobilePhone}
                              </p>
                            </>
                          ) : (
                            <input
                              type="text"
                              name="mobilePhone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mobilePhone}
                              placeholder={REGI01_box1EN[11].label}
                              style={{
                                background: "#FFFFFF",
                                border: "1px solid #F1F1F1 ",
                                borderRadius: 20,
                                borderColor: "#F1F1F1",
                                width: "100%",
                                height: 30,
                                padding: 20,
                                paddingLeft: 12,
                                margin: 10,
                                marginLeft: 0,
                                fontSize: 13,
                              }}
                            />
                          )}
                        </div>

                        <button
                          className={styles.button}
                          type="submit"
                          disabled={isSubmitting}
                          // onClick={() => setScreen("type")}
                        >
                          Create account
                        </button>
                      </form>
                    )}
                  </Formik>

                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>

                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "type" ? (
            <>
              <div>
                <div
                  style={{
                    width: 500,
                    background: " #FFFFFF",
                    borderRadius: 20,
                    padding: 30,
                    height: "600px",
                  }}
                >
                  <h2 className={styles.textH}>Choose your account type.</h2>
                  <p className={styles.textLogin2}>
                    Choose the type of account you want to apply for.
                  </p>

                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <>
                      {type_User === "Freelance Translators" ? (
                        <button
                          className={styles.button4}
                          onClick={() => setType_User("Freelance Translators")}
                        >
                          <div className={styles.crown2} />
                          <p>Freelance Translators</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => setType_User("Freelance Translators")}
                        >
                          <div className={styles.crown} />
                          <p>Freelance Translators</p>
                        </button>
                      )}
                      {type_User === "Company" ? (
                        <button
                          className={styles.button4}
                          onClick={() => setType_User("Company")}
                        >
                          <div className={styles.briefcase2} />
                          <p>Company</p>
                        </button>
                      ) : (
                        <button
                          className={styles.button3}
                          onClick={() => setType_User("Company")}
                        >
                          <div className={styles.briefcase} />
                          <p>Company</p>
                        </button>
                      )}
                    </>
                  </div>
                  {type_User !== "" ? (
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber("type")}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      onClick={() =>
                        toast.error(
                          "Choose the type of account you want to apply for.",
                          {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          }
                        )
                      }
                    >
                      Next
                    </button>
                  )}

                  <button
                    className={styles.button}
                    onClick={() => setScreen("")}
                  >
                    Back
                  </button>

                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "1" ? (
            <>
              <div>
                <div className={styles.BoxInputImg1}>
                  <h2 className={styles.textH}>
                    1.Upload your profile picture.
                  </h2>

                  <div style={{ textAlign: "left", marginTop: 10 }}>
                    <div style={{ textAlign: "center" }}>
                      {translators.imgProfile === "" ? (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 300,
                            padding: 60,
                            position: "relative",
                            borderStyle: "solid",
                            borderColor: "#D0D5DD",
                            borderWidth: 2,
                            margin: 20,
                            marginLeft: 0,
                          }}
                        >
                          <label htmlFor="icon-button-file">
                            <Input
                              accept="image/*"
                              id="icon-button-file"
                              type="file"
                              style={{ display: "none" }}
                              onChange={(e) => onImageChange(e, 1)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            >
                              <div className={styles.cloud_upload} />
                              <p
                                style={{
                                  position: "absolute",
                                  top: 60,
                                  width: 100,
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#D0D5DD",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                Upload File
                              </p>
                            </IconButton>
                          </label>
                        </div>
                      ) : (
                        <div
                          style={{
                            background: "#FFFFFF",
                            borderRadius: 20,
                            width: "100%",
                            height: 200,
                            position: "relative",
                            borderStyle: "",
                            borderColor: "#0865A8",
                            borderWidth: 2,
                            margin: 20,
                            marginLeft: 0,
                          }}
                        >
                          <label htmlFor="icon-button-file">
                            <Input
                              accept="image/*"
                              id="icon-button-file"
                              type="file"
                              style={{ display: "none" }}
                              onChange={(e) => onImageChange(e, 1)}
                            />
                            <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                              className={styles.BoximgProfile}
                            >
                              <img
                                src={translators?.imgProfile?.at(0)}
                                alt="imgProflie"
                                className={styles.imgProflie}
                              />
                            </IconButton>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber(1)}
                  >
                    Next
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => setScreenNumber("back")}
                  >
                    Back
                  </button>
                  <div className={styles.box1}>
                    <p className={styles.textLogin}>Already a member?</p>
                    <button
                      className={styles.button2}
                      onClick={() => navigate("/Login")}
                    >
                      <p className={styles.textLogin3}>Login</p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : screen === "2" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      2.Upload a picture of your ID card.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images2.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 2)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 2)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {translators?.idcard !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images2.at(0)?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(2)}
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() =>
                          toast.error(
                            "Please re-upload your ID card picture.",
                            {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            }
                          )
                        }
                      >
                        Next
                      </button>
                    )}

                    <button
                      className={styles.button}
                      onClick={() => setScreen("1")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>2.Your company information</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
                    <Formik
                      initialValues={{
                        companyName: "",
                        juristicPersonNumber: "",
                        website: "",
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.companyName) {
                          errors.companyName =
                            "Please enter your Company name.";
                        }

                        if (!values.juristicPersonNumber) {
                          errors.juristicPersonNumber =
                            "Please enter your Juristic Person Number.";
                        }

                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (
                          values.companyName !== "" &&
                          values.juristicPersonNumber !== ""
                          // && values.website !== ""
                        ) {
                          console.log("values:", values);
                          setTranslators({
                            ...translators,
                            companyName: values.companyName,
                            juristicPersonNumber: values.juristicPersonNumber,
                            website: values.website,
                          });
                          setSubmitting(false);
                          resetForm({ values: "" });
                          setScreenNumber(2);
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
                          <div style={{ textAlign: "left", marginTop: 10 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Company name
                            </p>
                            {errors.companyName &&
                            touched.companyName &&
                            errors.companyName ? (
                              <>
                                <input
                                  type="text"
                                  id="companyName"
                                  name="companyName"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.companyName}
                                  placeholder="Enter your account name"
                                  style={{
                                    background: "#FFFFFF",
                                    border: "1px solid #fe0000",
                                    borderRadius: 20,
                                    width: "100%",
                                    height: 30,
                                    padding: 20,
                                    paddingLeft: 12,
                                    margin: 10,
                                    marginLeft: 0,
                                    fontSize: 13,
                                  }}
                                />
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.companyName &&
                                    touched.companyName &&
                                    errors.companyName}
                                </p>
                              </>
                            ) : (
                              <>
                                <input
                                  type="text"
                                  name="companyName"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.companyName}
                                  placeholder="Enter your account name"
                                  style={{
                                    background: "#FFFFFF",
                                    border: "1px solid #F1F1F1 ",
                                    borderRadius: 20,
                                    width: "100%",
                                    height: 30,
                                    padding: 20,
                                    paddingLeft: 12,
                                    margin: 10,
                                    marginLeft: 0,
                                    fontSize: 13,
                                  }}
                                />
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
                              Juristic Person Number
                            </p>
                            {errors.juristicPersonNumber &&
                            touched.juristicPersonNumber &&
                            errors.juristicPersonNumber ? (
                              <>
                                <input
                                  type="text"
                                  id="juristicPersonNumber"
                                  name="juristicPersonNumber"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.juristicPersonNumber}
                                  placeholder="Enter your Juristic Person Number"
                                  style={{
                                    background: "#FFFFFF",
                                    border: "1px solid #fe0000",
                                    borderRadius: 20,
                                    width: "100%",
                                    height: 30,
                                    padding: 20,
                                    paddingLeft: 12,
                                    margin: 10,
                                    marginLeft: 0,
                                    fontSize: 13,
                                  }}
                                />
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.juristicPersonNumber &&
                                    touched.juristicPersonNumber &&
                                    errors.juristicPersonNumber}
                                </p>
                              </>
                            ) : (
                              <>
                                <input
                                  type="text"
                                  name="juristicPersonNumber"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.juristicPersonNumber}
                                  placeholder="Enter your Juristic Person Number"
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
                                    fontSize: 13,
                                  }}
                                />
                              </>
                            )}
                          </div>

                          <div style={{ textAlign: "left", marginBottom: 20 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Website
                            </p>
                            <input
                              type="text"
                              id="website"
                              name="website"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.website}
                              placeholder="www.Example.com"
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
                                fontSize: 13,
                              }}
                            />
                          </div>
                          <button
                            className={styles.button}
                            type="submit"
                            disabled={isSubmitting}
                            // onClick={() => setScreenNumber(2)}
                          >
                            Next
                          </button>

                          <button
                            className={styles.button}
                            onClick={() => setScreen("1")}
                          >
                            Back
                          </button>
                          <div className={styles.box1}>
                            <p className={styles.textLogin}>
                              Already a member?
                            </p>
                            <button
                              className={styles.button2}
                              onClick={() => navigate("/Login")}
                            >
                              <p className={styles.textLogin3}>Login</p>
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            </>
          ) : screen === "3" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      3.Education/Certificate/Proof of Language Competency.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images3.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 3)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 3)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    {translators?.education !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images3.at(0)?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(3)}
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() =>
                          toast.error(
                            "Please re-upload your provide education/certificates/proof of language ability.",
                            {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            }
                          )
                        }
                      >
                        Next
                      </button>
                    )}

                    <button
                      className={styles.button}
                      onClick={() => setScreen("2")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>3.Your company address</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
           
                    <Formik
                      initialValues={{
                        address: "",
                        country: "",
                        province: "",
                        district: "",
                        postalCode: "",
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.address) {
                          errors.address = "Please enter your address.";
                        }

                        if (!values.country) {
                          errors.country = "Please enter your country.";
                        }

                        if (!values.province) {
                          errors.province = "Please enter your province.";
                        }

                        if (!values.district) {
                          errors.district = "Please enter your district";
                        }

                        if (!values.postalCode) {
                          errors.postalCode = "Please enter your postalCode.";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        if (values) {
                          console.log("values:", values);
                          setTranslators({
                            ...translators,
                            address: values?.address,
                            country: values?.country,
                            province: values?.province,
                            district: values?.district,
                            postalCode: values?.postalCode,
                          });
                          setSubmitting(false);
                          setScreenNumber(3);
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
                          <div style={{ textAlign: "left", marginTop: 10 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              Address
                            </p>

                            <>
                              <input
                                type="text"
                                id="address"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                placeholder="Address"
                                style={{
                                  background: "#FFFFFF",
                                  border:
                                    errors.address && touched.address
                                      ? "1px solid #fe0000"
                                      : "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              {errors.address && touched.address && (
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.address}
                                </p>
                              )}
                            </>
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
                              Country
                            </p>

                            <>
                              <input
                                type="text"
                                name="country"
                                id="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                placeholder="Country"
                                style={{
                                  background: "#FFFFFF",
                                  border:
                                    errors.country && touched.country
                                      ? "1px solid #fe0000"
                                      : "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              {errors.country && touched.country && (
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.country}
                                </p>
                              )}
                            </>
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
                              Province
                            </p>

                            <>
                              <input
                                type="text"
                                name="province"
                                id="province"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.province}
                                placeholder="Province"
                                style={{
                                  background: "#FFFFFF",
                                  border:
                                    errors.province && touched.province
                                      ? "1px solid #fe0000"
                                      : "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              {errors.province && touched.province && (
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.province}
                                </p>
                              )}
                            </>
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
                              District
                            </p>

                            <>
                              <input
                                type="text"
                                id="district"
                                name="district"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.district}
                                placeholder="District"
                                style={{
                                  background: "#FFFFFF",
                                  border:
                                    errors.district && touched.district
                                      ? "1px solid #fe0000"
                                      : "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              {errors.district && touched.district && (
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.district}
                                </p>
                              )}
                            </>
                          </div>

                          <div style={{ textAlign: "left", marginBottom: 10 }}>
                            <p
                              style={{
                                fontWeight: 500,
                                fontSize: 20,
                                color: "#242424",
                                textAlign: "left",
                                fontFamily: "DBHeavent",
                              }}
                            >
                              PostalCode
                            </p>

                            <>
                              <input
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.postalCode}
                                placeholder="PostalCode"
                                style={{
                                  background: "#FFFFFF",
                                  border:
                                    errors.postalCode && touched.postalCode
                                      ? "1px solid #fe0000"
                                      : "1px solid #F1F1F1",
                                  borderRadius: 20,
                                  width: "100%",
                                  height: 30,
                                  padding: 20,
                                  paddingLeft: 12,
                                  margin: 10,
                                  marginLeft: 0,
                                  fontSize: 13,
                                }}
                              />
                              {errors.postalCode && touched.postalCode && (
                                <p
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: "red",
                                    textAlign: "left",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  {errors.postalCode}
                                </p>
                              )}
                            </>
                          </div>
                          {errors.address &&
                          errors.country &&
                          errors.district &&
                          errors.province &&
                          errors.postalCode ? (
                            <button
                              className={styles.button}
                              // type="submit"
                              // disabled={isSubmitting}
                              onClick={() =>
                                toast.error(
                                  "Please fill in your information completely.",
                                  {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                  }
                                )
                              }
                            >
                              Next
                            </button>
                          ) : (
                            <button
                              className={styles.button}
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Next
                            </button>
                          )}

                          <button
                            className={styles.button}
                            onClick={() => setScreen("2")}
                          >
                            Back
                          </button>

                          <div className={styles.box1}>
                            <p className={styles.textLogin}>
                              Already a member?
                            </p>
                            <button
                              className={styles.button2}
                              onClick={() => navigate("/Login")}
                            >
                              <p className={styles.textLogin3}>Login</p>
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                )}
              </div>
            </>
          ) : screen === "4" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>4.Portfolio/CV.</h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images4.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 4)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                    {translators.portfolio !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images4[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(4)}
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() =>
                          toast.error("Please re-upload your Portfolio/CV.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      >
                        Next
                      </button>
                    )}

                    <button
                      className={styles.button}
                      onClick={() => setScreen("3")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      4.Upload a picture to use as a watermark.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images6.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 6)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 6)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                    {translators.watermark !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images6.at(0)?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(4)}
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() =>
                          toast.error("Please re-upload your watermark.", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      >
                        Next
                      </button>
                    )}

                    <button
                      className={styles.button}
                      onClick={() => setScreen("3")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : screen === "5" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>5.Banking and Finance</h2>
                    <p className={styles.textLogin2}>
                      Please complete your financial information.
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <Formik
                        initialValues={{
                          bankname: "",
                          branchname: "",
                          accountname: "",
                          accountnumber: "",
                        }}
                        validate={(values) => {
                          const errors = {};
                          if (!values.bankname) {
                            errors.bankname = "Please enter your Bank name.";
                          }

                          if (!values.branchname) {
                            errors.branchname =
                              "Please enter your Branch name.";
                          }

                          if (!values.accountname) {
                            errors.accountname =
                              "Please enter your Account name.";
                          }

                          if (!values.accountnumber) {
                            errors.accountnumber =
                              "Please enter your Account number";
                          }

                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          if (values) {
                            console.log("values:", values);
                            setTranslators({
                              ...translators,
                              bankname: values.bankname,
                              Branchname: values.branchname,
                              accountname: values.accountname,
                              accountnumber: values.accountnumber,
                            });
                            setSubmitting(false);
                            if (translators?.bookbank !== "") {
                              setScreenNumber(5);
                            }
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
                            <div style={{ textAlign: "left", marginTop: 10 }}>
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 20,
                                  color: "#242424",
                                  textAlign: "left",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                Bank name
                              </p>
                              {errors.bankname &&
                              touched.bankname &&
                              errors.bankname ? (
                                <>
                                  <input
                                    type="text"
                                    name="bankname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bankname}
                                    placeholder="Bank name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.bankname &&
                                      touched.bankname &&
                                      errors.bankname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="bankname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bankname}
                                    placeholder="Bank name"
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
                                      fontSize: 13,
                                    }}
                                  />
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
                                Branch name
                              </p>
                              {errors.branchname &&
                              touched.branchname &&
                              errors.branchname ? (
                                <>
                                  <input
                                    type="text"
                                    name="branchname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.branchname}
                                    placeholder="Branch name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.branchname &&
                                      touched.branchname &&
                                      errors.branchname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="branchname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.branchname}
                                    placeholder="Branch name"
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
                                      fontSize: 13,
                                    }}
                                  />
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
                                Account name
                              </p>
                              {errors.accountname &&
                              touched.accountname &&
                              errors.accountname ? (
                                <>
                                  <input
                                    type="text"
                                    name="accountname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountname}
                                    placeholder="Account name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.accountname &&
                                      touched.accountname &&
                                      errors.accountname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="accountname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountname}
                                    placeholder="Account name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #F1F1F1 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
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
                                Account number
                              </p>
                              {errors.accountnumber &&
                              touched.accountnumber &&
                              errors.accountnumber ? (
                                <>
                                  <input
                                    type="text"
                                    name="accountnumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountnumber}
                                    placeholder="Account number"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.accountnumber &&
                                      touched.accountnumber &&
                                      errors.accountnumber}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="accountnumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountnumber}
                                    placeholder="Account number"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #F1F1F1 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
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
                                Book Bank
                              </p>
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 18,
                                  color: "#242424",
                                  textAlign: "left",
                                  fontFamily: "DBHeaventLi",
                                }}
                              >
                                Download your bank book page. File size must not
                                exceed 25Mb.
                              </p>
                              <div className={styles.BoxuploadBookbank}>
                                <label htmlFor="icon-button-file">
                                  <Input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(e) => onImageChange(e, 5)}
                                  />
                                  <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    className={styles.setInbuttonBookbank}
                                  >
                                    <img
                                      src={downloadcloud01}
                                      alt="downloadcloud01"
                                    />
                                    <p>Upload File</p>
                                  </IconButton>
                                </label>
                              </div>
                            </div>

                            {images5?.length > 0 ? (
                              <>
                                <div className={styles.BoxSuccessFile}>
                                  <img src={File} alt="file" />
                                  <div>
                                    <p>{images5.at(0)?.name}</p>
                                  </div>
                                  <img src={Checkcircle} alt="checkcircle" />
                                </div>

                                <button className={styles.button}>Next</button>
                              </>
                            ) : (
                              <button
                                className={styles.button}
                                onClick={() =>
                                  toast.error(
                                    "Please re-upload your bank book page.",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "dark",
                                    }
                                  )
                                }
                              >
                                Next
                              </button>
                            )}

                            <button
                              className={styles.button}
                              onClick={() => setScreen("4")}
                            >
                              Back
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>

                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>
                      5.Company Registration Certificate.
                    </h2>
                    <p className={styles.textLogin2}>
                      (such as JPG, PDF, PNG and the file size does not exceed
                      25Mb.)
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <div style={{ textAlign: "center" }}>
                        {images7.length < 1 ? (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 7)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div className={styles.BoxIdcard}>
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => onImageChange(e, 7)}
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <div className={styles.cloud_upload} />
                                <p
                                  style={{
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                    fontWeight: 500,
                                    fontSize: 25,
                                    color: "#D0D5DD",
                                    fontFamily: "DBHeavent",
                                  }}
                                >
                                  Upload File
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                    {translators.certificate !== "" ? (
                      <>
                        <div className={styles.BoxSuccessFile}>
                          <img src={File} alt="file" />
                          <div>
                            <p>{images7[0]?.name}</p>
                          </div>
                          <img src={Checkcircle} alt="checkcircle" />
                        </div>
                        <button
                          className={styles.button}
                          onClick={() => setScreenNumber(5)}
                        >
                          Next
                        </button>
                      </>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={() =>
                          toast.error(
                            "Please re-upload your Company Registration Certificate.",
                            {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            }
                          )
                        }
                      >
                        Next
                      </button>
                    )}

                    <button
                      className={styles.button}
                      onClick={() => setScreen("4")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : screen === "6" ? (
            <>
              <div>
                {translators?.type === "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>6.Skill and your service.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        What languages can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.languages}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        What kind of documents can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data2}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.documents}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            documents: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="documents" />
                        )}
                      />
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Your service
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        your services like Get stamped documents from the
                        embassy, there is a service to deliver documents.
                      </p>

                      <input
                        type="text"
                        onChange={
                          (e) =>
                            setTranslators({
                              ...translators,
                              documents: e.target.value,
                            })
                          // console.log(e)
                        }
                        value={translators.documents}
                        placeholder="Enter your service"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgb(196 196 196",
                          borderRadius: 0,
                          width: "100%",
                          height: 55,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          marginLeft: 0,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(6)}
                    >
                      Next
                    </button>

                    <button
                      className={styles.button}
                      onClick={() => setScreen("5")}
                    >
                      Back
                    </button>

                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg3}>
                    <h2 className={styles.textH}>6.Banking and Finance</h2>
                    <p className={styles.textLogin2}>
                      Please complete your financial information.
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <Formik
                        initialValues={{
                          bankname: "",
                          branchname: "",
                          accountname: "",
                          accountnumber: "",
                        }}
                        validate={(values) => {
                          const errors = {};
                          if (!values.bankname) {
                            errors.bankname = "Please enter your Bank name.";
                          }

                          if (!values.branchname) {
                            errors.branchname =
                              "Please enter your Branch name.";
                          }

                          if (!values.accountname) {
                            errors.accountname =
                              "Please enter your Account name.";
                          }

                          if (!values.accountnumber) {
                            errors.accountnumber =
                              "Please enter your Account number";
                          }

                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          if (values) {
                            console.log("values:", values);
                            setTranslators({
                              ...translators,
                              bankname: values.bankname,
                              Branchname: values.branchname,
                              accountname: values.accountname,
                              accountnumber: values.accountnumber,
                            });
                            setSubmitting(false);
                            if (translators?.bookbank !== "") {
                              setScreenNumber(6);
                            }
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
                            <div style={{ textAlign: "left", marginTop: 10 }}>
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 20,
                                  color: "#242424",
                                  textAlign: "left",
                                  fontFamily: "DBHeavent",
                                }}
                              >
                                Bank name
                              </p>
                              {errors.bankname &&
                              touched.bankname &&
                              errors.bankname ? (
                                <>
                                  <input
                                    type="text"
                                    name="bankname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bankname}
                                    placeholder="Bank name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.bankname &&
                                      touched.bankname &&
                                      errors.bankname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="bankname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.bankname}
                                    placeholder="Bank name"
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
                                      fontSize: 13,
                                    }}
                                  />
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
                                Branch name
                              </p>
                              {errors.branchname &&
                              touched.branchname &&
                              errors.branchname ? (
                                <>
                                  <input
                                    type="text"
                                    name="branchname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.branchname}
                                    placeholder="Branch name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.branchname &&
                                      touched.branchname &&
                                      errors.branchname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="branchname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.branchname}
                                    placeholder="Branch name"
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
                                      fontSize: 13,
                                    }}
                                  />
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
                                Account name
                              </p>
                              {errors.accountname &&
                              touched.accountname &&
                              errors.accountname ? (
                                <>
                                  <input
                                    type="text"
                                    name="accountname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountname}
                                    placeholder="Account name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.accountname &&
                                      touched.accountname &&
                                      errors.accountname}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="accountname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountname}
                                    placeholder="Account name"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #F1F1F1 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
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
                                Account number
                              </p>
                              {errors.accountnumber &&
                              touched.accountnumber &&
                              errors.accountnumber ? (
                                <>
                                  <input
                                    type="text"
                                    name="accountnumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountnumber}
                                    placeholder="Account number"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #fe0000 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
                                  <p
                                    style={{
                                      fontWeight: 500,
                                      fontSize: 20,
                                      color: "red",
                                      textAlign: "left",
                                      fontFamily: "DBHeavent",
                                    }}
                                  >
                                    {errors.accountnumber &&
                                      touched.accountnumber &&
                                      errors.accountnumber}
                                  </p>
                                </>
                              ) : (
                                <>
                                  <input
                                    type="text"
                                    name="accountnumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.accountnumber}
                                    placeholder="Account number"
                                    style={{
                                      background: "#FFFFFF",
                                      border: "1px solid #F1F1F1 ",
                                      borderRadius: 20,
                                      borderColor: "#F1F1F1",
                                      width: "100%",
                                      height: 30,
                                      padding: 20,
                                      paddingLeft: 12,
                                      margin: 10,
                                      marginLeft: 0,
                                      fontSize: 13,
                                    }}
                                  />
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
                                Book Bank
                              </p>
                              <p
                                style={{
                                  fontWeight: 500,
                                  fontSize: 18,
                                  color: "#242424",
                                  textAlign: "left",
                                  fontFamily: "DBHeaventLi",
                                }}
                              >
                                Download your bank book page. File size must not
                                exceed 25Mb.
                              </p>
                              <div className={styles.BoxuploadBookbank}>
                                <label htmlFor="icon-button-file">
                                  <Input
                                    accept="image/*"
                                    id="icon-button-file"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(e) => onImageChange(e, 5)}
                                  />
                                  <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    className={styles.setInbuttonBookbank}
                                  >
                                    <img
                                      src={downloadcloud01}
                                      alt="downloadcloud01"
                                    />
                                    <p>Upload File</p>
                                  </IconButton>
                                </label>
                              </div>
                            </div>

                            {images5?.length > 0 ? (
                              <>
                                <div className={styles.BoxSuccessFile}>
                                  <img src={File} alt="file" />
                                  <div>
                                    <p>{images5.at(0)?.name}</p>
                                  </div>
                                  <img src={Checkcircle} alt="checkcircle" />
                                </div>

                                <button className={styles.button}>Next</button>
                              </>
                            ) : (
                              <button
                                className={styles.button}
                                onClick={() =>
                                  toast.error(
                                    "Please re-upload your bank book page.",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "dark",
                                    }
                                  )
                                }
                              >
                                Next
                              </button>
                            )}

                            <button
                              className={styles.button}
                              onClick={() => setScreen("4")}
                            >
                              Back
                            </button>
                          </form>
                        )}
                      </Formik>
                    </div>

                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : screen === "7" ? (
            <>
              <div>
                {translators?.type !== "Freelance Translators" ? (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>7.Skill and your service.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        What languages can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.languages}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        What kind of documents can you translate?
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data2}
                        getOptionLabel={(option) => option.label}
                        // value={translators?.documents}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            documents: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="documents" />
                        )}
                        // sx={{ width: "500px" }}
                      />
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Your service
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        your services like Get stamped documents from the
                        embassy, there is a service to deliver documents.
                      </p>

                      <input
                        type="text"
                        onChange={handleInputDocumentsChange}
                        value={translators.documents}
                        placeholder="Enter your service"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgb(196 196 196",
                          borderRadius: 0,
                          width: "100%",
                          height: 55,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          marginLeft: 0,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(7)}
                    >
                      Next
                    </button>

                    <button
                      className={styles.button}
                      onClick={() => setScreen("6")}
                    >
                      Back
                    </button>

                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.BoxInputImg2}>
                    <h2 className={styles.textH}>7.Test Skill.</h2>
                    <p className={styles.textLogin2}>
                      Please complete your information.
                    </p>
                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Language to answer
                      </p>

                      <Autocomplete
                        multiple
                        id="multiple-limit-tags"
                        options={data}
                        getOptionLabel={(option) => option.label}
                        value={translators?.answer}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            answer: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderInput={(params) => (
                          <TextField {...params} label="languages" />
                        )}
                        // sx={{ width: "500px" }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeavent",
                        }}
                      >
                        Question
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                          fontFamily: "DBHeaventLi",
                        }}
                      >
                        What do you think are the requirements or boundaries for
                        learning a language? And what is each language's unique
                        difficulty? Explain.
                      </p>
                      <input
                        type="text"
                        value={translators.answer || ""}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            answer: e.target.value,
                          })
                        }
                        placeholder="Enter your answer"
                      />
                    </div>
                    <button
                      className={styles.button}
                      onClick={() => setScreenNumber(7)}
                    >
                      Submit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => setScreen("6")}
                    >
                      Back
                    </button>
                    <div className={styles.box1}>
                      <p className={styles.textLogin}>Already a member?</p>
                      <button
                        className={styles.button2}
                        onClick={() => navigate("/Login")}
                      >
                        <p className={styles.textLogin3}>Login</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : null}
          <>
            {Doc === "English" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            ) : Doc === "Thai" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1TH[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1TH[13].label}</p>
                </div>
              </div>
            ) : Doc === "German" ? (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1DE[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1DE[13].label}</p>
                </div>
              </div>
            ) : (
              <div style={{ position: "relative", right: "20%" }}>
                <div style={{ float: "right" }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p className={styles.textPolicy}>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            )}
          </>
        </div>

        <div>
          {translators?.type === "Freelance Translators" ? (
            <div className={styles?.img_Signup2}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          ) : translators?.type === "Company" ? (
            <div className={styles?.img_Signup3}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          ) : (
            <div className={styles?.img_Signup1}>
              <div>
                <p className={styles.textimg1}>Translation Hero</p>
                <p className={styles.textimg2}>
                  ...เรายินดีต้อนรับนักแปลทุกท่านเข้าสู่ระบบ
                  และพร้อมรับประสบการณ์ในการทำงานใหม่ๆผ่าน
                  เครื่องมือที่น่าสนใจ...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Signup;
