import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.black};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 30px;
  }
`;

// const Desc = styled.div`
//   font-size: 18px;
//   width: 50%
//   text-align: center;
//   margin-bottom: 40px;
//   color: ${({ theme }) => theme.black};
//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;
const Desc = styled.div`
  font-size: 18px;
  width: 50%;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.black + 99};

  @media (max-width: 768px) {
    font-size: 14px;
    width: 70%; 
  }
`;


const ToggleButtonGroup = styled.div`
display: flex;
border: 1px solid rgba(0, 128, 128, 0.125);
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 50px;
font-weight 500;
margin: 22px 0;
padding: 10px 20p;
@media (max-width: 768px){
    
    font-size: 14px;
    
}
@media (max-width: 640px){
  flex-direction: column;
  border: none;
  text-align: center;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 50px;
  cursor: pointer;
  margin: 5px;
 
  @media (max-width: 768px) {
    padding: 6px 10px;
    border-radius: 50px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary};
  color: ${theme.white};
  `}
`;

// const Divider = styled.div`
//   width: 1.5px;
//   background: ${({ theme }) => theme.primary};
// `;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Explore a collection of my projects showcasing my skills in frontend development.
        They reflect my approach to building practical and user-friendly web applications.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All Projects
          </ToggleButton>
          
          <ToggleButton
            active={toggle === "front-end"}
            onClick={() => setToggle("front-end")}
          >
            Front-End Projects
          </ToggleButton>
       
          <ToggleButton
            active={toggle === "full-stack"}
            onClick={() => setToggle("full-stack")}
          >
            Full-Stack Projects
          </ToggleButton>
        
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
