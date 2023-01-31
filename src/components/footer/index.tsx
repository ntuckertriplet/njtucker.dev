import { Box, Grid, IconButton, Link, styled } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const StickyFooter = styled(Box)`
    position: fixed;
    bottom: 0;
  `;

  return (
    <StickyFooter sx={{ p: 4 }}>
      <Grid container spacing={6} columns={3} alignItems="center">
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
    </StickyFooter>
  );
};

export default Footer;
