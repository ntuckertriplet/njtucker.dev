import { Box, Grid, Paper, styled } from "@mui/material";

import ColorToggleButton from "../color-toggle-button";

const Navbar = (): JSX.Element => {
  const StickyNav = styled(Box)`
    position: fixed;
    top: 0;
    width: 100vw;
  `;
  return (
    <StickyNav>
      <Paper elevation={8}>
        <Grid
          container
          justifyContent="flex-end"
          spacing={1}
          style={{ position: "sticky", top: 0 }}
        >
          <Grid item p={1} m={1}>
            <ColorToggleButton />
          </Grid>
        </Grid>
      </Paper>
    </StickyNav>
  );
};

export default Navbar;
