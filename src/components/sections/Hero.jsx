import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 2;
  text-align: center;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.black};
  line-height: 68px;

  @media (max-width: 960px) {
    font-size: 30px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  gap: 12px;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 5px;

  @media (max-width: 960px) {
    font-size: 10px;
    line-height: 48px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin: 1rem auto;
  // text-align: center;
  // justify-content: center;
  width: 50%;
  
  color: ${({ theme }) => theme.black + 99};

  @media (max-width: 960px) {
    font-size: 14px;
    line-height: 32px;
    width: 80%;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  margin-top: 8px;
  background: ${({ theme }) => theme.text_primary};
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 960px) {
    width: 70%;
    padding: 12px 0;
    font-size: 14px;
  }

  color: ${({ theme }) => theme.white};
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>

        <motion.div {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <Title>
              Hello, My name is <br /> {Bio.name}
            </Title>
          </motion.div>

          <motion.div {...headContentAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
          </motion.div>

          <ResumeButton href={Bio.resume} target="_blank">
            Check Resume
          </ResumeButton>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
