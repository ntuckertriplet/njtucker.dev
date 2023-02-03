import { Grid } from "@mui/material";
import Introduction from "../../components/introduction";
import PageContainer from "../../components/page-container/page-container";

const Home = () => {
  return (
    <PageContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Introduction />
      </Grid>
    </PageContainer>
  );
};

export default Home;
