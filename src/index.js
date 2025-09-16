import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./utils/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* для того чтобы новая страница по навигации окрывалась всегда с самого начала (с самого верха)
      взято инфу с https://v5.reactrouter.com/web/guides/scroll-restoration
      */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
