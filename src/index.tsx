import React from "react";
import { createRoot } from "react-dom/client";
import RootRoute from "./router/index";
import "./i18n/index";
import "antd/dist/antd.css";
createRoot(document.querySelector("#app_root") as Element).render(<RootRoute />);
