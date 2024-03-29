"use client";
import Canvas from "../components/canvas/Canvas";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Projects from "@/components/projects/Projects";
import { StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[800],
//     },
//     secondary: {
//       main: purple[800],
//     }
//   },
// });

export default function page() {
  return (
    <>

        {/* <Canvas /> */}
        <div id="mainDiv">
          <Header />
          <About />
          <Projects />
          <footer>
            <p>Ash @2024</p>
          </footer>
        </div>
    </>
  );
}
