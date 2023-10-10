import * as React from "react";
import { Box, Modal, Autocomplete, TextField, Paper } from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/NavbarTool.js";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
// import Icons from "../../Images/icons_ai.png";
// import { BsFileEarmarkText } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import {
  FaRegFileImage,
  // FaLongArrowAltLeft,
  // FaLongArrowAltRight,
} from "react-icons/fa";
// import { data } from "../Data/data";

import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import Test from "../../Images/1.jpeg";
import Test2 from "../../Images/outputImage1.jpg";
import Test3 from "../../Images/49.jpeg";
import Test4 from "../../Images/outputImage2.jpg";
import Test5 from "../../Images/dii.jpg";
import Test6 from "../../Images/outputImage3.jpg";
import ToolText from "../../Images/ToolText.png";

import "./Tool.css";
function Tool() {
  const [value, setValue] = React.useState(new Date());
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [Ojc, setOjc] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [page, setPage] = React.useState("");
  const [groupbutton, setGroupbutton] = React.useState(1);
  // const [languages, setLanguages] = React.useState("");
  // const [languages2, setLanguages2] = React.useState("");
  const [textex, setText] = React.useState("");
  // const [translateFrom, setTranslateFrom] = React.useState("");
  const [result, setResult] = React.useState("");
  const [option, setOption] = React.useState("1");
  const [screen, setScreen] = React.useState(1);

  const [openbuttonHaed, setOpenbuttonHaed] = React.useState({
    openbuttonHaed1: true,
    openbuttonHaed2: false,
    openbuttonHaed3: false,
    openbuttonHaed4: false,
    openbuttonHaed5: false,
  });

  const handleButtonClick = (stateName) => {
    const newState = {};
    for (const buttonState in openbuttonHaed) {
      newState[buttonState] = buttonState === stateName;
    }
    setOpenbuttonHaed(newState);
  };

  const buttonConfig = [
    { text: "All", stateName: "openbuttonHaed1" },
    { text: "Deadline", stateName: "openbuttonHaed2" },
    { text: "Imminent", stateName: "openbuttonHaed3" },
    { text: "More than 1 week left", stateName: "openbuttonHaed4" },
    { text: "Sent", stateName: "openbuttonHaed5" },
  ];
  // const [value_Text, setValue_Text] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;

  React.useEffect(() => {
    if (Value) {
      console.log("value :", Value);
    } else {
      // navigate("/Login");
    }
  }, [navigate, Value]);

  const handleChange = (content) => {
    console.log(":::", content.trim());
    setText(content);
  };

  const handleClose = () => {
    setTypeOpen(false);
  };

  const TEXT_SCAN = () => {
    setPage("TEXT_SCAN");
    setTypeOpen(false);
  };

  // const switchLanguage = () => {
  //   setLanguages(languages2);
  //   setLanguages2(languages);
  // };

  const switchpage = (i) => {
    if (i === 2) {
      setScreen(2);
    }
  };

  // const TranslateFrom = (x) => {
  //   setLanguages(x);
  //   if (x === "English") {
  //     setTranslateFrom("en-GB");
  //   } else if (x === "Thai") {
  //     setTranslateFrom("th-TH");
  //   } else if (x === "German") {
  //     setTranslateFrom("de-DE");
  //   } else {
  //     setTranslateFrom("en-GB");
  //   }
  // };

  // const translate = () => {
  //   const text = textex;
  //   const translateTo = languages2;
  //   console.log(text, translateTo);
  //   let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data::", data);
  //       const valueText = data.responseData.translatedText;
  //       setResult(valueText);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   setOpen(true);
  // };

  return (
    <div className="AppBobyTool">
      <header className="App-header">
        {Doc === "English" ? (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" dispatch={dispatch} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" dispatch={dispatch} />
        ) : (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        )}
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer languages={Doc} value={Value} />

        <Box component="main">
          <div className="BobyTool">
            {screen === 1 ? (
              <div className="BoxSunEditor">
                <div className="ToolHaed">
                  <div className="ToolHaed2">
                    <div>
                      <p className="TextHTool">Tool</p>
                    </div>

                    <div className="ToolrowpoinBOX">
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX1" />
                        <p>Deadline</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX2" />
                        <p>Imminent</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX3" />
                        <p>More than 1 week left</p>
                      </div>
                      <div className="ToolBOX">
                        <div className="ToolpoinBOX4" />
                        <p>Sent</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 410,
                        position: "relative",
                        left: "56%",
                        top: "20%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        //   borderRadius: 10,
                      }}
                    >
                      <LocalizationProvider
                        dateAdapter={AdapterLuxon}
                        //   localeText={{ start: "Check-in", end: "Check-out" }}
                      >
                        <DatePicker
                          label=""
                          value={value}
                          // inputFormat="DD/MMM/YYYY"
                          mask="__/__/___"
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(Props) => (
                            <React.Fragment>
                              <TextField {...Props} />
                            </React.Fragment>
                          )}
                        />
                      </LocalizationProvider>
                    </Paper>
                  </div>
                </div>

                <div className="Toolrowbutton">
                  {buttonConfig.map(({ text, stateName }) => (
                    <button
                      key={text}
                      className={
                        openbuttonHaed[stateName]
                          ? "ToolbuttonHaed1"
                          : "ToolbuttonHaed2"
                      }
                      onClick={() => handleButtonClick(stateName)}
                    >
                      <p>{text}</p>
                    </button>
                  ))}
                </div>

                <div>
                  {!(
                    openbuttonHaed.openbuttonHaed3 ||
                    openbuttonHaed.openbuttonHaed4 ||
                    openbuttonHaed.openbuttonHaed5
                  ) && (
                    <>
                      <button
                        className="Tooltask"
                        onClick={() => switchpage(2)}
                      >
                        <p className="ToolText1">THOG0023534</p>
                        <p className="ToolText2">Article</p>
                        <p className="ToolText3"> 2023/9/15</p>
                      </button>

                      <button
                        className="Tooltask"
                        onClick={() => switchpage(2)}
                      >
                        <p className="ToolText1">THGD0020035</p>
                        <p className="ToolText2">Birth Certificate</p>
                        <p className="ToolText3"> 2023/9/15</p>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : screen === 2 ? (
              <div className="BoxSunEditor">
                <div className="ToolHaed4">
                  <div className="ToolInHaed4">
                    <p className="ToolInHaed4text1">Tools</p>
                    <p className="ToolInHaed4text2">/ THOG0024534</p>
                  </div>
                  {groupbutton === 1 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Next</p>
                      </button>
                      {/* <button
                      className="ToolSubmit"
                      onClick={() => navigate("/In")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1849_18817)">
                          <path
                            d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1849_18817">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Submit</p>
                    </button> */}
                    </div>
                  ) : groupbutton === 2 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(1)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(3)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 3 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18814)">
                            <path
                              d="M5.99992 1.33203V2.66536M9.99992 1.33203V2.66536M5.99992 13.332V14.6654M9.99992 13.332V14.6654M13.3333 5.9987H14.6666M13.3333 9.33203H14.6666M1.33325 5.9987H2.66659M1.33325 9.33203H2.66659M5.86659 13.332H10.1333C11.2534 13.332 11.8134 13.332 12.2412 13.114C12.6176 12.9223 12.9235 12.6163 13.1153 12.24C13.3333 11.8122 13.3333 11.2521 13.3333 10.132V5.86536C13.3333 4.74526 13.3333 4.18521 13.1153 3.75738C12.9235 3.38106 12.6176 3.0751 12.2412 2.88335C11.8134 2.66536 11.2534 2.66536 10.1333 2.66536H5.86659C4.74648 2.66536 4.18643 2.66536 3.7586 2.88335C3.38228 3.0751 3.07632 3.38106 2.88457 3.75738C2.66659 4.18521 2.66659 4.74526 2.66659 5.86536V10.132C2.66659 11.2521 2.66659 11.8122 2.88457 12.24C3.07632 12.6163 3.38228 12.9223 3.7586 13.114C4.18643 13.332 4.74648 13.332 5.86659 13.332ZM7.06659 9.9987H8.93325C9.30662 9.9987 9.4933 9.9987 9.63591 9.92604C9.76135 9.86212 9.86334 9.76013 9.92726 9.63469C9.99992 9.49208 9.99992 9.3054 9.99992 8.93203V7.06537C9.99992 6.692 9.99992 6.50531 9.92726 6.3627C9.86334 6.23726 9.76135 6.13528 9.63591 6.07136C9.4933 5.9987 9.30662 5.9987 8.93325 5.9987H7.06659C6.69322 5.9987 6.50653 5.9987 6.36393 6.07136C6.23848 6.13528 6.1365 6.23726 6.07258 6.3627C5.99992 6.50531 5.99992 6.692 5.99992 7.06537V8.93203C5.99992 9.3054 5.99992 9.49208 6.07258 9.63469C6.1365 9.76013 6.23848 9.86212 6.36393 9.92604C6.50653 9.9987 6.69322 9.9987 7.06659 9.9987Z"
                              stroke="url(#paint0_linear_1849_18814)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_1849_18814"
                              x1="2.1182"
                              y1="1.33203"
                              x2="16.3943"
                              y2="3.42784"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3B005F" />
                              <stop offset="1" stop-color="#1466B1" />
                            </linearGradient>
                            <clipPath id="clip0_1849_18814">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper">Helper</p>
                      </button>

                      <button
                        className="ToolSubmit"
                        onClick={() => navigate("/In")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18817)">
                            <path
                              d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18817">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Submit</p>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {groupbutton === 1 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: 1.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen2(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M1.61342 8.47415C1.52262 8.33039 1.47723 8.25851 1.45182 8.14764C1.43273 8.06436 1.43273 7.93303 1.45182 7.84975C1.47723 7.73889 1.52262 7.66701 1.61341 7.52325C2.36369 6.33526 4.59693 3.33203 8.00027 3.33203C11.4036 3.33203 13.6369 6.33526 14.3871 7.52325C14.4779 7.66701 14.5233 7.73889 14.5487 7.84975C14.5678 7.93303 14.5678 8.06436 14.5487 8.14764C14.5233 8.25851 14.4779 8.33039 14.3871 8.47415C13.6369 9.66214 11.4036 12.6654 8.00027 12.6654C4.59693 12.6654 2.36369 9.66214 1.61342 8.47415Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.00027 9.9987C9.10484 9.9987 10.0003 9.10327 10.0003 7.9987C10.0003 6.89413 9.10484 5.9987 8.00027 5.9987C6.8957 5.9987 6.00027 6.89413 6.00027 7.9987C6.00027 9.10327 6.8957 9.9987 8.00027 9.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : 12345 </p>
                      <p>File: 49.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen3(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M1.61342 8.47415C1.52262 8.33039 1.47723 8.25851 1.45182 8.14764C1.43273 8.06436 1.43273 7.93303 1.45182 7.84975C1.47723 7.73889 1.52262 7.66701 1.61341 7.52325C2.36369 6.33526 4.59693 3.33203 8.00027 3.33203C11.4036 3.33203 13.6369 6.33526 14.3871 7.52325C14.4779 7.66701 14.5233 7.73889 14.5487 7.84975C14.5678 7.93303 14.5678 8.06436 14.5487 8.14764C14.5233 8.25851 14.4779 8.33039 14.3871 8.47415C13.6369 9.66214 11.4036 12.6654 8.00027 12.6654C4.59693 12.6654 2.36369 9.66214 1.61342 8.47415Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.00027 9.9987C9.10484 9.9987 10.0003 9.10327 10.0003 7.9987C10.0003 6.89413 9.10484 5.9987 8.00027 5.9987C6.8957 5.9987 6.00027 6.89413 6.00027 7.9987C6.00027 9.10327 6.8957 9.9987 8.00027 9.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: dii.jpg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonOpenFile"
                        onClick={() => setOpen4(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M1.61342 8.47415C1.52262 8.33039 1.47723 8.25851 1.45182 8.14764C1.43273 8.06436 1.43273 7.93303 1.45182 7.84975C1.47723 7.73889 1.52262 7.66701 1.61341 7.52325C2.36369 6.33526 4.59693 3.33203 8.00027 3.33203C11.4036 3.33203 13.6369 6.33526 14.3871 7.52325C14.4779 7.66701 14.5233 7.73889 14.5487 7.84975C14.5678 7.93303 14.5678 8.06436 14.5487 8.14764C14.5233 8.25851 14.4779 8.33039 14.3871 8.47415C13.6369 9.66214 11.4036 12.6654 8.00027 12.6654C4.59693 12.6654 2.36369 9.66214 1.61342 8.47415Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.00027 9.9987C9.10484 9.9987 10.0003 9.10327 10.0003 7.9987C10.0003 6.89413 9.10484 5.9987 8.00027 5.9987C6.8957 5.9987 6.00027 6.89413 6.00027 7.9987C6.00027 9.10327 6.8957 9.9987 8.00027 9.9987Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>Open File</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <SunEditor
                  height="56vh"
                  // className="SunEditor2"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
              </div>
            ) : screen === 3 ? (
              <div className="BoxSunEditor">
                <div className="ToolHaed4">
                  <div className="ToolInHaed4">
                    <p className="ToolInHaed4text1">Tools</p>
                    <p className="ToolInHaed4text2">/ THOG0024534</p>
                  </div>

                  {groupbutton === 1 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 2 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(1)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>

                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(3)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 3 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>

                      <button
                        className="ToolSubmit"
                        onClick={() => navigate("/In")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18817)">
                            <path
                              d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18817">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Submit</p>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {groupbutton === 1 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: 1.jpeg</p>
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : 12345 </p>
                      <p>File: 49.jpeg</p>
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: dii.jpg</p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {groupbutton === 1 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test} alt="img" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test2} alt="img2" className="ToolTest2" />
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test3} alt="img3" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test4} alt="img4" className="ToolTest2" />
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="Toolbobywork">
                    <div className="ToolSelectfile">
                      <img src={Test5} alt="img3" className="ToolTest" />
                    </div>
                    <div className="ToolSelectfile">
                      <img src={Test6} alt="img4" className="ToolTest2" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {option === "1" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton2"
                    >
                      Option 1
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p>Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p>Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p> Option 4</p>
                    </button>
                    <button
                      className="ToolbuttonEdit"
                      onClick={() => setScreen("4")}
                    >
                      Edit
                    </button>
                  </div>
                ) : option === "2" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p> Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton2"
                    >
                      Option 2
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p>Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p>Option 4</p>
                    </button>
                    <button
                      className="ToolbuttonEdit"
                      onClick={() => setScreen("4")}
                    >
                      Edit
                    </button>
                  </div>
                ) : option === "3" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p>Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p> Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton2"
                    >
                      Option 3
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton"
                    >
                      <p> Option 4</p>
                    </button>
                    <button
                      className="ToolbuttonEdit"
                      onClick={() => setScreen("4")}
                    >
                      Edit
                    </button>
                  </div>
                ) : option === "4" ? (
                  <div className="rowbuttonTools">
                    <button
                      onClick={() => setOption("1")}
                      className="Toolsbutton"
                    >
                      <p> Option 1</p>
                    </button>
                    <button
                      onClick={() => setOption("2")}
                      className="Toolsbutton"
                    >
                      <p> Option 2</p>
                    </button>
                    <button
                      onClick={() => setOption("3")}
                      className="Toolsbutton"
                    >
                      <p> Option 3</p>
                    </button>
                    <button
                      onClick={() => setOption("4")}
                      className="Toolsbutton2"
                    >
                      Option 4
                    </button>
                    <button
                      className="ToolbuttonEdit"
                      onClick={() => setScreen("4")}
                    >
                      Edit
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="BoxSunEditor">
                <div className="ToolHaed4">
                  <div className="ToolInHaed4">
                    <p className="ToolInHaed4text1">Tools</p>
                    <p className="ToolInHaed4text2">/ THOG0024534</p>
                  </div>
                  {groupbutton === 1 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 2 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(1)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>

                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(3)}
                      >
                        <p>Next</p>
                      </button>
                    </div>
                  ) : groupbutton === 3 ? (
                    <div style={{ display: "flex" }}>
                      <button
                        className="ToolbuttonNext"
                        onClick={() => setGroupbutton(2)}
                      >
                        <p>Back</p>
                      </button>

                      <button
                        className="ToolHelper2"
                        onClick={() => setScreen(3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_6985)">
                            <path
                              d="M5.9987 1.33594V2.66927M9.9987 1.33594V2.66927M5.9987 13.3359V14.6693M9.9987 13.3359V14.6693M13.332 6.0026H14.6654M13.332 9.33594H14.6654M1.33203 6.0026H2.66536M1.33203 9.33594H2.66536M5.86536 13.3359H10.132C11.2521 13.3359 11.8122 13.3359 12.24 13.118C12.6163 12.9262 12.9223 12.6202 13.114 12.2439C13.332 11.8161 13.332 11.256 13.332 10.1359V5.86927C13.332 4.74917 13.332 4.18911 13.114 3.76129C12.9223 3.38497 12.6163 3.079 12.24 2.88726C11.8122 2.66927 11.2521 2.66927 10.132 2.66927H5.86536C4.74526 2.66927 4.18521 2.66927 3.75738 2.88726C3.38106 3.079 3.0751 3.38497 2.88335 3.76129C2.66536 4.18911 2.66536 4.74917 2.66536 5.86927V10.1359C2.66536 11.256 2.66536 11.8161 2.88335 12.2439C3.0751 12.6202 3.38106 12.9262 3.75738 13.118C4.18521 13.3359 4.74526 13.3359 5.86536 13.3359ZM7.06537 10.0026H8.93203C9.3054 10.0026 9.49208 10.0026 9.63469 9.92994C9.76013 9.86603 9.86212 9.76404 9.92604 9.6386C9.9987 9.49599 9.9987 9.30931 9.9987 8.93594V7.06927C9.9987 6.6959 9.9987 6.50922 9.92604 6.36661C9.86212 6.24117 9.76013 6.13918 9.63469 6.07527C9.49208 6.0026 9.3054 6.0026 8.93203 6.0026H7.06537C6.692 6.0026 6.50531 6.0026 6.3627 6.07527C6.23726 6.13918 6.13528 6.24117 6.07136 6.36661C5.9987 6.50922 5.9987 6.6959 5.9987 7.06927V8.93594C5.9987 9.30931 5.9987 9.49599 6.07136 9.6386C6.13528 9.76404 6.23726 9.86603 6.3627 9.92994C6.50531 10.0026 6.692 10.0026 7.06537 10.0026Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_6985">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="TooltextHelper2">Helper</p>
                      </button>

                      <button
                        className="ToolSubmit"
                        onClick={() => navigate("/In")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1849_18817)">
                            <path
                              d="M4.99992 7.9987L6.99992 9.9987L10.9999 5.9987M14.6666 7.9987C14.6666 11.6806 11.6818 14.6654 7.99992 14.6654C4.31802 14.6654 1.33325 11.6806 1.33325 7.9987C1.33325 4.3168 4.31802 1.33203 7.99992 1.33203C11.6818 1.33203 14.6666 4.3168 14.6666 7.9987Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1849_18817">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Submit</p>
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                {groupbutton === 1 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: 1.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonDownloadFile"
                        onClick={() => setOjc(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_7431)">
                            <path
                              d="M5.33203 8.00379L7.9987 10.6705M7.9987 10.6705L10.6654 8.00379M7.9987 10.6705V4.53712C7.9987 3.60998 7.9987 3.14641 7.63169 2.62738C7.38784 2.28253 6.68575 1.8569 6.26722 1.8002C5.63729 1.71485 5.39808 1.83964 4.91965 2.08921C2.78759 3.20141 1.33203 5.43261 1.33203 8.00379C1.33203 11.6857 4.3168 14.6705 7.9987 14.6705C11.6806 14.6705 14.6654 11.6857 14.6654 8.00379C14.6654 5.53618 13.3247 3.3817 11.332 2.229"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_7431">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <a href="../../Images/outputImage1.jpg" download>
                          Download File
                        </a>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 2 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : 12345 </p>
                      <p>File: 49.jpeg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonDownloadFile"
                        // onClick={() => setOpen3(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_7431)">
                            <path
                              d="M5.33203 8.00379L7.9987 10.6705M7.9987 10.6705L10.6654 8.00379M7.9987 10.6705V4.53712C7.9987 3.60998 7.9987 3.14641 7.63169 2.62738C7.38784 2.28253 6.68575 1.8569 6.26722 1.8002C5.63729 1.71485 5.39808 1.83964 4.91965 2.08921C2.78759 3.20141 1.33203 5.43261 1.33203 8.00379C1.33203 11.6857 4.3168 14.6705 7.9987 14.6705C11.6806 14.6705 14.6654 11.6857 14.6654 8.00379C14.6654 5.53618 13.3247 3.3817 11.332 2.229"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_7431">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <a href="../../Images/outputImage2.jpg" download>
                          Download File
                        </a>
                      </button>
                    </div>
                  </div>
                ) : groupbutton === 3 ? (
                  <div className="ToolHaed3_1">
                    <div className="ToolHaed2">
                      <div>
                        <p className="TextHTool">Article</p>
                      </div>
                      <p>Timeline : 2023/9/15 </p>
                      <p>Detail : - </p>
                      <p>File: dii.jpg</p>
                    </div>
                    <div>
                      <button
                        className="ToolbuttonDownloadFile"
                        onClick={() => setOjc(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2420_7431)">
                            <path
                              d="M5.33203 8.00379L7.9987 10.6705M7.9987 10.6705L10.6654 8.00379M7.9987 10.6705V4.53712C7.9987 3.60998 7.9987 3.14641 7.63169 2.62738C7.38784 2.28253 6.68575 1.8569 6.26722 1.8002C5.63729 1.71485 5.39808 1.83964 4.91965 2.08921C2.78759 3.20141 1.33203 5.43261 1.33203 8.00379C1.33203 11.6857 4.3168 14.6705 7.9987 14.6705C11.6806 14.6705 14.6654 11.6857 14.6654 8.00379C14.6654 5.53618 13.3247 3.3817 11.332 2.229"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2420_7431">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <a href="../../Images/outputImage3.jpg" download>
                          Download File
                        </a>
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <img src={ToolText} alt="ToolText" className="ToolText" />
                {Ojc === false ? (
                  <div>
                    {groupbutton === 1 ? (
                      <div className="Toolbobywork">
                        <div className="ToolSelectfile2">
                          <img src={Test2} alt="img2" className="ToolTest3" />
                        </div>
                      </div>
                    ) : groupbutton === 2 ? (
                      <div className="Toolbobywork">
                        <div className="ToolSelectfile2">
                          <img src={Test4} alt="img4" className="ToolTest3" />
                        </div>
                      </div>
                    ) : groupbutton === 3 ? (
                      <div className="Toolbobywork">
                        <div className="ToolSelectfile2">
                          <img src={Test6} alt="img4" className="ToolTest3" />
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <button className="ToolSelectFileBox">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 17L12 21M12 21L16 17M12 21V12"
                        stroke="#A4A4A4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          <Modal
            open={typeOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal">
              <button className="BoxModalButton" onClick={() => TEXT_SCAN()}>
                <p>TEXT SCAN</p>
                <br />
                <ImTextColor className="ImTextColor" />
              </button>

              <button
                className="BoxModalButton"
                style={{
                  color: "beige",
                  border: "1px solid",
                }}
              >
                <p>IMAGE SCAN</p>
                <br />
                <FaRegFileImage className="ImTextColor" />
              </button>
            </Box>
          </Modal>

          <Modal
            open={open2}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen2(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open3}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test3} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen3(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open4}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>File: </p>
              </div>

              <div
                style={{
                  width: " 100%",
                  height: "500px",
                  background: " #F6FBFE",
                  border: "1px solid #E5E5E5",
                  borderRadius: 5,
                  textAlign: "start",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Test5} alt="Test" className="ToolTest2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginTop: 10,
                    alignContent: "center",
                  }}
                  onClick={() => setOpen4(false)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Result</p>
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginBottom: 5,
                  }}
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              {option === "4" ? (
                <textarea
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p></p>
                </textarea>
              ) : (
                <div
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p>{result}</p>
                </div>
              )}

              {option === "1" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton2"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "2" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton2"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "3" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton2"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "4" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton2"
                  >
                    Option 4
                  </button>
                </div>
              ) : null}
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  );
}
export default Tool;
