import ColorProvider from "../color-provider";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "../global-styles";
import PageRouter from "../page-router";

const App = () => {
  return (
    <ColorProvider>
      <GlobalStyle />
      <CssBaseline />
      <PageRouter />
    </ColorProvider>
  );
};

export default App;
