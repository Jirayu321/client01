import * as React from "react";

import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";

import { data, data2, data2_2, data3, data4, data5 } from "../Data/data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  IconButton,
  Input,
  TextField,
  Autocomplete,
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Modal,
  Typography,
  InputAdornment,
  Badge,
  Alert,
  Collapse,
  AlertTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";

import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

import {
  IoMdAddCircleOutline,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

// import Cards from "./Cards.js";

import Logo from "../../logo.svg";
import Fileimg from "../../Images/file.png";
import languages from "../../Images/languages.png";
import rating from "../../Images/Rating.png";
import skills from "../../Images/skills.png";
import card from "../../Images/card.png";
import MobileBanking from "../../Images/MobileBanking.png";
// import Gpay from "../../Images/Gpay.png";
import Gpay2 from "../../Images/Gpay2.png";
import Promptpay from "../../Images/Promptpay.png";

import {
  CustomerEN,
  //  CustomerDE,
  //  CustomerTH
} from "../Data/DataLanguage";

// card
import Card from "react-credit-cards-2";
import Payment from "payment";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import styles from "./Customer.module.css";

const Customer = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  const [promo, setPromo] = React.useState(""); //Promo code คือเปิดตัวด้านล่าง
  const [documentType, setDocumentType] = React.useState("");

  function getCurrentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return `${month}/${day}/${year}`;
  }

  const [from, setFrom] = React.useState({
    file: "",
    document_Type: "",
    translation_Type: "",
    tranfrom: "",
    tranto: "",
    Deadline: getCurrentDate(),
    Additional_explanation: "",
    type: "",
    Price: generatePrice(),
    orderNumber: "",
  });

  const [groupData, setGroupData] = React.useState(null); //เก็บข้อมูลทั้งหมดที่เราเพิ่มเข้ามา
  const [countButtons, setcCountButtons] = React.useState(0);
  const [page, setPage] = React.useState(1);
  let count = groupData?.length; //นับจำนวนข้อมูลทั้งหมดที่เราเพิ่มเข้ามา

  const [checked, setChecked] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  });

  const [open, setOpen] = React.useState(false); // alert
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const [delete_data, setDelete_data] = React.useState(false);
  const [openModel, setopenModel] = React.useState({
    openModel1: false,
    openModel2: false,
    openModel3: false,
    openModel4: false,
    openModel5: false,
  });

  const [choose, setChoose] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (groupData === null) {
      console.log("Data:", groupData);
      // window.scrollTo(0, 10);
    } else {
      console.log("add_Data", groupData);
    }
  }, [groupData]);

  const handleDateChange = (date) => {
    setFrom((prevFrom) => ({
      ...prevFrom,
      Deadline: date,
    }));
  };

  function chagngeDataPage(x, y) {
    if (groupData !== null) {
      let index = x - 1;
      console.log(
        "chagngeDataPage",
        "index:",
        index,
        "pageed:",
        page,
        "countButtons:",
        countButtons,
        "count:",
        count,
        "groupData:",
        groupData
      );
      let file = groupData[index]?.file;
      let document_Type = groupData[index]?.document_Type;
      let translation_Type = groupData[index]?.translation_Type;
      let tranfrom = groupData[index]?.tranfrom;
      let tranto = groupData[index]?.tranto;
      let Deadline = groupData[index]?.Deadline;
      let Additional_explanation = groupData[index]?.Additional_explanation;

      if (y === 1) {
        console.log("สดใหม่");
        setFrom({
          file: "",
          document_Type: "",
          translation_Type: "",
          tranfrom: "",
          tranto: "",
          Deadline: getCurrentDate(),
          Additional_explanation: "",
          type: "",
          Price: "",
        });
        setPage(x);
      } else if (y === 0) {
        console.log("เปลี่ยนหน้า");
        if (typeof translation_Type !== "undefined") {
          console.log("66", Additional_explanation, index);
          let j = page - 1;
          let z = groupData[j]?.Additional_explanation;
          if (typeof z !== "undefined") {
            console.log("5555", z);
            setFrom({
              file: file,
              document_Type: document_Type,
              translation_Type: translation_Type,
              tranfrom: tranfrom,
              tranto: tranto,
              Deadline: Deadline,
              Additional_explanation: Additional_explanation,
              type: "",
              Price: "",
              orderNumber: "",
            });
            setPage(x);
          } else {
            setGroupData([...groupData, from]);
            setFrom({
              file: file,
              document_Type: document_Type,
              translation_Type: translation_Type,
              tranfrom: tranfrom,
              tranto: tranto,
              Deadline: Deadline,
              Additional_explanation: Additional_explanation,
              type: "",
              Price: "",
              orderNumber: "",
            });
            setPage(x);
          }
        } else {
          console.log("777");
          setGroupData([...groupData, from]);
          // console.log("groupData", groupData);
          setPage(x);
        }
      } else {
        console.log("อื่นๆ");
        if (typeof file === "undefined") {
          setFrom({
            file: "",
            document_Type: "",
            translation_Type: "",
            tranfrom: "",
            tranto: "",
            Deadline: getCurrentDate(),
            Additional_explanation: "",
            type: "",
            Price: "",
          });
          setPage(x);
        } else {
          setFrom({
            file: file,
            document_Type: document_Type,
            translation_Type: translation_Type,
            tranfrom: tranfrom,
            tranto: tranto,
            Deadline: Deadline,
            Additional_explanation: Additional_explanation,
            type: "",
            Price: "",
            orderNumber: "",
          });
          setPage(x);
        }
      }
    } else {
      setGroupData([from]);
      setPage(x);
    }
  }

  function Add_data() {
    if (countButtons === 0) {
      let x = countButtons + 2;
      setcCountButtons(x);
      if (groupData === null) {
        setGroupData([from]);
        setFrom({
          file: "",
          document_Type: "",
          translation_Type: "",
          tranfrom: "",
          tranto: "",
          Deadline: getCurrentDate(),
          Additional_explanation: "",
          type: "",
          Price: "",
          orderNumber: "",
        });
        chagngeDataPage(2, 0);
      } else {
        setGroupData([...groupData, from]);
        let x = page + 1;
        chagngeDataPage(x, 1);
      }
    } else {
      let x = countButtons + 1;
      setGroupData([...groupData, from]);
      let y = page + 1;
      chagngeDataPage(y, 1);
      setcCountButtons(x);
    }
  }

  const createButtons = () => {
    let buttons = [];
    let someCondition = countButtons;
    for (let i = 0; i < someCondition; i++) {
      const buttonNumber = i + 1;
      const isCurrentPage = buttonNumber === page;
      const buttonStyle = isCurrentPage
        ? styles.buttonArrow2
        : styles.buttonArrow;
      buttons.push(
        <button
          key={i}
          className={buttonStyle}
          onClick={() => chagngeDataPage(buttonNumber, 0)}
        >
          {buttonNumber}
        </button>
      );
    }

    return buttons;
  };

  function Delete_data(e) {
    let x = e - 1; //เลือกตำแหน่งข้อมูลที่เราเลือก
    groupData.splice(x, 1); //ลบข้อมูลที่เราเลือก
    let d = groupData?.length;
    if (countButtons === 1) {
      setPage(1);
      setcCountButtons(1);
    } else {
      if (countButtons === 0) {
        setPage(1);
        setcCountButtons(1);
      } else {
        if (delete_data === false) {
          let z = page - 1;
          let y = countButtons;
          console.log("false", y);
          if (page < y) {
            chagngeDataPage(countButtons - 1, 2);
            setGroupData([...groupData, from]);
            setcCountButtons(d + 1);
          } else {
            chagngeDataPage(z, 2);
            setcCountButtons(d);
          }
          setDelete_data(true);
        } else {
          console.log("true");
          let z = page - 1;
          chagngeDataPage(z, 2);
          setcCountButtons(d);
        }
      }
    }
  }

  function switch_page(x) {
    let z = page + 1;
    if (x === "next") {
      if (countButtons === 0) {
        setPage(1);
      } else {
        if (page === countButtons) {
          chagngeDataPage(page, 0);
        } else {
          chagngeDataPage(z, 0);
        }
      }
    } else if (x === "back") {
      if (page === 1) {
        setPage(1);
      } else {
        let y = page - 1;
        chagngeDataPage(y, 0);
      }
    }
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  function promotion(x) {
    let y = from?.translation_Type;
    let h = height * 2.3;
    if (y) {
      if (groupData === null) {
        setPromo(x);
        window.scrollTo(0, h);
      } else {
        setGroupData([...groupData, from]);
        setPromo(x);
        window.scrollTo(0, h);
      }
    }
  }

  const goSignup = () => {
    navigate("/Signup");
  };

  const cutsting = (x) => {
    // console.log(x);
    if (x !== undefined) {
      return x.slice(0, 30);
    } else {
      setFrom({ ...from, file: "" });
    }
  };

  function generatePrice() {
    const PriceCount = (Math.floor(Math.random() * 999) + 1).toString();

    return PriceCount + "฿";
  }

  function generateOrderNumber(length) {
    // Generate a random number
    let orderNumber = Math.floor(Math.random() * Math.pow(10, length));

    // Pad the number with zeroes
    return orderNumber.toString().padStart(length, "0");
  }

  function sendEmail() {
    const datatext = {
      email: email,
      subject: "Thank you.",
      message: "Your payment has been successfully processed.",
    };
    emailjs
      .send(
        "service_u5757dr",
        "template_dueh1d9",
        datatext,
        "BikYNuNxSh4MGJ69-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function OpneMode(x) {
    // console.log("x:", x);
    if (x === 1) {
      setFrom({
        ...from,
        Price: generatePrice(),
        orderNumber: generateOrderNumber(12),
      });
      window.scroll(0, 0);
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
        setopenModel({
          ...openModel,
          openModel1: true,
        });
      }, 3000);
    } else if (x === 2) {
      setopenModel({
        ...openModel,
        openModel2: true,
      });
    } else if (x === 3) {
      if (choose === true) {
        setopenModel({
          ...openModel,
          openModel3: true,
        });
      }
    } else if (x === 4) {
      setopenModel({
        ...openModel,
        openModel1: false,
        openModel2: false,
        openModel3: false,
        openModel4: true,
      });
    } else if (x === 5) {
      if (email !== "") {
        sendEmail();
        setopenModel({
          ...openModel,
          openModel4: false,
          openModel5: true,
        });
      }
    } else if (x === 6) {
      setopenModel({
        ...openModel,
        openModel5: false,
      });
      navigate("/");
    } else if (x === "back to receipt") {
      setopenModel({
        ...openModel,
        openModel2: false,
      });
      setChoose(false);
    } else if (x === "back to Payment") {
      setChoose(false);
      setopenModel({
        ...openModel,
        openModel3: false,
      });
    }
  }

  function generatetTransactionNo() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = () => chars[Math.floor(Math.random() * chars.length)];

    const letters = randomLetter() + randomLetter();
    const language = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");

    const orderCount = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    let x = letters + language + orderCount;
    // setFrom([{ ...from, orderNumber: x }]);
    // console.log(from.orderNumber);
    return x;
  }

  const Cards = () => {
    // Define the initial state of the form and create a reference to the form.
    const [state, setState] = React.useState({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      issuer: "",
      focused: "",
      formData: null,
    });
    const formRef = React.useRef();

    // Function to remove all non-numeric characters from a string.
    function clearNumber(value = "") {
      return value.replace(/\D+/g, "");
    }

    // Function to format a credit card number based on the card issuer.
    function formatCreditCardNumber(value) {
      if (!value) {
        return value;
      }

      // Determine the type of the card based on the number.
      const issuer = Payment.fns.cardType(value);
      const clearValue = clearNumber(value);
      let nextValue;

      switch (issuer) {
        case "amex":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            10
          )} ${clearValue.slice(10, 15)}`;
          break;
        case "dinersclub":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            10
          )} ${clearValue.slice(10, 14)}`;
          break;
        case null:
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            8
          )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
          break;
        default:
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
            4,
            8
          )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
          break;
      }
      console.log("222 :", nextValue, "issuer", issuer);
      return nextValue.trim();
    }

    // Function to limit the length of the CVC based on the card issuer.
    function formatCVC(value, prevValue, allValues = {}) {
      const clearValue = clearNumber(value);
      let maxLength = 4;
      if (allValues.number) {
        const issuer = Payment.fns.cardType(allValues.number);
        maxLength = issuer === "amex" ? 4 : 3;
      }
      return clearValue.slice(0, maxLength);
    }

    // Function to format the expiration date.
    function formatExpirationDate(value) {
      const clearValue = clearNumber(value);
      if (clearValue.length >= 3) {
        return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
      }
      return clearValue;
    }

    // Function to prepare the form data for display.
    // function formatFormData(data) {
    //   return Object.keys(data).map((d) => `${d}: ${data[d]}`);
    // }

    // // Function to handle input focus.
    const handleInputFocus = ({ target }) => {
      setState((prevState) => ({ ...prevState, focused: target.name }));
    };

    // Function to handle changes to the input values.
    const handleInputChange = ({ target }) => {
      let value = target.value;
      if (target.name === "number") {
        value = formatCreditCardNumber(value);
      } else if (target.name === "expiry") {
        value = formatExpirationDate(value);
      } else if (target.name === "cvc") {
        value = formatCVC(value);
      }

      // Update the state with the new value.
      setState((prevState) => ({ ...prevState, [target.name]: value }));
    };

    // Function to handle form submission.
    const handleSubmit = (e) => {
      e.preventDefault();
      // const namePattern = /^[A-Za-z\s]+$/;
      // if (!namePattern.test(state.name)) {
      //   alert('Name must only contain letters.');
      //   return;
      // }
      const formData = [...e.target.elements]
        .filter((d) => d.name)
        .reduce((acc, d) => {
          acc[d.name] = d.value;
          OpneMode(4);
          return acc;
        }, {});

      // Reset the form and update the state with the form data.
      setState((prevState) => ({ ...prevState, formData }));
      formRef.current.reset();
    };

    // Render the form and credit card preview.
    return (
      <div key="Payment">
        <div className={styles.App_payment}>
          <Card
            number={state?.number}
            name={state?.name}
            expiry={state?.expiry}
            cvc={state?.cvc}
            focused={state?.focused}
            // callback={handleCallback}
          />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.formboxModalcard}
          >
            <div className={styles.form_group}>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d\s]{16,22}"
                required
                maxLength={19}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                pattern="[A-Za-z\s]+"
                required
                maxLength={45}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={state?.name}
              />
            </div>
            <div className={styles.form_group2}>
              <div className={styles.cvc}>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={state?.expiry}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={state?.cvc}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={state?.issuer} />

            <div id="keep-mounted-modal-description">
              <div className={styles.buttonboxModalcard}>
                <button
                  className={styles.buttonModel1}
                  // onClick={() => OpneMode(4)}
                  type="submit"
                  value="Submit"
                >
                  Pay
                </button>
                <button
                  className={styles.buttonModel1_2}
                  onClick={() => OpneMode("back to Payment")}
                >
                  Back to Payment
                </button>
              </div>
            </div>
          </form>
          {/* {state?.formData && (
            <div className="App-highlight">
              {formatFormData(state?.formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={styles.App_header}>
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
      {width > 768 ? (
        <>
          {/* Modal */}
          {/* Receipt */}
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
            <Box className={styles.ModalReceipt}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  // borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>
                  Receipt confirming the order of translation
                </p>
              </div>

              <div className={styles.borderReceipt}></div>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "left",
                  overflowY: "auto",
                }}
              >
                {groupData ? (
                  <>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Ref Number</p>
                      <p className={styles.H_Model2}>
                        {groupData[0]?.orderNumber}
                      </p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Date</p>
                      <p className={styles.H_Model2}>
                        {groupData[0]?.Deadline}
                      </p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translator</p>
                      <p className={styles.H_Model2}>Habi Yang</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Ref Number</p>
                      <p className={styles.H_Model2}>000088874612</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Date</p>
                      <p className={styles.H_Model2}>07-12-2023</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translator</p>
                      <p className={styles.H_Model2}>Habi Yang</p>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.borderReceipt}></div>
              {groupData ? (
                <>
                  <div
                    // key={index}
                    id="keep-mounted-modal-description"
                    className={styles.DetailModalReceipt}
                  >
                    {groupData?.map((item, index) => (
                      <div key={index}>
                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model2}>Order {index + 1}</p>
                          <p className={styles.H_Model}></p>
                        </div>
                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Document Type</p>
                          <p className={styles.H_Model2}>
                            {item?.document_Type}
                          </p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Translation Type</p>
                          <p className={styles.H_Model2}>
                            {item?.translation_Type}
                          </p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Translate to</p>
                          <p className={styles.H_Model2}>{item?.tranto}</p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>
                            Additional explanation
                          </p>
                          <p className={styles.H_Model2}>
                            {item?.Additional_explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.borderReceipt}></div>
                  <div className={styles.Box_detailH_Model2}>
                    <p className={styles.H_Model}>TOTAL :</p>
                    <p className={styles.H_Model3}>{from?.Price}</p>
                  </div>

                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(2)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() =>
                      setopenModel({
                        ...openModel,
                        openModel1: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <div
                    id="keep-mounted-modal-description"
                    className={styles.DetailModalReceipt}
                  >
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model2}>Order 1</p>
                      <p className={styles.H_Model}></p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Document Type</p>
                      <p className={styles.H_Model2}>{from?.document_Type}</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translation Type</p>
                      <p className={styles.H_Model2}>
                        {from?.translation_Type}
                      </p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translate to</p>
                      <p className={styles.H_Model2}>{from?.tranto}</p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Additional explanation</p>
                      <p className={styles.H_Model2}>
                        {from?.Additional_explanation}
                      </p>
                    </div>
                  </div>

                  <div className={styles.borderReceipt}></div>
                  <div className={styles.Box_detailH_Model2}>
                    <p className={styles.H_Model}>TOTAL :</p>
                    <p className={styles.H_Model3}>{from?.Price}</p>
                  </div>

                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(2)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() =>
                      setopenModel({
                        ...openModel,
                        openModel1: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                </>
              )}
            </Box>
          </Modal>

          {/* Payment */}
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
            <Box className={styles.ModalBoxPayment}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Payment</p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div id="keep-mounted-modal-description">
                <div>
                  <div className={styles.boxpayment}>
                    {choose === false ? (
                      <button
                        className={styles.cardpayment}
                        onClick={() => setChoose(true)}
                      >
                        <img src={card} alt="card" />
                        <p>card</p>
                      </button>
                    ) : (
                      <button
                        className={styles.cardpayment3}
                        onClick={() => setChoose(false)}
                      >
                        <img src={card} alt="card" />
                        <p>card</p>
                      </button>
                    )}

                    <button className={styles.cardpayment2}>
                      <img src={MobileBanking} alt="MobileBanking" />
                      <p>Mobile Banking</p>
                    </button>
                    <button className={styles.cardpayment2}>
                      <img src={Promptpay} alt="Promptpay" />
                      <p>Prompt pay</p>
                    </button>
                    <button className={styles.cardpayment2}>
                      <img src={Gpay2} alt="Gpay" />
                      <p>Google Pay</p>
                    </button>
                  </div>
                  {/* <div className={styles.boxpayment}>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
            </div>
            <div className={styles.boxpayment}>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
              <div className={styles.cardpayment}>
                <img src={card} alt="card" />
                <p>card</p>
              </div>
            </div> */}
                </div>
                <div className={styles.BoxbuttonModalBoxPayment}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(3)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() => OpneMode("back to receipt")}
                  >
                    Back to Receipt
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* card */}
          <Modal
            hideBackdrop
            open={openModel?.openModel3}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel3: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalcard}>
              <Typography
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
              </Typography>
              <Cards />
              {/* <div id="keep-mounted-modal-description">
          <div style={{ position: "relative", top: "15px" }}>
            <button
              className={styles.buttonModel1}
              onClick={() => OpneMode(4)}
            >
              Pay
            </button>
            <button
              className={styles.buttonModel1_2}
              onClick={() => OpneMode("back to Payment")}
            >
              Back to Payment
            </button>
          </div>
        </div> */}
            </Box>
          </Modal>

          {/*  email to track */}
          <Modal
            hideBackdrop
            open={openModel?.openModel4}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel4: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalEmailToTrack}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  // borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Enter your email</p>
                <p className={styles.H_text02}>
                  Please enter your email to track and receive your order.
                </p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div style={{ marginTop: 25 }}>
                <div>
                  <p className={styles.H_text03}>Email</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>
              </div>
              <div id="keep-mounted-modal-description">
                <div style={{ position: "relative", top: "15px" }}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(5)}
                  >
                    Sent
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* Thank you */}
          <Modal
            hideBackdrop
            open={openModel?.openModel5}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel5: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalThankyou}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Thank you.</p>
                <p className={styles.H_text02}>
                  Your payment has been successfully processed.
                </p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div>
                <div style={{ margin: 25 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",
                      fontFamily: "DBHeavent",
                    }}
                  >
                    TRANSACTION NO.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",
                      fontFamily: "DBHeaventLi",
                    }}
                  >
                    {generatetTransactionNo()}
                  </p>
                </div>
                <div style={{ margin: 25 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",

                      fontFamily: "DBHeavent",
                    }}
                  >
                    AMOUNT
                  </p>
                  {groupData ? (
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",

                        fontFamily: "DBHeaventLi",
                      }}
                    >
                      {groupData[0]?.Price}
                    </p>
                  ) : (
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",

                        fontFamily: "DBHeaventLi",
                      }}
                    >
                      {groupData?.Price}
                    </p>
                  )}
                </div>
              </div>
              <div id="keep-mounted-modal-description">
                <div style={{ position: "relative", top: "15px" }}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(6)}
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* Alert */}
          <Box className={styles.BoxAlert}>
            <Collapse in={open}>
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                <AlertTitle>Please wait a moment.</AlertTitle>
                The translator is accepting your work
              </Alert>
            </Collapse>
          </Box>

          <>
            <div className={styles.backgroundfram1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.Boxbackgroundfram1}>
                  <div>
                    <p className={styles.Htext01}>{CustomerEN[0].label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p className={styles.Htext02}>{CustomerEN[1].label}</p>
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
            </div>

            <div>
              <div
                style={{ display: "grid", justifyItems: "center" }}
                className={styles.fram2}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  <p className={styles.textHeading2_overviwe}>YOUR ORDER</p>
                </div>

                <div className={styles.Boxfromdetail}>
                  {/* file */}
                  {from?.file === "" ? (
                    <div className={styles.Boxfile}>
                      <label
                        htmlFor="icon-button-file"
                        className={styles.labelBoxfile}
                      >
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            setFrom({ ...from, file: e.target.value })
                          }
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <img
                            src={Fileimg}
                            alt="Fileimg"
                            className={styles.BsFileEarmarkFill}
                          />
                        </IconButton>
                        <p>Upload File</p>
                      </label>
                    </div>
                  ) : (
                    <div className={styles.Boxfile}>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            setFrom({ ...from, file: e.target.value })
                          }
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 16,
                              color: "#B5B5B5",
                            }}
                          >
                            {cutsting(from?.file)}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  )}

                  {/* fromdetail */}
                  <div className={styles.fromdetail}>
                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[5].label}</p>
                      </div>
                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data2}
                        defaultValue={from?.document_Type}
                        autoHighlight
                        value={from?.document_Type}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            document_Type: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[4].label}</p>
                      </div>
                      {from?.document_Type === null ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          defaultValue={from?.translation_Type}
                          options={data5}
                          autoHighlight
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : from?.document_Type === "Official Document" ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          defaultValue={from?.translation_Type}
                          options={data4}
                          autoHighlight
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : from?.document_Type === "General Document" ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          options={data3}
                          autoHighlight
                          defaultValue={from?.translation_Type}
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          options={data5}
                          autoHighlight
                          defaultValue={from?.translation_Type}
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      )}
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[6].label}</p>
                      </div>

                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data}
                        autoHighlight
                        defaultValue={from?.tranfrom}
                        value={from?.tranfrom}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            tranfrom: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[7].label}</p>
                      </div>
                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data}
                        autoHighlight
                        defaultValue={from?.tranto}
                        value={from?.tranto}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            tranto: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>
                    {width >= 1400 ? (
                      <>
                        <div className={styles.Boxinput2}>
                          <div style={{ marginBottom: 10 }}>
                            <p className={styles.Htext03}>Deadline</p>
                          </div>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Date picker"
                              value={from?.Deadline}
                              onChange={handleDateChange}
                              open={openDatePicker}
                              onOpen={() => setOpenDatePicker(true)}
                              onClose={() => setOpenDatePicker(false)}
                              renderInput={(props) => (
                                <TextField
                                  {...props}
                                  className={styles.Autocomplete}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EventIcon
                                          onClick={() =>
                                            setOpenDatePicker(true)
                                          }
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                          <div className={styles.Boxinput}>
                            <div style={{ marginBottom: 10 }}>
                              <p className={styles.Htext03}>
                                Additional explanation
                              </p>
                            </div>
                            <textarea
                              value={from?.Additional_explanation}
                              onChange={(event, value) =>
                                setFrom({
                                  ...from,
                                  Additional_explanation: event.target.value,
                                })
                              }
                              maxLength={300}
                              className={styles.Additional_explanation}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.Boxinput}>
                          <div style={{ marginBottom: 10 }}>
                            <p className={styles.Htext03}>Deadline</p>
                          </div>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Date picker"
                              value={from?.Deadline}
                              onChange={handleDateChange}
                              open={openDatePicker}
                              onOpen={() => setOpenDatePicker(true)}
                              onClose={() => setOpenDatePicker(false)}
                              renderInput={(props) => (
                                <TextField
                                  {...props}
                                  className={styles.Autocomplete}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <EventIcon
                                          onClick={() =>
                                            setOpenDatePicker(true)
                                          }
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </div>

                        <div className={styles.Boxinput}>
                          <div style={{ marginBottom: 10 }}>
                            <p className={styles.Htext03}>
                              Additional explanation
                            </p>
                          </div>
                          <textarea
                            value={from?.Additional_explanation}
                            onChange={(event, value) =>
                              setFrom({
                                ...from,
                                Additional_explanation: event.target.value,
                              })
                            }
                            maxLength={300}
                            className={styles.Additional_explanation}
                          />
                        </div>
                      </>
                    )}

                    {/*button Delete page */}
                    {width >= 1400 ? (
                      <div className={styles.groupbuttonfromdetail}>
                        <div className={styles.buttonfromdetail}>
                          {page === 1 ? (
                            <></>
                          ) : (
                            <button
                              className={styles.buttonAddandDelete}
                              onClick={() => Delete_data(page)}
                            >
                              <RiDeleteBin5Fill style={{ color: " #f04438" }} />
                              <p className={styles.TextbuttonAddandDelete1}>
                                Delete
                              </p>
                            </button>
                          )}
                        </div>

                        <div className={styles.buttonfromdetail}>
                          <button
                            className={styles.buttonAddandDelete}
                            onClick={() => Add_data(page)}
                          >
                            <IoMdAddCircleOutline
                              style={{
                                color: "#3b005f",
                                fontSize: 20,
                              }}
                            />
                            <p className={styles.TextbuttonAddandDelete2}>
                              Add order
                            </p>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className={styles.buttonfromdetail}>
                          {page === 1 ? (
                            <></>
                          ) : (
                            <button
                              className={styles.buttonAddandDelete}
                              onClick={() => Delete_data(page)}
                            >
                              <RiDeleteBin5Fill style={{ color: " #f04438" }} />
                              <p className={styles.TextbuttonAddandDelete1}>
                                Delete
                              </p>
                            </button>
                          )}
                        </div>

                        <div className={styles.buttonfromdetail}>
                          <button
                            className={styles.buttonAddandDelete}
                            onClick={() => Add_data(page)}
                          >
                            <IoMdAddCircleOutline
                              style={{
                                color: "#3b005f",
                                fontSize: 20,
                              }}
                            />
                            <p className={styles.TextbuttonAddandDelete2}>
                              Add order
                            </p>
                          </button>
                        </div>
                      </>
                    )}

                    <div className={styles.Box_next2}>
                      <div className={styles.BoxNumber}>
                        <button
                          className={styles.buttonArrow}
                          onClick={() => switch_page("back")}
                        >
                          <IoIosArrowBack className={styles.icon1} />
                        </button>
                        {countButtons === 0 ? (
                          <button className={styles.buttonArrow2}>1</button>
                        ) : countButtons >= 1 ? (
                          <div>{createButtons()}</div>
                        ) : null}

                        <button
                          className={styles.buttonArrow}
                          onClick={() => switch_page("next")}
                        >
                          <IoIosArrowForward className={styles.icon1} />
                        </button>
                      </div>

                      <button
                        onClick={() => promotion(1)}
                        className={styles.Get_Quote}
                      >
                        <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                          {CustomerEN[11].label}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* promo */}
                {promo === 1 ? (
                  <div
                    style={{
                      width: width,
                    }}
                  >
                    <div className={styles.BoxPromo}>
                      <div className={styles.InBoxPromo}>
                        <div>
                          <p className={styles.textHeading2_overviwe2}>
                            Translator
                          </p>
                        </div>

                        <div className={styles.BoxFilter}>
                          <div className={styles.HtextBoxFilter}>
                            <div>
                              <p className={styles.Htext04}>
                                {CustomerEN[5].label}
                              </p>
                            </div>
                            <Autocomplete
                              id="country-select-demo"
                              className={styles.Autocomplete}
                              options={data2_2}
                              defaultValue={documentType}
                              autoHighlight
                              value={documentType}
                              onChange={(event, value) =>
                                setDocumentType(value?.label ? value.label : "")
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#333333",
                                    width: 30,
                                    height: 33,
                                  }}
                                />
                              }
                              renderOption={(props, option) => (
                                <Box
                                  component="li"
                                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                  {...props}
                                >
                                  {option.label}
                                </Box>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label={CustomerEN[9].label}
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: "new-password",
                                  }}
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </div>

                          <div className={styles.HtextBoxFilter}>
                            <p className={styles.Htext04}>Rating</p>

                            <div className={styles.BoxControStar}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked1}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked1: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="5 Star"
                                style={{ fontSize: 1 }}
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked2}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked2: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="4 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked3}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked3: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="3 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked4}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked4: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="2 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked5}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked5: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="1 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked6}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked6: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="No Rating"
                              />
                            </div>
                          </div>
                        </div>

                        <div className={styles.cardTranslator}>
                          <div>
                            <div
                              style={{
                                width: " 100%",
                                display: "grid",
                                justifyContent: "center",
                                textAlign: "center",
                                justifyItems: "center",
                              }}
                            >
                              <Stack direction="row" spacing={2}>
                                <StyledBadge
                                  overlap="circular"
                                  anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                  }}
                                  variant="dot"
                                >
                                  <FaUserCircle
                                    alt="avatar"
                                    className={styles.profile}
                                  />
                                </StyledBadge>
                              </Stack>
                              <p
                                style={{
                                  marginTop: 10,
                                  fontWeight: 400,
                                  fontSize: 18,
                                }}
                              >
                                Habi Yang
                              </p>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={rating} alt="rating" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Rating
                                </p>
                                <p style={{ marginRight: 10 }}>5.0</p>
                              </div>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={skills} alt="skills" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Skills
                                </p>
                                <p>General Document, Official Document</p>
                              </div>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={languages} alt="languages" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Languages
                                </p>
                                <p>English,汉语 官话,粵語, ไทย,한국어</p>
                              </div>
                            </div>

                            <div className={styles.BoxDeal}>
                              <button
                                className={styles.Deal}
                                onClick={() => OpneMode(1)}
                              >
                                Deal
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: width,
                    }}
                  ></div>
                )}
              </div>

              {/* Footer */}
              <div style={{ position: "relative" }}>
                <div>
                  <Footer v="English" />
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          {/* Modal */}
          {/* Receipt */}
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
            <Box className={styles.ModalReceipt}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  // borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>
                  Receipt confirming the order of translation
                </p>
              </div>

              <div className={styles.borderReceipt}></div>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "left",
                  overflowY: "auto",
                }}
              >
                {groupData ? (
                  <>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Ref Number</p>
                      <p className={styles.H_Model2}>
                        {groupData[0]?.orderNumber}
                      </p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Date</p>
                      <p className={styles.H_Model2}>
                        {groupData[0]?.Deadline}
                      </p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translator</p>
                      <p className={styles.H_Model2}>Habi Yang</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Ref Number</p>
                      <p className={styles.H_Model2}>000088874612</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Date</p>
                      <p className={styles.H_Model2}>07-12-2023</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translator</p>
                      <p className={styles.H_Model2}>Habi Yang</p>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.borderReceipt}></div>
              {groupData ? (
                <>
                  <div
                    // key={index}
                    id="keep-mounted-modal-description"
                    className={styles.DetailModalReceipt}
                  >
                    {groupData?.map((item, index) => (
                      <div key={index}>
                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model2}>Order {index + 1}</p>
                          <p className={styles.H_Model}></p>
                        </div>
                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Document Type</p>
                          <p className={styles.H_Model2}>
                            {item?.document_Type}
                          </p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Translation Type</p>
                          <p className={styles.H_Model2}>
                            {item?.translation_Type}
                          </p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>Translate to</p>
                          <p className={styles.H_Model2}>{item?.tranto}</p>
                        </div>

                        <div className={styles.Box_detailH_Model}>
                          <p className={styles.H_Model}>
                            Additional explanation
                          </p>
                          <p className={styles.H_Model2}>
                            {item?.Additional_explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.borderReceipt}></div>
                  <div className={styles.Box_detailH_Model2}>
                    <p className={styles.H_Model}>TOTAL :</p>
                    <p className={styles.H_Model3}>{from?.Price}</p>
                  </div>

                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(2)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() =>
                      setopenModel({
                        ...openModel,
                        openModel1: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <div
                    id="keep-mounted-modal-description"
                    className={styles.DetailModalReceipt}
                  >
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model2}>Order 1</p>
                      <p className={styles.H_Model}></p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Document Type</p>
                      <p className={styles.H_Model2}>{from?.document_Type}</p>
                    </div>
                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translation Type</p>
                      <p className={styles.H_Model2}>
                        {from?.translation_Type}
                      </p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Translate to</p>
                      <p className={styles.H_Model2}>{from?.tranto}</p>
                    </div>

                    <div className={styles.Box_detailH_Model}>
                      <p className={styles.H_Model}>Additional explanation</p>
                      <p className={styles.H_Model2}>
                        {from?.Additional_explanation}
                      </p>
                    </div>
                  </div>

                  <div className={styles.borderReceipt}></div>
                  <div className={styles.Box_detailH_Model2}>
                    <p className={styles.H_Model}>TOTAL :</p>
                    <p className={styles.H_Model3}>{from?.Price}</p>
                  </div>

                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(2)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() =>
                      setopenModel({
                        ...openModel,
                        openModel1: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                </>
              )}
            </Box>
          </Modal>

          {/* Payment */}
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
            <Box className={styles.ModalBoxPayment}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Payment</p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div id="keep-mounted-modal-description">
                <div>
                  <div className={styles.boxpayment}>
                    {choose === false ? (
                      <button
                        className={styles.cardpayment}
                        onClick={() => setChoose(true)}
                      >
                        <img src={card} alt="card" />
                        <p>card</p>
                      </button>
                    ) : (
                      <button
                        className={styles.cardpayment3}
                        onClick={() => setChoose(false)}
                      >
                        <img src={card} alt="card" />
                        <p>card</p>
                      </button>
                    )}

                    <button className={styles.cardpayment2}>
                      <img src={MobileBanking} alt="MobileBanking" />
                      <p>Mobile Banking</p>
                    </button>
                    <button className={styles.cardpayment2}>
                      <img src={Promptpay} alt="Promptpay" />
                      <p>Prompt pay</p>
                    </button>
                    <button className={styles.cardpayment2}>
                      <img src={Gpay2} alt="Gpay" />
                      <p>Google Pay</p>
                    </button>
                  </div>
                  {/* <div className={styles.boxpayment}>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
              </div>
              <div className={styles.boxpayment}>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
                <div className={styles.cardpayment}>
                  <img src={card} alt="card" />
                  <p>card</p>
                </div>
              </div> */}
                </div>
                <div className={styles.BoxbuttonModalBoxPayment}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(3)}
                  >
                    Pay
                  </button>
                  <button
                    className={styles.buttonModel1_2}
                    onClick={() => OpneMode("back to receipt")}
                  >
                    Back to Receipt
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* card */}
          <Modal
            hideBackdrop
            open={openModel?.openModel3}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel3: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalcard}>
              <Typography
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
              </Typography>
              <Cards />
              {/* <div id="keep-mounted-modal-description">
            <div style={{ position: "relative", top: "15px" }}>
              <button
                className={styles.buttonModel1}
                onClick={() => OpneMode(4)}
              >
                Pay
              </button>
              <button
                className={styles.buttonModel1_2}
                onClick={() => OpneMode("back to Payment")}
              >
                Back to Payment
              </button>
            </div>
          </div> */}
            </Box>
          </Modal>

          {/*  email to track */}
          <Modal
            hideBackdrop
            open={openModel?.openModel4}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel4: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalEmailToTrack}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  // borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Enter your email</p>
                <p className={styles.H_text02}>
                  Please enter your email to track and receive your order.
                </p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div style={{ marginTop: 25 }}>
                <div>
                  <p className={styles.H_text03}>Email</p>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1 ",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                      fontSize: 13,
                    }}
                  />
                </div>
              </div>
              <div id="keep-mounted-modal-description">
                <div style={{ position: "relative", top: "15px" }}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(5)}
                  >
                    Sent
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* Thank you */}
          <Modal
            hideBackdrop
            open={openModel?.openModel5}
            onClose={() =>
              setopenModel({
                ...openModel,
                openModel5: false,
              })
            }
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box className={styles.boxModalThankyou}>
              <div
                id="keep-mounted-modal-description"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  borderBottom: "1px solid #C4C4C4",
                }}
              >
                <img src={Logo} alt="logo" className={styles.Logo} />
                <p className={styles.H_text01}>Thank you.</p>
                <p className={styles.H_text02}>
                  Your payment has been successfully processed.
                </p>
              </div>
              <div className={styles.borderReceipt}></div>
              <div>
                <div style={{ margin: 25 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",
                      fontFamily: "DBHeavent",
                    }}
                  >
                    TRANSACTION NO.
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",
                      fontFamily: "DBHeaventLi",
                    }}
                  >
                    {generatetTransactionNo()}
                  </p>
                </div>
                <div style={{ margin: 25 }}>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: 20,
                      color: "#242424",

                      fontFamily: "DBHeavent",
                    }}
                  >
                    AMOUNT
                  </p>
                  {groupData ? (
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",

                        fontFamily: "DBHeaventLi",
                      }}
                    >
                      {groupData[0]?.Price}
                    </p>
                  ) : (
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",

                        fontFamily: "DBHeaventLi",
                      }}
                    >
                      {groupData?.Price}
                    </p>
                  )}
                </div>
              </div>
              <div id="keep-mounted-modal-description">
                <div style={{ position: "relative", top: "15px" }}>
                  <button
                    className={styles.buttonModel1}
                    onClick={() => OpneMode(6)}
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          {/* Alert */}
          <Box className={styles.BoxAlert}>
            <Collapse in={open}>
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                <AlertTitle>Please wait a moment.</AlertTitle>
                The translator is accepting your work
              </Alert>
            </Collapse>
          </Box>

          <>
            <div className={styles.backgroundfram1}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    textAlign: "center",
                    justifyItems: "center",
                    display: "inline-grid",
                    position: "relative",
                    top: 125,
                  }}
                >
                  <div>
                    <p className={styles.Htext01}>{CustomerEN[0].label}</p>
                  </div>
                  <div className={styles.textCustomerH}>
                    <p className={styles.Htext02}>{CustomerEN[1].label}</p>
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
            </div>

            <div>
              <div style={{ display: "grid", justifyItems: "center" }}>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  <p className={styles.textHeading2_overviwe}>YOUR ORDER</p>
                </div>

                <div className={styles.Boxfromdetail}>
                  {/* file */}
                  {from?.file === "" ? (
                    <div className={styles.Boxfile}>
                      <label
                        htmlFor="icon-button-file"
                        className={styles.labelBoxfile}
                      >
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            setFrom({ ...from, file: e.target.value })
                          }
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <img
                            src={Fileimg}
                            alt="Fileimg"
                            className={styles.BsFileEarmarkFill}
                          />
                        </IconButton>
                        <p>Upload File</p>
                      </label>
                    </div>
                  ) : (
                    <div className={styles.Boxfile}>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) =>
                            setFrom({ ...from, file: e.target.value })
                          }
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 16,
                              color: "#B5B5B5",
                            }}
                          >
                            {cutsting(from?.file)}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  )}

                  {/* fromdetail */}
                  <div className={styles.fromdetail}>
                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[5].label}</p>
                      </div>
                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data2}
                        defaultValue={from?.document_Type}
                        autoHighlight
                        value={from?.document_Type}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            document_Type: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[4].label}</p>
                      </div>
                      {from?.document_Type === null ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          defaultValue={from?.translation_Type}
                          options={data5}
                          autoHighlight
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : from?.document_Type === "Official Document" ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          defaultValue={from?.translation_Type}
                          options={data4}
                          autoHighlight
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : from?.document_Type === "General Document" ? (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          options={data3}
                          autoHighlight
                          defaultValue={from?.translation_Type}
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      ) : (
                        <Autocomplete
                          id="country-select-demo"
                          className={styles.Autocomplete}
                          options={data5}
                          autoHighlight
                          defaultValue={from?.translation_Type}
                          value={from?.translation_Type}
                          onChange={(event, value) =>
                            setFrom({
                              ...from,
                              translation_Type: value?.label ? value.label : "",
                            })
                          }
                          popupIcon={
                            <MdArrowDropDown
                              style={{
                                color: "#333333",
                                width: 30,
                                height: 33,
                              }}
                            />
                          }
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label={CustomerEN[9].label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                          isOptionEqualToValue={(option, value) =>
                            value === undefined ||
                            value === "" ||
                            option.id === value.id
                          }
                        />
                      )}
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[6].label}</p>
                      </div>

                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data}
                        autoHighlight
                        defaultValue={from?.tranfrom}
                        value={from?.tranfrom}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            tranfrom: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>{CustomerEN[7].label}</p>
                      </div>
                      <Autocomplete
                        id="country-select-demo"
                        className={styles.Autocomplete}
                        options={data}
                        autoHighlight
                        defaultValue={from?.tranto}
                        value={from?.tranto}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            tranto: value?.label ? value.label : "",
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          value === undefined ||
                          value === "" ||
                          option.id === value.id
                        }
                      />
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>Deadline</p>
                      </div>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date picker"
                          value={from?.Deadline}
                          onChange={handleDateChange}
                          open={openDatePicker}
                          onOpen={() => setOpenDatePicker(true)}
                          onClose={() => setOpenDatePicker(false)}
                          renderInput={(props) => (
                            <TextField
                              {...props}
                              className={styles.Autocomplete}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EventIcon
                                      onClick={() => setOpenDatePicker(true)}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>

                    <div className={styles.Boxinput}>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext03}>Additional explanation</p>
                      </div>
                      <textarea
                        value={from?.Additional_explanation}
                        onChange={(event, value) =>
                          setFrom({
                            ...from,
                            Additional_explanation: event.target.value,
                          })
                        }
                        maxLength={300}
                        className={styles.Additional_explanation}
                      />
                    </div>

                    {/*button Delete page */}
                    <div className={styles.buttonfromdetail}>
                      {page === 1 ? (
                        <></>
                      ) : (
                        <button
                          className={styles.buttonAddandDelete}
                          onClick={() => Delete_data(page)}
                        >
                          <RiDeleteBin5Fill style={{ color: " #f04438" }} />
                          <p className={styles.TextbuttonAddandDelete1}>
                            Delete
                          </p>
                        </button>
                      )}
                    </div>

                    <div className={styles.buttonfromdetail}>
                      <button
                        className={styles.buttonAddandDelete}
                        onClick={() => Add_data(page)}
                      >
                        <IoMdAddCircleOutline
                          style={{
                            color: "#3b005f",
                            fontSize: 20,
                          }}
                        />
                        <p className={styles.TextbuttonAddandDelete2}>
                          Add order
                        </p>
                      </button>
                    </div>

                    <div className={styles.Box_next2}>
                      <div className={styles.BoxNumber}>
                        <button
                          className={styles.buttonArrow}
                          onClick={() => switch_page("back")}
                        >
                          <IoIosArrowBack className={styles.icon1} />
                        </button>
                        {countButtons === 0 ? (
                          <button className={styles.buttonArrow2}>1</button>
                        ) : countButtons >= 1 ? (
                          <div>{createButtons()}</div>
                        ) : null}

                        <button
                          className={styles.buttonArrow}
                          onClick={() => switch_page("next")}
                        >
                          <IoIosArrowForward className={styles.icon1} />
                        </button>
                      </div>

                      <button
                        onClick={() => promotion(1)}
                        className={styles.Get_Quote}
                      >
                        <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                          {CustomerEN[11].label}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* promo */}
                {promo === 1 ? (
                  <div
                    style={{
                      width: width,
                    }}
                  >
                    <div className={styles.BoxPromo}>
                      <div className={styles.InBoxPromo}>
                        <div>
                          <p className={styles.textHeading2_overviwe2}>
                            Translator
                          </p>
                        </div>

                        <div className={styles.BoxFilter}>
                          <div className={styles.HtextBoxFilter}>
                            <div>
                              <p className={styles.Htext04}>
                                {CustomerEN[5].label}
                              </p>
                            </div>
                            <Autocomplete
                              id="country-select-demo"
                              className={styles.Autocomplete}
                              options={data2_2}
                              defaultValue={documentType}
                              autoHighlight
                              value={documentType}
                              onChange={(event, value) =>
                                setDocumentType(value?.label ? value.label : "")
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#333333",
                                    width: 30,
                                    height: 33,
                                  }}
                                />
                              }
                              renderOption={(props, option) => (
                                <Box
                                  component="li"
                                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                  {...props}
                                >
                                  {option.label}
                                </Box>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label={CustomerEN[9].label}
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: "new-password",
                                  }}
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </div>

                          <div className={styles.HtextBoxFilter}>
                            <p className={styles.Htext04}>Rating</p>

                            <div className={styles.BoxControStar}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked1}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked1: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="5 Star"
                                style={{ fontSize: 1 }}
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked2}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked2: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="4 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked3}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked3: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="3 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked4}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked4: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="2 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked5}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked5: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="1 Star"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked?.checked6}
                                    onChange={(e) =>
                                      setChecked({
                                        ...checked,
                                        checked6: e.target.checked,
                                      })
                                    }
                                    inputProps={{ "aria-label": "controlled" }}
                                  />
                                }
                                label="No Rating"
                              />
                            </div>
                          </div>
                        </div>

                        <div className={styles.cardTranslator}>
                          <div style={{ display: "grid" }}>
                            <div
                              style={{
                                width: " 100%",
                                display: "grid",
                                justifyContent: "center",
                                textAlign: "center",
                              }}
                            >
                              <Stack direction="row" spacing={2}>
                                <StyledBadge
                                  overlap="circular"
                                  anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                  }}
                                  variant="dot"
                                >
                                  <FaUserCircle
                                    alt="avatar"
                                    className={styles.profile}
                                  />
                                </StyledBadge>
                              </Stack>
                              <p
                                style={{
                                  marginTop: 10,
                                  fontWeight: 400,
                                  fontSize: 18,
                                }}
                              >
                                Habi Yang
                              </p>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={rating} alt="rating" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Rating
                                </p>
                                <p style={{ marginRight: 10 }}>5.0</p>
                              </div>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={skills} alt="skills" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Skills
                                </p>
                                <p>General Document, Official Document</p>
                              </div>
                            </div>

                            <div className={styles.diviconcardTranslator}>
                              <div className={styles.iconcardTranslator}>
                                <img src={languages} alt="languages" />
                              </div>

                              <div className={styles.diviconcardTranslator2}>
                                <p
                                  style={{
                                    color: "#BDBDBD",
                                    fontSize: "12px",
                                  }}
                                >
                                  Languages
                                </p>
                                <p>English,汉语 官话,粵語, ไทย,한국어</p>
                              </div>
                            </div>

                            <div className={styles.BoxDeal}>
                              <button
                                className={styles.Deal}
                                onClick={() => OpneMode(1)}
                              >
                                Deal
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: width,
                    }}
                  ></div>
                )}
              </div>

              {/* Footer */}
              <div style={{ position: "relative", top: "200px" }}>
                <div>
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
export default Customer;
