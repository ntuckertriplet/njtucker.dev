import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Error from "../../pages/error";

export const PageRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
