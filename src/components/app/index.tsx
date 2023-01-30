import ColorProvider from "../color-provider";
import { CssBaseline } from "@mui/material";
import PageRouter from "../page-router";

const App = () => {
  return (
    <ColorProvider>
      <CssBaseline />
      <PageRouter />
    </ColorProvider>
  );
};

export default App;
