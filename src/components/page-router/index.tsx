import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "../../pages/error";
import Home from "../../pages/home";

const PageRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
