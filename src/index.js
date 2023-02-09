import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import ScrollToTop from "./Scroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            className="loader"
            style={{
              fontSize: "50px",
              fontWeight: 500,
              fontFamily: "Fredoka",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              position: "absolute"
            }}
          >
            <div className="load"></div>
          </div>
        }
      >
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
