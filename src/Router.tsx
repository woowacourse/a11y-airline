import { createBrowserRouter } from "react-router-dom";
import Step1 from "@pages/Step1";
import Step2 from "@pages/Step2";
import NotFound from "@pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
    errorElement: <NotFound />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
]);

export default router;
