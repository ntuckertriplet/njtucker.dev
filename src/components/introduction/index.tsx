import { Box, Grid, Typography } from "@mui/material";

import Carbon from "./carbon.png";

const Introduction = (): JSX.Element => {
  return (
    <Grid container alignItems="center" maxWidth="1500px" m={15}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hello, I'm Nate Tucker!
        </Typography>
        <Typography gutterBottom>
          I am a software engineer who has done it all! I've worked in the cloud
          writing React applications and absurd amounts of YAML, all the way
          down to R&D'ing networking protocols at a bit level.
        </Typography>
        <Typography>
          Every day is a new learning opportunity and I love to expand my
          horizons and my skills. If you are interested, take a look at some of
          my projects! You can also reach out and contact me directly about any
          programming opportunities you may think I am suited for.
        </Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 300, md: 600 },
              maxWidth: { xs: 400, md: 750 },
            }}
            alt="TypeScript code snippet"
            src={Carbon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
