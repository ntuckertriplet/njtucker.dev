import Footer from "../footer";
import Navbar from "../navbar";
import PageContainerProps from "./page-container.props";

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
