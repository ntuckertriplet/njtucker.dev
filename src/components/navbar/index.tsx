import ColorToggleButton from "../color-toggle-button";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Grid
      container
      justifyContent="flex-end"
      spacing={1}
      style={{ position: "sticky", top: 0 }}
    >
      <Grid item p={3} m={3}>
        <ColorToggleButton />
      </Grid>
    </Grid>
  );
};

export default Navbar;
