import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
margin-top: 3rem;
align-items: center;
@media (max-width: 960px) {
  padding: 66px 16px;
}

@media (max-width: 640px) {
  padding: 32px 16px;
}
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

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   gap: 50px;
//   justify-content: center;
// `;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-top: 20px;
  gap: 50px; 
  justify-content: center;

`;


const Skill = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(0,128,128, 0.120);
  // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.black};
  @media (max-width: 768px) {
    // margin-top: 12px;
    font-size: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the skills I have developed and refined
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
