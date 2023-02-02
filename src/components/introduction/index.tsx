import { Box, Grid, Typography } from "@mui/material";

import Carbon from "./carbon.png";

const Introduction = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1500px"
    >
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Hello, I'm Nate Tucker!
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              I am a software engineer who has done it all! I've worked in the
              cloud writing React applications and absurd amounts of YAML, all
              the way down to R&D'ing networking protocols at a bit level.
            </Typography>
            <br />
            <Typography>
              Every day is a new learning opportunity and I love to expand my
              horizons and my skills. If you are interested, take a look at some
              of my projects! You can also reach out and contact me directly
              about any programming opportunities you may think I am suited for.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
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
    </Grid>
  );
};

export default Introduction;
