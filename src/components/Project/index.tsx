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

import { useTranslation } from "react-i18next";

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
      id: 570224458,
      name: "Kenziehub",
      language: "TypeScript - React",
      description: "Application made to manage technologies and learning",
      html_url: "https://github.com/wesleydematos/kenziehub",
      homepage: "https://react-entrega-kenzie-hub-wesleymatos.vercel.app/",
    },
    {
      id: 570224459,
      name: "Soulful",
      language: "React",
      description:
        "The Digital Passport with collectible memories. A unique project that combines our love for travel, technology, and blockchain to provide a meaningful experience for avid adventurers and wanderers alike.",
      html_url: "https://github.com/wesleydematos/digital-memory-passport",
      homepage: "https://soulfullab.xyz/",
    },
  ];

  const { t } = useTranslation();

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
                {t("primary")}
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
                    {t("primaryNot")}
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub />
                {t("githubCode")}
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink target="_blank" href={`${repository.homepage}`}>
                  <FaShare />
                  {t("seeDemo")}
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
