import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import { store } from "./redux/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DescriptionPost from "./components/DescriptionPost/DescriptionPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/description_post",
    element: <DescriptionPost/>
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
);
