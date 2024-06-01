import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./utils/Themes";
import { BrowserRouter} from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Hero1 from "./components/section/Hero1";
import Skills from "./components/section/Skills";
import Education from "./components/section/Education";
import Projects from "./components/section/Projects";
import Footer from "./components/section/Footer";
const Body=styled.div`
  background-color:${({theme})=>theme.bg};
  color:${({theme})=>theme.text_primary};
  width:100%;
  height:100%;
  position:relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar1/>
      <Body>
        <Hero1/>
        <Skills/>
        <Education/>
        <Projects/>
        <Footer/>
      </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
