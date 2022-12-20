import { Box, Grid, IconButton, Link } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={6} columns={3}>
        <Grid item>
          <IconButton
            LinkComponent={Link}
            title="Github"
            href="https://github.com/ntuckertriplet"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            LinkComponent={Link}
            title="Github"
            href="https://www.linkedin.com/in/nathan-tucker-a74286161"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            LinkComponent={Link}
            title="Github"
            href="mailto:ntuckertriplet@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Email />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
