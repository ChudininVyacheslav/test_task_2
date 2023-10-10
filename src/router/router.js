import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import DescriptionPost from "../components/DescriptionPost/DescriptionPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/description_post",
    element: <DescriptionPost />,
  },
]);
