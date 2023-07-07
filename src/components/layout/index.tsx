import Footer from "../footer";
import NavBar from "../navbar";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
