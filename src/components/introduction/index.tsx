import { Box, Grid, Typography } from "@mui/material";

import Carbon from "./carbon.png";

const Introduction = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={12}
      width="80%"
    >
      <Grid item xs={6}>
        <Grid container direction="column" spacing={2}>
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
      <Grid item xs={6}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box
              component="img"
              sx={{ height: "100%", width: "100%" }}
              src={Carbon}
              alt="carbon"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introduction;
