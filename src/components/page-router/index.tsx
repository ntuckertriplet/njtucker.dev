import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "../../pages/about-me";
import Error from "../../pages/error";
import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import Resume from "../../pages/resume";

export const PageRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
