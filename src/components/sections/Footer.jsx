import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaLocationArrow } from "react-icons/fa"; 

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

    
  h1 {
    font-size: 45px; 
    // margin: 2rem; 
    width: 50%;
    color: ${({ theme }) => theme.black};
    @media (max-width: 768px) {
      font-size: 30px;
      width: 70%;
    }
  }

  div {
    font-size: 18px; 
    width: 50%;
    color: ${({ theme }) => theme.black + 99};
    @media (max-width: 768px) {
      font-size: 14px;
      width: 70%;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
`;

const EmailButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  margin-top: 2rem;
  background: ${({ theme }) => theme.text_primary};
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 960px) {
    padding: 12px 0;
    font-size: 14px;
    // margin-top: 2rem;
  }

  color: ${({ theme }) => theme.white};
`;

const Footer = () => {
  return (
    <FooterContainer id="Footer">
      <FooterWrapper>
        <h1>
          Ready to take your digital presence to the next level?
        </h1>
        <div>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </div>
        
        <EmailButton href="mailto:anzalnakainat@gmail.com" target="_blank">
            Let's get in touch <FaLocationArrow />
        </EmailButton>
      </FooterWrapper>

      <FooterWrapper>

        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Footer">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank">
            <GitHubIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Anzalna Kainat. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
