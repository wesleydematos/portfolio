import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { FaGithub, FaShare } from "react-icons/fa";

export const Project = (): JSX.Element => {
  const repos = [
    {
      id: 570222011,
      name: "Pro Support",
      language: "TypeScript - React",
      description:
        "Platform with the objective of managing doubts and impediments of a developer.",
      html_url: "https://github.com/wesleydematos/ProSupport",
      homepage: "https://pro-support.vercel.app/",
    },
    {
      id: 570222872,
      name: "NuKenzie",
      language: "TypeScript - React",
      description: "Application for financial management.",
      html_url: "https://github.com/wesleydematos/nukenzie",
      homepage:
        "https://react-entrega-s1-nu-kenzie-wesleydematos-3.vercel.app/",
    },
    {
      id: 624082641,
      name: "Bandkamp",
      language: "Python",
      description:
        "project that simulates the creation of users, songs and albums",
      html_url: "https://github.com/wesleydematos/bandkamp",
      homepage: null,
    },
    {
      id: 570224458,
      name: "Kenziehub",
      language: "TypeScript - React",
      description: "Application made to manage technologies and learning",
      html_url: "https://github.com/wesleydematos/kenziehub",
      homepage: "https://react-entrega-kenzie-hub-wesleymatos.vercel.app/",
    },
    {
      id: 616714403,
      name: "Backend challenge",
      language: "TypeScript - NodeJs",
      description:
        "API responsible for managing creation of contacts and customers.",
      html_url: "https://github.com/wesleydematos/desafiofullstack-1-backend",
      homepage: null,
    },
    {
      id: 556895644,
      name: "Soccer Market",
      language: "HTML - CSS",
      description: "Soccer e-commerce",
      html_url: "https://github.com/wesleydematos/soccer-market",
      homepage:
        "https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-wesleydematos/",
    },
  ];

  return (
    <>
      {repos &&
        repos?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink target="_blank" href={`${repository.homepage}`}>
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
