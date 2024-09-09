// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme } from "./utils/Themes";
// import Navbar from "./components/Navbar";
// import { BrowserRouter } from "react-router-dom";
// import Hero from "./components/sections/Hero";
// import Skills from "./components/sections/Skills";
// // import StarCanvas from "./components/canvas/Stars";
// import { AnimatePresence } from "framer-motion";
// import Projects from "./components/sections/Projects";
// import Footer from "./components/sections/Footer";
// import ProjectDetails from "./components/Dialog/ProjectDetails";
// import { useState } from "react";

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
//   position: relative;
// `;


// function App() {
//   const [openModal, setOpenModal] = useState({ state: false, project: null });
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <BrowserRouter>
//         <Navbar />
//         <Body>
//           {/* <StarCanvas /> */}
//           <AnimatePresence>
//             <div>
//               <Hero />
//               <Skills />
//               <Projects openModal={openModal} setOpenModal={setOpenModal} />
//               <Footer />
//               {openModal.state && (
//                 <ProjectDetails
//                   openModal={openModal}
//                   setOpenModal={setOpenModal}
//                 />
//               )}
//             </div>
//           </AnimatePresence>
//         </Body>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;


import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes"; // Import both themes
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [theme, setTheme] = useState("dark"); // Add state for theme

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle between light and dark themes
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Navbar themeToggler={themeToggler} theme={theme} /> {/* Pass themeToggler to Navbar */}
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Skills />
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
