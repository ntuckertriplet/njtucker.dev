import { createContext } from "react";

const ColorContext = createContext<{
  mode: "light" | "dark";
  toggleColorMode: () => void;
}>({ mode: "light", toggleColorMode: () => {} });

export default ColorContext;
