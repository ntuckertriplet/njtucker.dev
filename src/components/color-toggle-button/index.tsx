import { DarkMode, LightMode } from "@mui/icons-material";

import ColorContext from "../../context/color-context";
import { IconButton } from "@mui/material";
import { useContext } from "react";

const ColorToggleButton = () => {
  const { mode, toggleColorMode: setMode } = useContext(ColorContext);

  return (
    <IconButton onClick={setMode}>
      {mode === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ColorToggleButton;
