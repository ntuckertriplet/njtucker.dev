import { Grid } from "@mui/material";
import Footer from "../footer";
import Navbar from "../navbar";
import PageContainerProps from "./page-container.props";

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
};

export default PageContainer;
