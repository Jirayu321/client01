import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  Box,
  Drawer,
  Toolbar,
  List,
} from "@mui/material";
import { Form, NavDropdown } from "react-bootstrap";
import {
  IoChatbubblesSharp,
  //  IoNotifications
} from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import GlobeLocation from "../../Images/GlobeLocation.svg";
import Earth from "../../Images//Earth.svg";
import "./Drawer.css";

export default function DrawerTranslate(props) {
  const pathname = window.location.pathname;
  const drawerWidth = 100;
  const navigate = useNavigate();
  const checkValue = props?.value;
  const languages = props?.languages;
  const you = props?.languages;
  const value = props?.value;

  // const goLogin = () => {
  //   navigate("/Login");
  // };
  // const checklogin = () => {
  //   if (checkValue) {
  //     console.log("value :", checkValue);
  //   } else {
  //     goLogin();
  //   }
  // };
  // React.useEffect(() => {
  //   checklogin();
  // });
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
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      style={{ zIndex: 0, height: "100%" }}
    >
      <Toolbar />
      <Box sx={{ overflow: "hidden" }} className={"manuTranslate"}>
        {pathname === "/Dashboard_freelance" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/In", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M7.5495 0.53384C8.3874 -0.17274 9.6126 -0.17274 10.4505 0.53385L17.2005 6.22595C17.7074 6.65347 18 7.28285 18 7.94601V17.2558C18 18.2223 17.2165 19.0058 16.25 19.0058H12.75C11.7835 19.0058 11 18.2223 11 17.2558V12.2488C11 12.1108 10.8881 11.9988 10.75 11.9988H7.25C7.1119 11.9988 6.99999 12.1108 6.99999 12.2488V17.2558C6.99999 18.2223 6.2165 19.0058 5.25 19.0058H1.75C0.7835 19.0058 0 18.2223 0 17.2558V7.94601C0 7.28285 0.29255 6.65347 0.79952 6.22595L7.5495 0.53384ZM9.4835 1.68055C9.2042 1.44502 8.7958 1.44502 8.5165 1.68055L1.76651 7.37266C1.59752 7.51516 1.5 7.72496 1.5 7.94601V17.2558C1.5 17.3939 1.61193 17.5058 1.75 17.5058H5.25C5.38807 17.5058 5.49999 17.3939 5.49999 17.2558V12.2488C5.49999 11.2823 6.2835 10.4988 7.25 10.4988H10.75C11.7165 10.4988 12.5 11.2823 12.5 12.2488V17.2558C12.5 17.3939 12.6119 17.5058 12.75 17.5058H16.25C16.3881 17.5058 16.5 17.3939 16.5 17.2558V7.94601C16.5 7.72496 16.4025 7.51516 16.2335 7.37266L9.4835 1.68055Z"
                        fill="white"
                      />
                    </svg>
                    <p>Home</p>
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon
                    id={"icons_translate2"}
                    onClick={() =>
                      navigate("/Dashboard_freelance", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.25 4.25C10.6642 4.25 11 4.58579 11 5V13H19C19.3797 13 19.6935 13.2822 19.7432 13.6482L19.75 13.75C19.75 18.7206 15.7206 22.25 10.75 22.25C5.77944 22.25 1.75 18.2206 1.75 13.25C1.75 8.27944 5.27944 4.25 10.25 4.25ZM9.5 5.787L9.29109 5.81073C5.6018 6.28155 3.25 9.43274 3.25 13.25C3.25 17.3921 6.60786 20.75 10.75 20.75C14.5673 20.75 17.7185 18.3982 18.1893 14.7089L18.212 14.5H10.25C9.8703 14.5 9.55651 14.2178 9.50685 13.8518L9.5 13.75V5.787ZM13.25 1.75C18.2206 1.75 22.25 5.77944 22.25 10.75C22.25 11.1642 21.9142 11.5 21.5 11.5H13.25C12.8358 11.5 12.5 11.1642 12.5 10.75V2.5C12.5 2.08579 12.8358 1.75 13.25 1.75ZM14 3.287V10H20.712L20.6893 9.79109C20.2585 6.41578 17.5842 3.74148 14.2089 3.31073L14 3.287Z"
                        fill="url(#paint0_linear_1849_16511)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1849_16511"
                          x1="2.95686"
                          y1="1.75"
                          x2="24.9063"
                          y2="4.97231"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3B005F" />
                          <stop offset="1" stop-color="#1466B1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Dashboard</p>
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    {/* <BsTranslate
                    className="icons"
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.8782 2.82559L21.0312 2.96997L21.1755 3.12294C22.4268 4.52817 22.3787 6.68308 21.0312 8.03063L9.06283 19.999C8.78596 20.2758 8.44162 20.4757 8.06386 20.5787L2.94817 21.9739C2.38829 22.1266 1.87456 21.6128 2.02726 21.053L3.42244 15.9373C3.52547 15.5595 3.7253 15.2152 4.00217 14.9383L15.9705 2.96997C17.3181 1.62242 19.473 1.57429 20.8782 2.82559ZM15.001 6.06088L5.06283 15.999C4.97054 16.0913 4.90393 16.206 4.86959 16.332L3.81974 20.1814L7.66918 19.1315C7.7951 19.0972 7.90988 19.0306 8.00217 18.9383L17.94 8.99988L15.001 6.06088ZM6.52583 10.9999L5.02583 12.4999L2.75083 12.5003C2.33661 12.5003 2.00083 12.1645 2.00083 11.7503C2.00083 11.3361 2.33661 11.0003 2.75083 11.0003L6.52583 10.9999ZM10.5258 6.99988L9.02583 8.49988L2.75083 8.5003C2.33661 8.5003 2.00083 8.16452 2.00083 7.7503C2.00083 7.33609 2.33661 7.0003 2.75083 7.0003L10.5258 6.99988ZM17.0312 4.03063L16.061 4.99987L19 7.93988L19.9705 6.96997C20.7822 6.1583 20.7822 4.84231 19.9705 4.03063C19.1588 3.21896 17.8428 3.21896 17.0312 4.03063ZM14.5258 2.99988L13.0258 4.49987L2.75083 4.5003C2.33661 4.5003 2.00083 4.16452 2.00083 3.7503C2.00083 3.33609 2.33661 3.0003 2.75083 3.0003L14.5258 2.99988Z"
                        fill="white"
                      />
                    </svg>
                    <p>Tools</p>
                  </ListItemIcon>
                ) : index === 3 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Notification", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0001 1.99609C16.05 1.99609 19.3568 5.19084 19.4959 9.24515L19.5001 9.49609V13.5931L20.8801 16.7491C20.9492 16.907 20.9848 17.0775 20.9848 17.2499C20.9848 17.9402 20.4252 18.4999 19.7348 18.4999L15.0001 18.5014C15.0001 20.1582 13.657 21.5014 12.0001 21.5014C10.4024 21.5014 9.09645 20.2524 9.0052 18.6776L8.99966 18.4991L4.27498 18.4999C4.10364 18.4999 3.93413 18.4646 3.77697 18.3964C3.14377 18.1213 2.85342 17.3851 3.12846 16.7519L4.50011 13.594V9.49599C4.50071 5.3412 7.8522 1.99609 12.0001 1.99609ZM13.4997 18.4991L10.5001 18.5014C10.5001 19.3298 11.1717 20.0014 12.0001 20.0014C12.7798 20.0014 13.4206 19.4065 13.4932 18.6458L13.4997 18.4991ZM12.0001 3.49609C8.67995 3.49609 6.00059 6.17035 6.00011 9.49609V13.9057L4.65613 16.9999H19.3526L18.0001 13.9067L18.0002 9.50895L17.9965 9.28375C17.8854 6.05027 15.2417 3.49609 12.0001 3.49609Z"
                        fill="white"
                      />
                    </svg>
                    <p>Notification</p>
                  </ListItemIcon>
                ) : null}
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Tool" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/In", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M7.5495 0.53384C8.3874 -0.17274 9.6126 -0.17274 10.4505 0.53385L17.2005 6.22595C17.7074 6.65347 18 7.28285 18 7.94601V17.2558C18 18.2223 17.2165 19.0058 16.25 19.0058H12.75C11.7835 19.0058 11 18.2223 11 17.2558V12.2488C11 12.1108 10.8881 11.9988 10.75 11.9988H7.25C7.1119 11.9988 6.99999 12.1108 6.99999 12.2488V17.2558C6.99999 18.2223 6.2165 19.0058 5.25 19.0058H1.75C0.7835 19.0058 0 18.2223 0 17.2558V7.94601C0 7.28285 0.29255 6.65347 0.79952 6.22595L7.5495 0.53384ZM9.4835 1.68055C9.2042 1.44502 8.7958 1.44502 8.5165 1.68055L1.76651 7.37266C1.59752 7.51516 1.5 7.72496 1.5 7.94601V17.2558C1.5 17.3939 1.61193 17.5058 1.75 17.5058H5.25C5.38807 17.5058 5.49999 17.3939 5.49999 17.2558V12.2488C5.49999 11.2823 6.2835 10.4988 7.25 10.4988H10.75C11.7165 10.4988 12.5 11.2823 12.5 12.2488V17.2558C12.5 17.3939 12.6119 17.5058 12.75 17.5058H16.25C16.3881 17.5058 16.5 17.3939 16.5 17.2558V7.94601C16.5 7.72496 16.4025 7.51516 16.2335 7.37266L9.4835 1.68055Z"
                        fill="white"
                      />
                    </svg>
                    <p>Home</p>
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Dashboard_freelance", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.25 4.25C10.6642 4.25 11 4.58579 11 5V13H19C19.3797 13 19.6935 13.2822 19.7432 13.6482L19.75 13.75C19.75 18.7206 15.7206 22.25 10.75 22.25C5.77944 22.25 1.75 18.2206 1.75 13.25C1.75 8.27944 5.27944 4.25 10.25 4.25ZM9.5 5.787L9.29109 5.81073C5.6018 6.28155 3.25 9.43274 3.25 13.25C3.25 17.3921 6.60786 20.75 10.75 20.75C14.5673 20.75 17.7185 18.3982 18.1893 14.7089L18.212 14.5H10.25C9.8703 14.5 9.55651 14.2178 9.50685 13.8518L9.5 13.75V5.787ZM13.25 1.75C18.2206 1.75 22.25 5.77944 22.25 10.75C22.25 11.1642 21.9142 11.5 21.5 11.5H13.25C12.8358 11.5 12.5 11.1642 12.5 10.75V2.5C12.5 2.08579 12.8358 1.75 13.25 1.75ZM14 3.287V10H20.712L20.6893 9.79109C20.2585 6.41578 17.5842 3.74148 14.2089 3.31073L14 3.287Z"
                        fill="white"
                      />
                    </svg>
                    <p>Dashboard</p>
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon
                    id={"icons_translate2"}
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    {/* <BsTranslate
                    className="icons"
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  /> */}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.8782 2.82559L21.0312 2.96997L21.1755 3.12294C22.4268 4.52817 22.3787 6.68308 21.0312 8.03063L9.06283 19.999C8.78596 20.2758 8.44162 20.4757 8.06386 20.5787L2.94817 21.9739C2.38829 22.1266 1.87456 21.6128 2.02726 21.053L3.42244 15.9373C3.52547 15.5595 3.7253 15.2152 4.00217 14.9383L15.9705 2.96997C17.3181 1.62242 19.473 1.57429 20.8782 2.82559ZM15.001 6.06088L5.06283 15.999C4.97054 16.0913 4.90393 16.206 4.86959 16.332L3.81974 20.1814L7.66918 19.1315C7.7951 19.0972 7.90988 19.0306 8.00217 18.9383L17.94 8.99988L15.001 6.06088ZM6.52583 10.9999L5.02583 12.4999L2.75083 12.5003C2.33661 12.5003 2.00083 12.1645 2.00083 11.7503C2.00083 11.3361 2.33661 11.0003 2.75083 11.0003L6.52583 10.9999ZM10.5258 6.99988L9.02583 8.49988L2.75083 8.5003C2.33661 8.5003 2.00083 8.16452 2.00083 7.7503C2.00083 7.33609 2.33661 7.0003 2.75083 7.0003L10.5258 6.99988ZM17.0312 4.03063L16.061 4.99987L19 7.93988L19.9705 6.96997C20.7822 6.1583 20.7822 4.84231 19.9705 4.03063C19.1588 3.21896 17.8428 3.21896 17.0312 4.03063ZM14.5258 2.99988L13.0258 4.49987L2.75083 4.5003C2.33661 4.5003 2.00083 4.16452 2.00083 3.7503C2.00083 3.33609 2.33661 3.0003 2.75083 3.0003L14.5258 2.99988Z"
                        fill="white"
                      />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M18.8782 1.82559L19.0312 1.96997L19.1755 2.12294C20.4268 3.52817 20.3787 5.68308 19.0312 7.03063L7.06283 18.999C6.78596 19.2758 6.44162 19.4757 6.06386 19.5787L0.948168 20.9739C0.388288 21.1266 -0.125442 20.6128 0.0272577 20.053L1.42244 14.9373C1.52547 14.5595 1.7253 14.2152 2.00217 13.9383L13.9705 1.96997C15.3181 0.622421 17.473 0.574291 18.8782 1.82559ZM13.001 5.06088L3.06283 14.999C2.97054 15.0913 2.90393 15.206 2.86959 15.332L1.81974 19.1814L5.66918 18.1315C5.7951 18.0972 5.90988 18.0306 6.00217 17.9383L15.94 7.99988L13.001 5.06088ZM4.52583 9.9999L3.02583 11.4999L0.750828 11.5003C0.336608 11.5003 0.00082756 11.1645 0.00082756 10.7503C0.00082756 10.3361 0.336608 10.0003 0.750828 10.0003L4.52583 9.9999ZM8.5258 5.99988L7.02583 7.49988L0.750828 7.5003C0.336608 7.5003 0.00082756 7.16452 0.00082756 6.7503C0.00082756 6.33609 0.336608 6.0003 0.750828 6.0003L8.5258 5.99988ZM15.0312 3.03063L14.061 3.99987L17 6.93988L17.9705 5.96997C18.7822 5.1583 18.7822 3.84231 17.9705 3.03063C17.1588 2.21896 15.8428 2.21896 15.0312 3.03063ZM12.5258 1.99988L11.0258 3.49987L0.750828 3.5003C0.336608 3.5003 0.00082756 3.16452 0.00082756 2.7503C0.00082756 2.33609 0.336608 2.0003 0.750828 2.0003L12.5258 1.99988Z"
                        fill="url(#paint0_linear_1854_8409)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1854_8409"
                          x1="1.18208"
                          y1="0.921873"
                          x2="22.681"
                          y2="4.07804"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3B005F" />
                          <stop offset="1" stop-color="#1466B1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Tools</p>
                  </ListItemIcon>
                ) : index === 3 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Notification", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0001 1.99609C16.05 1.99609 19.3568 5.19084 19.4959 9.24515L19.5001 9.49609V13.5931L20.8801 16.7491C20.9492 16.907 20.9848 17.0775 20.9848 17.2499C20.9848 17.9402 20.4252 18.4999 19.7348 18.4999L15.0001 18.5014C15.0001 20.1582 13.657 21.5014 12.0001 21.5014C10.4024 21.5014 9.09645 20.2524 9.0052 18.6776L8.99966 18.4991L4.27498 18.4999C4.10364 18.4999 3.93413 18.4646 3.77697 18.3964C3.14377 18.1213 2.85342 17.3851 3.12846 16.7519L4.50011 13.594V9.49599C4.50071 5.3412 7.8522 1.99609 12.0001 1.99609ZM13.4997 18.4991L10.5001 18.5014C10.5001 19.3298 11.1717 20.0014 12.0001 20.0014C12.7798 20.0014 13.4206 19.4065 13.4932 18.6458L13.4997 18.4991ZM12.0001 3.49609C8.67995 3.49609 6.00059 6.17035 6.00011 9.49609V13.9057L4.65613 16.9999H19.3526L18.0001 13.9067L18.0002 9.50895L17.9965 9.28375C17.8854 6.05027 15.2417 3.49609 12.0001 3.49609Z"
                        fill="white"
                      />
                    </svg>
                    <p>Notification</p>
                  </ListItemIcon>
                ) : null}
              </ListItem>
            ))}
            <div style={{ marginTop: 120 }}>
              <div className="Drawerbox4navbarHome2">
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

              <div className="Drawerbox4navbarHome2">
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
            </div>
          </List>
        ) : pathname === "/In" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon
                    id={"icons_translate2"}
                    onClick={() =>
                      navigate("/In", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.5495 2.53384C11.3874 1.82726 12.6126 1.82726 13.4505 2.53385L20.2005 8.22595C20.7074 8.65347 21 9.28285 21 9.94601V19.2558C21 20.2223 20.2165 21.0058 19.25 21.0058H15.75C14.7835 21.0058 14 20.2223 14 19.2558V14.2488C14 14.1108 13.8881 13.9988 13.75 13.9988H10.25C10.1119 13.9988 9.99999 14.1108 9.99999 14.2488V19.2558C9.99999 20.2223 9.2165 21.0058 8.25 21.0058H4.75C3.7835 21.0058 3 20.2223 3 19.2558V9.94601C3 9.28285 3.29255 8.65347 3.79952 8.22595L10.5495 2.53384ZM12.4835 3.68055C12.2042 3.44502 11.7958 3.44502 11.5165 3.68055L4.76651 9.37266C4.59752 9.51516 4.5 9.72496 4.5 9.94601V19.2558C4.5 19.3939 4.61193 19.5058 4.75 19.5058H8.25C8.38807 19.5058 8.49999 19.3939 8.49999 19.2558V14.2488C8.49999 13.2823 9.2835 12.4988 10.25 12.4988H13.75C14.7165 12.4988 15.5 13.2823 15.5 14.2488V19.2558C15.5 19.3939 15.6119 19.5058 15.75 19.5058H19.25C19.3881 19.5058 19.5 19.3939 19.5 19.2558V9.94601C19.5 9.72496 19.4025 9.51516 19.2335 9.37266L12.4835 3.68055Z"
                        fill="url(#paint0_linear_1849_15182)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1849_15182"
                          x1="4.05968"
                          y1="2.0039"
                          x2="23.3742"
                          y2="4.68988"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3B005F" />
                          <stop offset="1" stop-color="#1466B1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Home</p>
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Dashboard_freelance", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.25 4.25C10.6642 4.25 11 4.58579 11 5V13H19C19.3797 13 19.6935 13.2822 19.7432 13.6482L19.75 13.75C19.75 18.7206 15.7206 22.25 10.75 22.25C5.77944 22.25 1.75 18.2206 1.75 13.25C1.75 8.27944 5.27944 4.25 10.25 4.25ZM9.5 5.787L9.29109 5.81073C5.6018 6.28155 3.25 9.43274 3.25 13.25C3.25 17.3921 6.60786 20.75 10.75 20.75C14.5673 20.75 17.7185 18.3982 18.1893 14.7089L18.212 14.5H10.25C9.8703 14.5 9.55651 14.2178 9.50685 13.8518L9.5 13.75V5.787ZM13.25 1.75C18.2206 1.75 22.25 5.77944 22.25 10.75C22.25 11.1642 21.9142 11.5 21.5 11.5H13.25C12.8358 11.5 12.5 11.1642 12.5 10.75V2.5C12.5 2.08579 12.8358 1.75 13.25 1.75ZM14 3.287V10H20.712L20.6893 9.79109C20.2585 6.41578 17.5842 3.74148 14.2089 3.31073L14 3.287Z"
                        fill="white"
                      />
                    </svg>
                    <p>Dashboard</p>
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    {/* <BsTranslate
                    className="icons"
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.8782 2.82559L21.0312 2.96997L21.1755 3.12294C22.4268 4.52817 22.3787 6.68308 21.0312 8.03063L9.06283 19.999C8.78596 20.2758 8.44162 20.4757 8.06386 20.5787L2.94817 21.9739C2.38829 22.1266 1.87456 21.6128 2.02726 21.053L3.42244 15.9373C3.52547 15.5595 3.7253 15.2152 4.00217 14.9383L15.9705 2.96997C17.3181 1.62242 19.473 1.57429 20.8782 2.82559ZM15.001 6.06088L5.06283 15.999C4.97054 16.0913 4.90393 16.206 4.86959 16.332L3.81974 20.1814L7.66918 19.1315C7.7951 19.0972 7.90988 19.0306 8.00217 18.9383L17.94 8.99988L15.001 6.06088ZM6.52583 10.9999L5.02583 12.4999L2.75083 12.5003C2.33661 12.5003 2.00083 12.1645 2.00083 11.7503C2.00083 11.3361 2.33661 11.0003 2.75083 11.0003L6.52583 10.9999ZM10.5258 6.99988L9.02583 8.49988L2.75083 8.5003C2.33661 8.5003 2.00083 8.16452 2.00083 7.7503C2.00083 7.33609 2.33661 7.0003 2.75083 7.0003L10.5258 6.99988ZM17.0312 4.03063L16.061 4.99987L19 7.93988L19.9705 6.96997C20.7822 6.1583 20.7822 4.84231 19.9705 4.03063C19.1588 3.21896 17.8428 3.21896 17.0312 4.03063ZM14.5258 2.99988L13.0258 4.49987L2.75083 4.5003C2.33661 4.5003 2.00083 4.16452 2.00083 3.7503C2.00083 3.33609 2.33661 3.0003 2.75083 3.0003L14.5258 2.99988Z"
                        fill="white"
                      />
                    </svg>
                    <p>Tools</p>
                  </ListItemIcon>
                ) : index === 3 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Notification", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0001 1.99609C16.05 1.99609 19.3568 5.19084 19.4959 9.24515L19.5001 9.49609V13.5931L20.8801 16.7491C20.9492 16.907 20.9848 17.0775 20.9848 17.2499C20.9848 17.9402 20.4252 18.4999 19.7348 18.4999L15.0001 18.5014C15.0001 20.1582 13.657 21.5014 12.0001 21.5014C10.4024 21.5014 9.09645 20.2524 9.0052 18.6776L8.99966 18.4991L4.27498 18.4999C4.10364 18.4999 3.93413 18.4646 3.77697 18.3964C3.14377 18.1213 2.85342 17.3851 3.12846 16.7519L4.50011 13.594V9.49599C4.50071 5.3412 7.8522 1.99609 12.0001 1.99609ZM13.4997 18.4991L10.5001 18.5014C10.5001 19.3298 11.1717 20.0014 12.0001 20.0014C12.7798 20.0014 13.4206 19.4065 13.4932 18.6458L13.4997 18.4991ZM12.0001 3.49609C8.67995 3.49609 6.00059 6.17035 6.00011 9.49609V13.9057L4.65613 16.9999H19.3526L18.0001 13.9067L18.0002 9.50895L17.9965 9.28375C17.8854 6.05027 15.2417 3.49609 12.0001 3.49609Z"
                        fill="white"
                      />
                    </svg>
                    <p>Notification</p>
                  </ListItemIcon>
                ) : null}
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Notification" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/In", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M7.5495 0.53384C8.3874 -0.17274 9.6126 -0.17274 10.4505 0.53385L17.2005 6.22595C17.7074 6.65347 18 7.28285 18 7.94601V17.2558C18 18.2223 17.2165 19.0058 16.25 19.0058H12.75C11.7835 19.0058 11 18.2223 11 17.2558V12.2488C11 12.1108 10.8881 11.9988 10.75 11.9988H7.25C7.1119 11.9988 6.99999 12.1108 6.99999 12.2488V17.2558C6.99999 18.2223 6.2165 19.0058 5.25 19.0058H1.75C0.7835 19.0058 0 18.2223 0 17.2558V7.94601C0 7.28285 0.29255 6.65347 0.79952 6.22595L7.5495 0.53384ZM9.4835 1.68055C9.2042 1.44502 8.7958 1.44502 8.5165 1.68055L1.76651 7.37266C1.59752 7.51516 1.5 7.72496 1.5 7.94601V17.2558C1.5 17.3939 1.61193 17.5058 1.75 17.5058H5.25C5.38807 17.5058 5.49999 17.3939 5.49999 17.2558V12.2488C5.49999 11.2823 6.2835 10.4988 7.25 10.4988H10.75C11.7165 10.4988 12.5 11.2823 12.5 12.2488V17.2558C12.5 17.3939 12.6119 17.5058 12.75 17.5058H16.25C16.3881 17.5058 16.5 17.3939 16.5 17.2558V7.94601C16.5 7.72496 16.4025 7.51516 16.2335 7.37266L9.4835 1.68055Z"
                        fill="white"
                      />
                    </svg>
                    <p>Home</p>
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Dashboard_freelance", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.25 4.25C10.6642 4.25 11 4.58579 11 5V13H19C19.3797 13 19.6935 13.2822 19.7432 13.6482L19.75 13.75C19.75 18.7206 15.7206 22.25 10.75 22.25C5.77944 22.25 1.75 18.2206 1.75 13.25C1.75 8.27944 5.27944 4.25 10.25 4.25ZM9.5 5.787L9.29109 5.81073C5.6018 6.28155 3.25 9.43274 3.25 13.25C3.25 17.3921 6.60786 20.75 10.75 20.75C14.5673 20.75 17.7185 18.3982 18.1893 14.7089L18.212 14.5H10.25C9.8703 14.5 9.55651 14.2178 9.50685 13.8518L9.5 13.75V5.787ZM13.25 1.75C18.2206 1.75 22.25 5.77944 22.25 10.75C22.25 11.1642 21.9142 11.5 21.5 11.5H13.25C12.8358 11.5 12.5 11.1642 12.5 10.75V2.5C12.5 2.08579 12.8358 1.75 13.25 1.75ZM14 3.287V10H20.712L20.6893 9.79109C20.2585 6.41578 17.5842 3.74148 14.2089 3.31073L14 3.287Z"
                        fill="white"
                      />
                    </svg>
                    <p>Dashboard</p>
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon
                    id={"icons_translate"}
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    {/* <BsTranslate
                    className="icons"
                    onClick={() =>
                      navigate("/Tool", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.8782 2.82559L21.0312 2.96997L21.1755 3.12294C22.4268 4.52817 22.3787 6.68308 21.0312 8.03063L9.06283 19.999C8.78596 20.2758 8.44162 20.4757 8.06386 20.5787L2.94817 21.9739C2.38829 22.1266 1.87456 21.6128 2.02726 21.053L3.42244 15.9373C3.52547 15.5595 3.7253 15.2152 4.00217 14.9383L15.9705 2.96997C17.3181 1.62242 19.473 1.57429 20.8782 2.82559ZM15.001 6.06088L5.06283 15.999C4.97054 16.0913 4.90393 16.206 4.86959 16.332L3.81974 20.1814L7.66918 19.1315C7.7951 19.0972 7.90988 19.0306 8.00217 18.9383L17.94 8.99988L15.001 6.06088ZM6.52583 10.9999L5.02583 12.4999L2.75083 12.5003C2.33661 12.5003 2.00083 12.1645 2.00083 11.7503C2.00083 11.3361 2.33661 11.0003 2.75083 11.0003L6.52583 10.9999ZM10.5258 6.99988L9.02583 8.49988L2.75083 8.5003C2.33661 8.5003 2.00083 8.16452 2.00083 7.7503C2.00083 7.33609 2.33661 7.0003 2.75083 7.0003L10.5258 6.99988ZM17.0312 4.03063L16.061 4.99987L19 7.93988L19.9705 6.96997C20.7822 6.1583 20.7822 4.84231 19.9705 4.03063C19.1588 3.21896 17.8428 3.21896 17.0312 4.03063ZM14.5258 2.99988L13.0258 4.49987L2.75083 4.5003C2.33661 4.5003 2.00083 4.16452 2.00083 3.7503C2.00083 3.33609 2.33661 3.0003 2.75083 3.0003L14.5258 2.99988Z"
                        fill="white"
                      />
                    </svg>
                    <p>Tools</p>
                  </ListItemIcon>
                ) : index === 3 ? (
                  <ListItemIcon
                    id={"icons_translate2"}
                    onClick={() =>
                      navigate("/Notification", {
                        state: {
                          languages: `${languages}`,
                          value: `${checkValue}`,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0001 1.99609C16.05 1.99609 19.3568 5.19084 19.4959 9.24515L19.5001 9.49609V13.5931L20.8801 16.7491C20.9492 16.907 20.9848 17.0775 20.9848 17.2499C20.9848 17.9402 20.4252 18.4999 19.7348 18.4999L15.0001 18.5014C15.0001 20.1582 13.657 21.5014 12.0001 21.5014C10.4024 21.5014 9.09645 20.2524 9.0052 18.6776L8.99966 18.4991L4.27498 18.4999C4.10364 18.4999 3.93413 18.4646 3.77697 18.3964C3.14377 18.1213 2.85342 17.3851 3.12846 16.7519L4.50011 13.594V9.49599C4.50071 5.3412 7.8522 1.99609 12.0001 1.99609ZM13.4997 18.4991L10.5001 18.5014C10.5001 19.3298 11.1717 20.0014 12.0001 20.0014C12.7798 20.0014 13.4206 19.4065 13.4932 18.6458L13.4997 18.4991ZM12.0001 3.49609C8.67995 3.49609 6.00059 6.17035 6.00011 9.49609V13.9057L4.65613 16.9999H19.3526L18.0001 13.9067L18.0002 9.50895L17.9965 9.28375C17.8854 6.05027 15.2417 3.49609 12.0001 3.49609Z"
                        fill="url(#paint0_linear_1849_19918)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1849_19918"
                          x1="4.08199"
                          y1="1.99609"
                          x2="23.3739"
                          y2="4.60391"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#3B005F" />
                          <stop offset="1" stop-color="#1466B1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p>Notification</p>
                  </ListItemIcon>
                ) : null}
              </ListItem>
            ))}
          </List>
        ) : (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <MdSpaceDashboard
                      style={{ fontSize: 30 }}
                      className="icons"
                      onClick={() =>
                        navigate("/Dashboard_freelance", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <BsTranslate
                      className="icons"
                      onClick={() =>
                        navigate("/Tool", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon id={"icons_translate2"}>
                    <IoChatbubblesSharp
                      className="icons"
                      onClick={() =>
                        navigate("/Chats", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : // :index === 3 ? (
                //   <ListItemIcon id={"icons_translate"}>
                //     <IoNotifications
                //       className="icons"
                //       // onClick={() => navigate("/Notification")}
                //     />
                //   </ListItemIcon>
                // )
                null}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  );
}
