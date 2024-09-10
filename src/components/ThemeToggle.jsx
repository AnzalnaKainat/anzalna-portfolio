// import React from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import styled from "styled-components";

// const ToggleContainer = styled.div`
//   cursor: pointer;
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   margin-left: 20px; 
// `;

// const ThemeToggle = ({ themeToggler, theme }) => {
//   return (
//     <ToggleContainer onClick={themeToggler}>
//       {theme === "light" ? <FaMoon style={{ color: 'black' }} /> : <FaSun style={{ color: 'white' }} />}
//     </ToggleContainer>
//   );
// };

// export default ThemeToggle;
 

import React from "react";
import { IoToggleSharp } from "react-icons/io5";
import styled from "styled-components";

const ToggleContainer = styled.div`
  cursor: pointer;
  font-size: 32px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px
`;

const ThemeToggle = ({ themeToggler, theme }) => {
  return (
    <ToggleContainer onClick={themeToggler}>
      <IoToggleSharp style={{ transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)", color: theme === "light" ? 'black' : 'white' }} />
    </ToggleContainer>
  );
};

export default ThemeToggle;
