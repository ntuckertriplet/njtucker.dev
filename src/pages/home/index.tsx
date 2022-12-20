import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/page-container/page-container";

const Home = () => {
  return (
    <PageContainer>
      <Box sx={{ m: 2, maxWidth: 700 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Hello, I'm Nate Tucker!
        </Typography>
        <Typography>
          Thanks for deciding to check out my site! While you're here, I invite
          you to check out my project showcase or take a look at my resume. In
          JSON format or PDF version, take your pick! You can also see my Blog
          and hear all about my ventures in homelabs, networking, servers, and
          spending too much money on things I will never regret. I also talk
          about my ventures home theater and audio as well as audio production
          and mixing, if that interests you. So take a look around!
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Home;
