import React, { useEffect, lazy, Suspense } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import Loadinganimation from "./Images/Loadinganimation.json";

import "./App.css";

// import Home from "./Components/Home/Home.js";

function App() {
  const dispatch = useDispatch();
  // verion2
  const Home = lazy(() => import("./Components/Home/Home.jsx"));
  const Customer = lazy(() => import("./Components/Home/Customer.jsx"));
  const ServicesOfficial = lazy(() =>
    import("./Components/Services/Services_official.jsx")
  );
  const ServicesGeneral = lazy(() =>
    import("./Components/Services/Services_general.jsx")
  );
  // verion1
  const Freelance = lazy(() =>
    import("./Components/Dashboard/Dashboard_freelance")
  );
  const Translator = lazy(() => import("./Components/Home/Translator"));
  const Home2 = lazy(() => import("./Components/Home/Home2.js"));
  const Login = lazy(() => import("./Components/Login/Login.jsx"));
  const ForgetPassword = lazy(() =>
    import("./Components/Login/ForgetPassword.jsx")
  );
  const CreateNewPassword = lazy(() =>
    import("./Components/Login/CreateNewPassword.jsx")
  );
  const Signup = lazy(() => import("./Components/Sign_up/Signup.jsx"));
  // const Chat = lazy(() => import("./Components/Chat/ChatCustomer"));
  // const Chats = lazy(() => import("./Components/Chat/ChatTansalat"));
  // const Order = lazy(() => import("./Components/Order/Order"));
  // const Matching = lazy(() => import("./Components/Matching/Matching"));
  const AboutUs = lazy(() => import("./Components/About_us/About_us.jsx"));
  const Notification = lazy(() =>
    import("./Components/Notification/NotificaionCustomer")
  );
  const Tool = lazy(() => import("./Components/Tool/Tool"));
  const Price = lazy(() => import("./Components/Price/Price.jsx"));
  
  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            width: "100vw",
            justifyContent: "center",
            marginTop: "5vw",
          }}
        >
          <Lottie animationData={Loadinganimation} loop={true} />
        </div>
      }
    >
      <div className="App">
        <BrowserRouter>
          <div className="App-body">
            <StyledEngineProvider injectFirst>
              <ToastContainer />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home/Order/Customer" element={<Customer />} />
                <Route path="/About_us" element={<AboutUs />} />
                <Route
                  path="/Services_official"
                  element={<ServicesOfficial />}
                />
                <Route path="/Services_general" element={<ServicesGeneral />} />
                <Route path="/Price" element={<Price />} />
                <Route path="/Notification" element={<Notification />} />
                {/* <Route path="/Matching" element={<Matching />} /> */}
                <Route
                  path="/Home/Services/Translator"
                  element={<Translator />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route
                  path="/CreateNewPassword"
                  element={<CreateNewPassword />}
                />
                <Route path="/Signup" element={<Signup />} />

                <Route path="/In" element={<Home2 />} />
                {/* <Route path="/Order" element={<Order />} /> */}
                <Route path="/Dashboard_freelance" element={<Freelance />} />
                <Route path="/Tool" element={<Tool />} />
                {/* <Route path="/Chat" element={<Chat />} />
                <Route path="/Chats" element={<Chats />} /> */}
              </Routes>
            </StyledEngineProvider>
          </div>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
