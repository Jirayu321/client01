import * as React from "react";
import { data } from "../Data/data";
import { TextField, Autocomplete, Box } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { BsInstagram, BsTwitter } from "react-icons/bs";

import App_store from "../../Images/App_store.png";
import Google_play from "../../Images/Google_play.png";

import logo from "../../logo.svg";

import { useNavigate } from "react-router-dom";
import { FooterEN, FooterDE, FooterTH } from "../Data/DataLanguage";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const navigate = useNavigate();

  let languages = props?.v;
  // let accept = props?.a;
  let pathname = window.location.pathname;
  const { innerWidth: width } = window;

  console.log("languages", languages);

  const switchLanguage = (x) => {
    console.log("x", x);
    if (pathname === "/") {
      if (x === "English") {
        navigate("/", { state: { languages: `${x}`, accept: true } });
      } else if (x === "German") {
        navigate("/", { state: { languages: `${x}`, accept: true } });
      } else if (x === "Thai") {
        navigate("/", { state: { languages: `${x}`, accept: true } });
      } else {
        navigate("/", { state: { languages: "English", accept: true } });
      }
    } else if (pathname === "/Home/Services/Customer") {
      if (x === "English") {
        navigate("/Home/Services/Customer", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "German") {
        navigate("/Home/Services/Customer", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "Thai") {
        navigate("/Home/Services/Customer", {
          state: { languages: `${x}`, accept: true },
        });
      } else {
        navigate("/Home/Services/Customer", {
          state: { languages: "English" },
        });
      }
    } else if (pathname === "/Home/Services/Translator") {
      if (x === "English") {
        navigate("/Home/Services/Translator", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "German") {
        navigate("/Home/Services/Translator", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "Thai") {
        navigate("/Home/Services/Translator", {
          state: { languages: `${x}`, accept: true },
        });
      } else {
        navigate("/Home/Services/Translator", {
          state: { languages: "English" },
        });
      }
    } else if (pathname === "/Price") {
      if (x === "English") {
        navigate("/Price", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "German") {
        navigate("/Price", {
          state: { languages: `${x}`, accept: true },
        });
      } else if (x === "Thai") {
        navigate("/Price", {
          state: { languages: `${x}`, accept: true },
        });
      } else {
        navigate("/Price", {
          state: { languages: "English" },
        });
      }
    }
  };

  return (
    <>
      {width > 1024 ? (
        <>
          {languages === "English" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div style={{ float: "left" }}>
                  <p className={styles.textFooter1}>{FooterEN[0].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[1].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[2].label}</p>
                  <div style={{ margin: 0, marginTop: 90 }}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ float: "left" }}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 200, background: "#ffff" }}
                    options={data}
                    autoHighlight
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  <p className={styles.textFooter1}>{FooterEN[3].label}</p>

                  <p className={styles.textFooter1}>{FooterEN[4].label}</p>

                  <p className={styles.textFooter1}>{FooterEN[5].label}</p>
                </div>

                <div className={styles.box4}>
                  <p className={styles.textFooter1}>{FooterEN[6].label}</p>
                  <p className={styles.textFooter2}>
                    {FooterEN[7].label}
                    <br />
                    {FooterEN[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div style={{ marginTop: 10 }}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterEN[9].label}.</p>
                <p className={styles.textFooter4}>{FooterEN[5].label}</p>
              </div>
            </>
          ) : languages === "Thai" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div style={{ float: "left" }}>
                  <p className={styles.textFooter1}>{FooterTH[0].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[1].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[2].label}</p>
                  <div style={{ margin: 0, marginTop: 56 }}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ float: "left" }}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 200, background: "#ffff" }}
                    options={data}
                    autoHighlight
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="เลือกภาษา"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  <p className={styles.textFooter1}>{FooterTH[3].label}</p>

                  <p className={styles.textFooter1}>{FooterTH[4].label}</p>

                  <p className={styles.textFooter1}>{FooterTH[5].label}</p>
                </div>

                <div className={styles.box4}>
                  <p className={styles.textFooter1}>{FooterTH[6].label}</p>

                  <p className={styles.textFooter2}>
                    {FooterTH[7].label}
                    <br />
                    {FooterTH[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div style={{ marginTop: 10 }}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterTH[9].label}.</p>
                <p className={styles.textFooter4}>{FooterTH[5].label}</p>
              </div>
            </>
          ) : languages === "German" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div style={{ float: "left" }}>
                  <p className={styles.textFooter1}>{FooterDE[0].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[1].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[2].label}</p>
                  <div style={{ margin: 0, marginTop: 90 }}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ float: "left" }}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 200, background: "#ffff" }}
                    options={data}
                    autoHighlight
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Wählen Sie eine Sprache"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  <p className={styles.textFooter1}>{FooterDE[3].label}</p>

                  <p className={styles.textFooter1}>{FooterDE[4].label}</p>

                  <p className={styles.textFooter1}>{FooterDE[5].label}</p>
                </div>

                <div className={styles.box4}>
                  <p className={styles.textFooter1}>{FooterDE[6].label}</p>

                  <p className={styles.textFooter2}>
                    {FooterDE[7].label}
                    <br />
                    {FooterDE[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div style={{ marginTop: 10 }}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterDE[9].label}.</p>
                <p className={styles.textFooter4}>{FooterDE[5].label}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div style={{ float: "left" }}>
                  <p className={styles.textFooter1}>{FooterEN[0].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[1].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[2].label}</p>
                  <div style={{ margin: 0, marginTop: 90 }}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>

                <div style={{ float: "left" }}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 200, background: "#ffff" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                  <p className={styles.textFooter1}>{FooterEN[3].label}</p>

                  <p className={styles.textFooter1}>{FooterEN[4].label}</p>

                  <p className={styles.textFooter1}>{FooterEN[5].label}</p>
                </div>

                <div className={styles.box4}>
                  <p className={styles.textFooter1}>{FooterEN[6].label}</p>

                  <p className={styles.textFooter2}>
                    {FooterEN[7].label}
                    <br />
                    {FooterEN[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div style={{ marginTop: 10 }}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterEN[9].label}.</p>
                <p className={styles.textFooter4}>{FooterEN[5].label}</p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {languages === "English" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.BoxAutocomplete}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ background: "#ffff", width: "80vw" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <p className={styles.textFooter1}>{FooterEN[0].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[1].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[2].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[3].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[4].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[5].label}</p>
                </div>

                <div className={styles.BoxAutocomplete}>
                  <p className={styles.textFooter1}>{FooterEN[6].label}</p>
                  <p className={styles.textFooter2}>
                    {FooterEN[7].label}
                    <br />
                    {FooterEN[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div className={styles.groupbutton}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>

                  <div className={styles.groupdownload}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterEN[9].label}.</p>
                <p className={styles.textFooter4}>{FooterEN[5].label}</p>
              </div>
            </>
          ) : languages === "Thai" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.BoxAutocomplete}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ background: "#ffff", width: "80vw" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <p className={styles.textFooter1}>{FooterTH[0].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[1].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[2].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[3].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[4].label}</p>
                  <p className={styles.textFooter1}>{FooterTH[5].label}</p>
                </div>

                <div className={styles.BoxAutocomplete}>
                  <p className={styles.textFooter1}>{FooterTH[6].label}</p>
                  <p className={styles.textFooter2}>
                    {FooterTH[7].label}
                    <br />
                    {FooterTH[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div className={styles.groupbutton}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>

                  <div className={styles.groupdownload}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterTH[9].label}.</p>
                <p className={styles.textFooter4}>{FooterTH[5].label}</p>
              </div>
            </>
          ) : languages === "German" ? (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.BoxAutocomplete}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ background: "#ffff", width: "80vw" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <p className={styles.textFooter1}>{FooterDE[0].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[1].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[2].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[3].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[4].label}</p>
                  <p className={styles.textFooter1}>{FooterDE[5].label}</p>
                </div>

                <div className={styles.BoxAutocomplete}>
                  <p className={styles.textFooter1}>{FooterDE[6].label}</p>
                  <p className={styles.textFooter2}>
                    {FooterDE[7].label}
                    <br />
                    {FooterDE[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div className={styles.groupbutton}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>

                  <div className={styles.groupdownload}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterDE[9].label}.</p>
                <p className={styles.textFooter4}>{FooterDE[5].label}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.ContentFooter}>
                <img src={logo} alt="logo" className={styles.logo} />
                <div className={styles.BoxAutocomplete}>
                  <Autocomplete
                    id="country-select-demo"
                    sx={{ background: "#ffff", width: "80vw" }}
                    options={data}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => switchLanguage(value?.label)}
                    popupIcon={
                      <MdArrowDropDown
                        style={{ color: "#034D82", width: 30, height: 33 }}
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
                        label="Choose a language"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                      />
                    )}
                  />
                </div>

                <div>
                  <p className={styles.textFooter1}>{FooterEN[0].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[1].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[2].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[3].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[4].label}</p>
                  <p className={styles.textFooter1}>{FooterEN[5].label}</p>
                </div>

                <div className={styles.BoxAutocomplete}>
                  <p className={styles.textFooter1}>{FooterEN[6].label}</p>
                  <p className={styles.textFooter2}>
                    {FooterEN[7].label}
                    <br />
                    {FooterEN[8].label}
                    <br />
                    09.00 - 18.00
                  </p>

                  <div className={styles.groupbutton}>
                    <button
                      className={styles.boxIconsFooter}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/translationhero/"
                        );
                      }}
                    >
                      <BsInstagram className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/translation.hero.company"
                        );
                      }}
                    >
                      <FaFacebookF className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/translation-hero/"
                        );
                      }}
                    >
                      <FaLinkedinIn className={styles.IconsFooter} />
                    </button>

                    <button
                      className={styles.boxIconsFooter}
                      onClick={() => {
                        window.open("https://twitter.com/Translationhero");
                      }}
                    >
                      <BsTwitter className={styles.IconsFooter} />
                    </button>
                  </div>

                  <div className={styles.groupdownload}>
                    <div
                      className={styles.boxImgFooter}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        className={styles.ImgApp_store}
                        src={App_store}
                        alt="App_store"
                      />
                    </div>
                    <div className={styles.boxImgFooter}>
                      <img
                        className={styles.ImgGoogle_play}
                        src={Google_play}
                        alt="Google_play"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.ContentFooter2}>
                <p className={styles.textFooter3}>{FooterEN[9].label}.</p>
                <p className={styles.textFooter4}>{FooterEN[5].label}</p>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Footer;
