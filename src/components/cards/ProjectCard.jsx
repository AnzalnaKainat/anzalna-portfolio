import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 420px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 128, 128, 0.125);
  // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(133, 214, 214, 0.2);
  }

  @media (max-width: 500px) {
    margin: 10px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 140px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 2px 4px;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.black + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;
// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;
// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        {/* <Date>{project.date}</Date> */}
        <Description>{project.description}</Description>
      </Details>
      {/* <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members> */}
    </Card>
  );
};

export default ProjectCard;
