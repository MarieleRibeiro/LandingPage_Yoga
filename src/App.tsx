import { ThemeProvider } from "styled-components";
import LandingPage from "./pages/LandingPage";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
