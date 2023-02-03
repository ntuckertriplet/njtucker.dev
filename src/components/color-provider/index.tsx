import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";

import ColorContext from "../../context/color-context";
import { ColorProviderProps } from "./color-provider.props";
import { useState } from "react";

const ColorProvider = ({ children }: ColorProviderProps) => {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const [theme, setTheme] = useState<Theme>(
    createTheme({
      palette: {
        mode: "light",
      },
    })
  );

  const toggleFunction = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");

    setTheme(
      createTheme({
        palette: {
          mode: colorMode === "light" ? "dark" : "light",
        },
      })
    );
  };

  return (
    <ColorContext.Provider
      value={{ mode: colorMode, toggleColorMode: toggleFunction }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorContext.Provider>
  );
};

export default ColorProvider;
