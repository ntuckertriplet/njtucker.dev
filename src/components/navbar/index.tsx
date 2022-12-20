import { Box, styled } from "@mui/material";

import ColorToggleButton from "../color-toggle-button";

const Navbar = () => {
  const StickyNav = styled(Box)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <StickyNav sx={{ p: 4 }}>
      <ColorToggleButton />
    </StickyNav>
  );
};

export default Navbar;
