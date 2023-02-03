import { Box, Grid, IconButton, Link, Paper, styled } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const StickyFooter = styled(Box)`
    position: fixed;
    bottom: 0;
    width: 100vw;
  `;

  return (
    <StickyFooter>
      <Paper elevation={12}>
        <Grid container columns={3} alignItems="center" justifyContent="center">
          <Grid item>
            <IconButton
              LinkComponent={Link}
              title="Github"
              href="https://github.com/ntuckertriplet"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ p: 3 }}
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
              sx={{ p: 3 }}
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
              sx={{ p: 3 }}
            >
              <Email />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </StickyFooter>
  );
};

export default Footer;
