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
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 16px;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
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

  background: ${({ theme }) => theme.text_primary};
  background: linear-gradient(225deg, #008080, #f5f5dc);
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }

  color: white;
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>

        <motion.div {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <TextLoop>
              I am a
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
