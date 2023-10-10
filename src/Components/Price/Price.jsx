import React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer.jsx";

import { useNavigate, useLocation } from "react-router-dom";

import Mask from "../../Images/Mask.png";
import { TextField, Autocomplete, Box } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { data2, data2_1 } from "../Data/data";

import { PriceEN, PriceDE, PriceTH } from "../Data/DataLanguage2";

import { MdArrowDropDown } from "react-icons/md";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import styles from "./Price.module.css";

const Price = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;
  const [from, setFrom] = React.useState({
    document_Type: "",
    Rating: "",
  });

  const [type, setType] = React.useState(1);
  const { innerWidth: width } = window;
  const handle = (x) => {
    console.log("x:", x);
    switch (x) {
      case 1:
        setType(1);
        break;
      case 2:
        setType(2);
        break;
      default:
        setType(1);
    }
  };

  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      padding: "4px 16px",
      alignItems: "center",
      gap: "16px",
      flex: "1 0 0",
      borderRadius: "60px",
      border: "1px solid #E5E5E5",
      background: "#FFFF",
      // width: "400px",
      marginLeft: "0px",
      marginRight: "10px",
      width: "35vw",
    },
    root2: {
      display: "flex",
      padding: "4px 16px",
      alignItems: "center",
      gap: "16px",
      flex: "1 0 0",
      borderRadius: "60px",
      border: "1px solid #E5E5E5",
      background: "#FFFF",
      width: "83vw",
    },
  }));

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: "none",
          },
        },
      },
    },
  });

  const classes = useStyles();


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
          {Doc === "English" ? (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{PriceEN.at(0)?.label}</p>
                  <p className={styles.h_text2}>
                  {PriceEN.at(1)?.label}
                  </p>

                  <div className={styles.set_fram1_button}>
                    {type === 1 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_1} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{PriceEN.at(2)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_1} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{PriceEN.at(2)?.label}</p>
                      </button>
                    )}

                    {type === 2 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_2} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{PriceEN.at(3)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_2} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{PriceEN.at(3)?.label}</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fram2}>
                {type === 1 ? (
                  <p className={styles.textHeading2_overviwe}></p>
                ) : (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                    {PriceEN.at(13)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe3_5}>
                    {PriceEN.at(14)?.label}
                    </p>
                  </>
                )}
              </div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(4)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(5)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(6)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(7)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(8)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(9)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(10)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(11)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.boxAutocomplete1}>
                      <div>
                        <div style={{ marginBottom: 10 }}>
                          <p className={styles.Htext0}>{PriceEN.at(15)?.label}</p>
                        </div>
                        <div className={styles.boxAutocomplete2}>
                          <div>
                            <p className={styles.Htext1}>Type Document</p>
                            <ThemeProvider theme={theme}>
                              <Autocomplete
                                id="country-select-demo"
                                className={classes.root}
                                options={data2}
                                defaultValue={null}
                                autoHighlight
                                value={from?.document_Type}
                                onChange={(event, value) =>
                                  setFrom({
                                    ...from,
                                    document_Type: value?.label,
                                  })
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#828282",
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
                                    placeholder="Select Type"
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  value === undefined ||
                                  value === "" ||
                                  option.id === value.id
                                }
                              />
                            </ThemeProvider>
                          </div>
                          <div>
                            <p className={styles.Htext1}>Rating</p>
                            <ThemeProvider theme={theme}>
                              <Autocomplete
                                id="country-select-demo"
                                className={classes.root}
                                options={data2_1}
                                defaultValue={null}
                                autoHighlight
                                value={from?.Rating}
                                onChange={(event, value) =>
                                  setFrom({ ...from, Rating: value?.label })
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#828282",
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
                                    placeholder="Select Rating"
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  value === undefined ||
                                  value === "" ||
                                  option.id === value.id
                                }
                              />
                            </ThemeProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>English,ไทย</p>
                        </div>
                      </div>

                      {/* <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="English" a={Aoc} />
              </div>
            </>
          ) : Doc === "Thai" ? (
            <>
            <div className={styles.fram1}>
              <div className={styles.boxBlue_overviwe}>
                <p className={styles.h_text1}>{PriceTH.at(0)?.label}</p>
                <p className={styles.h_text2}>
                {PriceTH.at(1)?.label}
                </p>

                <div className={styles.set_fram1_button}>
                  {type === 1 ? (
                    <button
                      className={styles.btn_fram1_1}
                      onClick={() => handle(1)}
                    >
                      <div className={styles.Imgbtn_btn_fram1_1} />
                      <div className={styles.Inbtn_fram1_1} />
                      <p>{PriceTH.at(2)?.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram1_2}
                      onClick={() => handle(1)}
                    >
                      <div className={styles.Imgbtn_btn_fram2_1} />
                      <div className={styles.Inbtn_fram1_2} />
                      <p>{PriceTH.at(2)?.label}</p>
                    </button>
                  )}

                  {type === 2 ? (
                    <button
                      className={styles.btn_fram1_1}
                      onClick={() => handle(2)}
                    >
                      <div className={styles.Imgbtn_btn_fram2_2} />
                      <div className={styles.Inbtn_fram1_1} />
                      <p>{PriceTH.at(3)?.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram1_2}
                      onClick={() => handle(2)}
                    >
                      <div className={styles.Imgbtn_btn_fram1_2} />
                      <div className={styles.Inbtn_fram1_2} />
                      <p>{PriceTH.at(3)?.label}</p>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.fram2}>
              {type === 1 ? (
                <p className={styles.textHeading2_overviwe}></p>
              ) : (
                <>
                  <p className={styles.textHeading2_overviwe}>
                  {PriceTH.at(13)?.label}
                  </p>
                  <p className={styles.textHeading2_overviwe3_5}>
                  {PriceTH.at(14)?.label}
                  </p>
                </>
              )}
            </div>

            {type === 1 ? (
              <div className={styles.fram3}>
                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceTH.at(4)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceTH.at(5)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceTH.at(6)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceTH.at(7)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceTH.at(8)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceTH.at(9)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceTH.at(10)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceTH.at(11)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.fram3_5}>
                <div className={styles.detailefram3_5}>
                  <div className={styles.boxAutocomplete1}>
                    <div>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext0}>{PriceTH.at(15)?.label}</p>
                      </div>
                      <div className={styles.boxAutocomplete2}>
                        <div>
                          <p className={styles.Htext1}>Type Document</p>
                          <ThemeProvider theme={theme}>
                            <Autocomplete
                              id="country-select-demo"
                              className={classes.root}
                              options={data2}
                              defaultValue={null}
                              autoHighlight
                              value={from?.document_Type}
                              onChange={(event, value) =>
                                setFrom({
                                  ...from,
                                  document_Type: value?.label,
                                })
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#828282",
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
                                  placeholder="Select Type"
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </ThemeProvider>
                        </div>
                        <div>
                          <p className={styles.Htext1}>Rating</p>
                          <ThemeProvider theme={theme}>
                            <Autocomplete
                              id="country-select-demo"
                              className={classes.root}
                              options={data2_1}
                              defaultValue={null}
                              autoHighlight
                              value={from?.Rating}
                              onChange={(event, value) =>
                                setFrom({ ...from, Rating: value?.label })
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#828282",
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
                                  placeholder="Select Rating"
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </ThemeProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.con_detailefram3_5}>
                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>English,ไทย</p>
                      </div>
                    </div>

                    {/* <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}

            <div style={{ width: "100vw" }}>
              <Footer v="Thai" a={Aoc} />
            </div>
          </>
          ) : Doc === "German" ? (
            <>
            <div className={styles.fram1}>
              <div className={styles.boxBlue_overviwe}>
                <p className={styles.h_text1}>{PriceDE.at(0)?.label}</p>
                <p className={styles.h_text2}>
                {PriceDE.at(1)?.label}
                </p>

                <div className={styles.set_fram1_button}>
                  {type === 1 ? (
                    <button
                      className={styles.btn_fram1_1}
                      onClick={() => handle(1)}
                    >
                      <div className={styles.Imgbtn_btn_fram1_1} />
                      <div className={styles.Inbtn_fram1_1} />
                      <p>{PriceDE.at(2)?.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram1_2}
                      onClick={() => handle(1)}
                    >
                      <div className={styles.Imgbtn_btn_fram2_1} />
                      <div className={styles.Inbtn_fram1_2} />
                      <p>{PriceDE.at(2)?.label}</p>
                    </button>
                  )}

                  {type === 2 ? (
                    <button
                      className={styles.btn_fram1_1}
                      onClick={() => handle(2)}
                    >
                      <div className={styles.Imgbtn_btn_fram2_2} />
                      <div className={styles.Inbtn_fram1_1} />
                      <p>{PriceDE.at(3)?.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.btn_fram1_2}
                      onClick={() => handle(2)}
                    >
                      <div className={styles.Imgbtn_btn_fram1_2} />
                      <div className={styles.Inbtn_fram1_2} />
                      <p>{PriceDE.at(3)?.label}</p>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.fram2}>
              {type === 1 ? (
                <p className={styles.textHeading2_overviwe}></p>
              ) : (
                <>
                  <p className={styles.textHeading2_overviwe}>
                  {PriceDE.at(13)?.label}
                  </p>
                  <p className={styles.textHeading2_overviwe3_5}>
                  {PriceDE.at(14)?.label}
                  </p>
                </>
              )}
            </div>

            {type === 1 ? (
              <div className={styles.fram3}>
                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceDE.at(4)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceDE.at(5)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceDE.at(6)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceDE.at(7)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                    <div className={styles.bodertell} />
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceDE.at(8)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceDE.at(9)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>

                <div className={styles.detailefram3}>
                  <div className={styles.Boxbtn_fram3}>
                    <div className={styles.btn_fram3_2}>
                      <img src={Mask} alt="Mask" className={styles.Mask} />
                    </div>
                  </div>

                  <div className={styles.Indetailefram3}>
                    <>
                      <div className={styles.Indetailefram3_1}>
                        <p className={styles.textIndetailefram3_2}>
                        {PriceDE.at(10)?.label}
                        </p>
                      </div>
                      <div className={styles.boderbox} />
                      <div>
                        <p className={styles.textIndetailefram3_1}>
                        {PriceDE.at(11)?.label}
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.fram3_5}>
                <div className={styles.detailefram3_5}>
                  <div className={styles.boxAutocomplete1}>
                    <div>
                      <div style={{ marginBottom: 10 }}>
                        <p className={styles.Htext0}>{PriceDE.at(15)?.label}</p>
                      </div>
                      <div className={styles.boxAutocomplete2}>
                        <div>
                          <p className={styles.Htext1}>Type Document</p>
                          <ThemeProvider theme={theme}>
                            <Autocomplete
                              id="country-select-demo"
                              className={classes.root}
                              options={data2}
                              defaultValue={null}
                              autoHighlight
                              value={from?.document_Type}
                              onChange={(event, value) =>
                                setFrom({
                                  ...from,
                                  document_Type: value?.label,
                                })
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#828282",
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
                                  placeholder="Select Type"
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </ThemeProvider>
                        </div>
                        <div>
                          <p className={styles.Htext1}>Rating</p>
                          <ThemeProvider theme={theme}>
                            <Autocomplete
                              id="country-select-demo"
                              className={classes.root}
                              options={data2_1}
                              defaultValue={null}
                              autoHighlight
                              value={from?.Rating}
                              onChange={(event, value) =>
                                setFrom({ ...from, Rating: value?.label })
                              }
                              popupIcon={
                                <MdArrowDropDown
                                  style={{
                                    color: "#828282",
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
                                  placeholder="Select Rating"
                                />
                              )}
                              isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                value === "" ||
                                option.id === value.id
                              }
                            />
                          </ThemeProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.con_detailefram3_5}>
                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>English,ไทย</p>
                      </div>
                    </div>

                    {/* <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 Official Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div>

                    <div className={styles.Boxfram3_5}>
                      <div className={styles.ImgBox3_5_1}>
                        <FaUserCircle
                          alt="avatar"
                          className={styles.profile}
                        />
                        <div className={styles.topBoxfram3_5}>
                          <p> Habi Yang</p>
                          <div
                            style={{
                              display: " inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <AiFillStar className={styles.star} />
                            <p>0.0</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.detaileframIBox3_5_1}>
                        <div className={styles.Top20} />
                        <p>Top 10 General Document</p>
                        <div className={styles.budget} />
                        <p>
                          <p>English,ไทย</p>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}

            <div style={{ width: "100vw" }}>
              <Footer v="German" a={Aoc} />
            </div>
          </>
          ) : (
            <>
              <div className={styles.fram1}>
                <div className={styles.boxBlue_overviwe}>
                  <p className={styles.h_text1}>{PriceEN.at(0)?.label}</p>
                  <p className={styles.h_text2}>
                  {PriceEN.at(1)?.label}
                  </p>

                  <div className={styles.set_fram1_button}>
                    {type === 1 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_1} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{PriceEN.at(2)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(1)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_1} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{PriceEN.at(2)?.label}</p>
                      </button>
                    )}

                    {type === 2 ? (
                      <button
                        className={styles.btn_fram1_1}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram2_2} />
                        <div className={styles.Inbtn_fram1_1} />
                        <p>{PriceEN.at(3)?.label}</p>
                      </button>
                    ) : (
                      <button
                        className={styles.btn_fram1_2}
                        onClick={() => handle(2)}
                      >
                        <div className={styles.Imgbtn_btn_fram1_2} />
                        <div className={styles.Inbtn_fram1_2} />
                        <p>{PriceEN.at(3)?.label}</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.fram2}>
                {type === 1 ? (
                  <p className={styles.textHeading2_overviwe}></p>
                ) : (
                  <>
                    <p className={styles.textHeading2_overviwe}>
                    {PriceEN.at(13)?.label}
                    </p>
                    <p className={styles.textHeading2_overviwe3_5}>
                    {PriceEN.at(14)?.label}
                    </p>
                  </>
                )}
              </div>

              {type === 1 ? (
                <div className={styles.fram3}>
                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(4)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(5)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(6)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(7)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                      <div className={styles.bodertell} />
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(8)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(9)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>

                  <div className={styles.detailefram3}>
                    <div className={styles.Boxbtn_fram3}>
                      <div className={styles.btn_fram3_2}>
                        <img src={Mask} alt="Mask" className={styles.Mask} />
                      </div>
                    </div>

                    <div className={styles.Indetailefram3}>
                      <>
                        <div className={styles.Indetailefram3_1}>
                          <p className={styles.textIndetailefram3_2}>
                          {PriceEN.at(10)?.label}
                          </p>
                        </div>
                        <div className={styles.boderbox} />
                        <div>
                          <p className={styles.textIndetailefram3_1}>
                          {PriceEN.at(11)?.label}
                          </p>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.fram3_5}>
                  <div className={styles.detailefram3_5}>
                    <div className={styles.boxAutocomplete1}>
                      <div>
                        <div style={{ marginBottom: 10 }}>
                          <p className={styles.Htext0}>{PriceEN.at(15)?.label}</p>
                        </div>
                        <div className={styles.boxAutocomplete2}>
                          <div>
                            <p className={styles.Htext1}>Type Document</p>
                            <ThemeProvider theme={theme}>
                              <Autocomplete
                                id="country-select-demo"
                                className={classes.root}
                                options={data2}
                                defaultValue={null}
                                autoHighlight
                                value={from?.document_Type}
                                onChange={(event, value) =>
                                  setFrom({
                                    ...from,
                                    document_Type: value?.label,
                                  })
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#828282",
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
                                    placeholder="Select Type"
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  value === undefined ||
                                  value === "" ||
                                  option.id === value.id
                                }
                              />
                            </ThemeProvider>
                          </div>
                          <div>
                            <p className={styles.Htext1}>Rating</p>
                            <ThemeProvider theme={theme}>
                              <Autocomplete
                                id="country-select-demo"
                                className={classes.root}
                                options={data2_1}
                                defaultValue={null}
                                autoHighlight
                                value={from?.Rating}
                                onChange={(event, value) =>
                                  setFrom({ ...from, Rating: value?.label })
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#828282",
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
                                    placeholder="Select Rating"
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  value === undefined ||
                                  value === "" ||
                                  option.id === value.id
                                }
                              />
                            </ThemeProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.con_detailefram3_5}>
                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>English,ไทย</p>
                        </div>
                      </div>

                      {/* <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 Official Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div>

                      <div className={styles.Boxfram3_5}>
                        <div className={styles.ImgBox3_5_1}>
                          <FaUserCircle
                            alt="avatar"
                            className={styles.profile}
                          />
                          <div className={styles.topBoxfram3_5}>
                            <p> Habi Yang</p>
                            <div
                              style={{
                                display: " inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <AiFillStar className={styles.star} />
                              <p>0.0</p>
                            </div>
                          </div>
                        </div>
                        <div className={styles.detaileframIBox3_5_1}>
                          <div className={styles.Top20} />
                          <p>Top 10 General Document</p>
                          <div className={styles.budget} />
                          <p>
                            <p>English,ไทย</p>
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              )}

              <div style={{ width: "100vw" }}>
                <Footer v="English" a={Aoc} />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className={styles.fram1}>
            <div className={styles.boxBlue_overviwe}>
              <p className={styles.h_text1}>การประเมินราคาและ</p>
              <p className={styles.h_text1}>ขั้นตอนการสั่งแปล</p>
              <p className={styles.h_text2}>
                New options to help you translate <br />
                the language you want.
              </p>

              <div className={styles.set_fram1_button}>
                {type === 1 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_1} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>ขั้นตอนการดำเนินการแปล</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(1)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_1} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>ขั้นตอนการดำเนินการแปล</p>
                  </button>
                )}

                {type === 2 ? (
                  <button
                    className={styles.btn_fram1_1}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram2_2} />
                    <div className={styles.Inbtn_fram1_1} />
                    <p>ขั้นตอนการประเมินราคา</p>
                  </button>
                ) : (
                  <button
                    className={styles.btn_fram1_2}
                    onClick={() => handle(2)}
                  >
                    <div className={styles.Imgbtn_btn_fram1_2} />
                    <div className={styles.Inbtn_fram1_2} />
                    <p>ขั้นตอนการประเมินราคา</p>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={styles.fram2}>
            {type === 1 ? (
              <p className={styles.textHeading2_overviwe}></p>
            ) : (
              <div className={styles.fram2_2}>
                <p className={styles.textHeading2_overviwe}>
                  ขั้นตอนการประเมินราคา
                </p>
                <p className={styles.textHeading2_overviwe3_5}>
                  การประเมินราคาการแปล ขึ้นอยู่กับชิ้นงานหรือประเภทงานแปลนั้นๆ
                  อีกทั้งยังมีเซอร์วิสต่างจากนักแปล
                  ซึ่งราคาและขั้นตอนจะแตกต่างกันไปแล้วแต่นักแปลที่ท่านเลือก
                </p>
              </div>
            )}
          </div>

          {type === 1 ? (
            <div className={styles.fram3}>
              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  <div className={styles.btn_fram3_2}>
                    <img src={Mask} alt="Mask" className={styles.Mask} />
                  </div>
                  <div className={styles.bodertell} />
                </div>

                <div className={styles.Indetailefram3}>
                  <>
                    <div className={styles.Indetailefram3_1}>
                      <p className={styles.textIndetailefram3_2}>
                        1.เลือกประเภทเอกสารที่
                        <br />
                        ต้องการแปล
                      </p>
                    </div>
                    <div className={styles.boderbox} />
                    <div>
                      <p className={styles.textIndetailefram3_1}>
                        ประเภทเอกสารราชการ เช่น ใบเกิด ใบสมรส ทะเบียนบ้าน
                        เป็นต้น ประเภททั่วไป เช่น วิทยานิพนธ์ บทหนัง
                        ซับไตเติ้ลต่างๆ
                      </p>
                    </div>
                  </>
                </div>
              </div>

              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  <div className={styles.btn_fram3_2}>
                    <img src={Mask} alt="Mask" className={styles.Mask} />
                  </div>
                  <div className={styles.bodertell} />
                </div>

                <div className={styles.Indetailefram3}>
                  <>
                    <div className={styles.Indetailefram3_1}>
                      <p className={styles.textIndetailefram3_2}>
                        2.จับคู่นักแปล
                      </p>
                    </div>
                    <div className={styles.boderbox} />
                    <div>
                      <p className={styles.textIndetailefram3_1}>
                        ระบบจะจับคู่นักแปลที่เหมาะสมกับงานให้ผู้ใช้ได้เลือก
                        โดยนักแปล จะมีเรทดาวและความสามารถ
                        ในการแปลแสดงให้อยู่ที่หน้าโปรไฟล์
                      </p>
                    </div>
                  </>
                </div>
              </div>

              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  <div className={styles.btn_fram3_2}>
                    <img src={Mask} alt="Mask" className={styles.Mask} />
                  </div>
                  <div className={styles.bodertell} />
                </div>

                <div className={styles.Indetailefram3}>
                  <>
                    <div className={styles.Indetailefram3_1}>
                      <p className={styles.textIndetailefram3_2}>
                        3.ดำเนินการแปล
                      </p>
                    </div>
                    <div className={styles.boderbox} />
                    <div>
                      <p className={styles.textIndetailefram3_1}>
                        เมื่อผู้ใช้ทำการชำระเงินเสร็จแล้ว
                        นักแปลจะเริ่มดำเนินการแปล โดยจะมีระยะเวลาในการส่งงานตาม
                        ที่ผู้ใช้กับนักแปลได้ตกลงกัน
                      </p>
                    </div>
                  </>
                </div>
              </div>

              <div className={styles.detailefram3}>
                <div className={styles.Boxbtn_fram3}>
                  <div className={styles.btn_fram3_2}>
                    <img src={Mask} alt="Mask" className={styles.Mask} />
                  </div>
                </div>

                <div className={styles.Indetailefram3}>
                  <>
                    <div className={styles.Indetailefram3_1}>
                      <p className={styles.textIndetailefram3_2}>
                        4.ส่งงานแปลให้ลูกค้า
                      </p>
                    </div>
                    <div className={styles.boderbox} />
                    <div>
                      <p className={styles.textIndetailefram3_1}>
                        เมื่อถึงระยะเวลาส่งงานนักแปลจะส่งมอบงานแปลให้กับผู้ใช้ได้
                        ตรวจสอบข้อมูลและผู้ใช้สามารถ ดาวน์โหลดงานแปลออกไปได้
                      </p>
                    </div>
                  </>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.fram3_5}>
              <div className={styles.detailefram3_5}>
                <div className={styles.boxAutocomplete1}>
                  <div>
                    <div style={{ marginBottom: 10 }}>
                      <p className={styles.Htext0}>นักแปลที่มีอยู่ในระบบ</p>
                    </div>
                    <div className={styles.boxAutocomplete2}>
                      <div>
                        <p className={styles.Htext1}>Type Document</p>
                        <ThemeProvider theme={theme}>
                          <Autocomplete
                            id="country-select-demo"
                            className={classes.root2}
                            options={data2}
                            defaultValue={null}
                            autoHighlight
                            value={from?.document_Type}
                            onChange={(event, value) =>
                              setFrom({ ...from, document_Type: value?.label })
                            }
                            popupIcon={
                              <MdArrowDropDown
                                style={{
                                  color: "#828282",
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
                                placeholder="Select Type"
                              />
                            )}
                            isOptionEqualToValue={(option, value) =>
                              value === undefined ||
                              value === "" ||
                              option.id === value.id
                            }
                          />
                        </ThemeProvider>
                      </div>
                      <div>
                        <p className={styles.Htext1}>Rating</p>
                        <ThemeProvider theme={theme}>
                          <Autocomplete
                            id="country-select-demo"
                            className={classes.root2}
                            options={data2_1}
                            defaultValue={null}
                            autoHighlight
                            value={from?.Rating}
                            onChange={(event, value) =>
                              setFrom({ ...from, Rating: value?.label })
                            }
                            popupIcon={
                              <MdArrowDropDown
                                style={{
                                  color: "#828282",
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
                                placeholder="Select Rating"
                              />
                            )}
                            isOptionEqualToValue={(option, value) =>
                              value === undefined ||
                              value === "" ||
                              option.id === value.id
                            }
                          />
                        </ThemeProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.con_detailefram3_5}>
                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1}>
                      <FaUserCircle alt="avatar" className={styles.profile} />
                      <div className={styles.topBoxfram3_5}>
                        <p> Habi Yang</p>
                        <div
                          style={{
                            display: " inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <AiFillStar className={styles.star} />
                          <p>0.0</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.detaileframIBox3_5_1}>
                      <div className={styles.Top20} />
                      <p>Top 10 Official Document</p>
                      <div className={styles.budget} />
                      <p>English,ไทย</p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1}>
                      <FaUserCircle alt="avatar" className={styles.profile} />
                      <div className={styles.topBoxfram3_5}>
                        <p> Habi Yang</p>
                        <div
                          style={{
                            display: " inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <AiFillStar className={styles.star} />
                          <p>0.0</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.detaileframIBox3_5_1}>
                      <div className={styles.Top20} />
                      <p>Top 10 General Document</p>
                      <div className={styles.budget} />
                      <p>
                        <p>English,ไทย</p>
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1}>
                      <FaUserCircle alt="avatar" className={styles.profile} />
                      <div className={styles.topBoxfram3_5}>
                        <p> Habi Yang</p>
                        <div
                          style={{
                            display: " inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <AiFillStar className={styles.star} />
                          <p>0.0</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.detaileframIBox3_5_1}>
                      <div className={styles.Top20} />
                      <p>Top 10 Official Document</p>
                      <div className={styles.budget} />
                      <p>
                        <p>English,ไทย</p>
                      </p>
                    </div>
                  </div>

                  <div className={styles.Boxfram3_5}>
                    <div className={styles.ImgBox3_5_1}>
                      <FaUserCircle alt="avatar" className={styles.profile} />
                      <div className={styles.topBoxfram3_5}>
                        <p> Habi Yang</p>
                        <div
                          style={{
                            display: " inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <AiFillStar className={styles.star} />
                          <p>0.0</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.detaileframIBox3_5_1}>
                      <div className={styles.Top20} />
                      <p>Top 10 General Document</p>
                      <div className={styles.budget} />
                      <p>
                        <p>English,ไทย</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div style={{ width: "100vw" }}>
            <Footer v="English" a={Aoc} />
          </div>
        </>
      )}
    </>
  );
};
export default Price;
