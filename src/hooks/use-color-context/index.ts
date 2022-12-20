import ColorContext from "../../context/color-context";
import { useContext } from "react";

const useColorContext = () => {
  return useContext(ColorContext);
};

export default useColorContext;
