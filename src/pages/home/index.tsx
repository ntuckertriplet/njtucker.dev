import { Box, Typography } from "@mui/material";

import PageContainer from "../../components/page-container/page-container";

const Home = () => {
  return (
    <PageContainer>
      <Box sx={{ m: 2, maxWidth: 700 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          (Site Under Construction) Hello, I'm Nate Tucker!
        </Typography>
        <Typography>
          Hello, if you're seeing this message, that means the site is currently
          under construction! Come back in a little and it will be much better
          and with more information. In the meantime, feel free to check out the
          links below!
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Home;
