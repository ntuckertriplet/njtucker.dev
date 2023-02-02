import { Grid } from "@mui/material";
import Introduction from "../../components/introduction";
import PageContainer from "../../components/page-container/page-container";
import ProjectGrid from "../../components/project-grid";

const Home = () => {
  return (
    <PageContainer>
      <Grid item height="100vh">
        <Introduction />
      </Grid>
      {/* <Grid item height="80vh">
        <ProjectGrid />
      </Grid> */}
    </PageContainer>
  );
};

export default Home;
