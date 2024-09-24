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
  const { t } = useTranslation();

  const repos = [
    {
      id: 575224459,
      name: "Elite Suplementos",
      language: "Next.js",
      description: t("elite"),
      html_url: "https://github.com/wesleydematos/elite-do-suplemento",
      homepage: "https://elite-suplementos.vercel.app/",
    },
    {
      id: 570264459,
      name: "Carland",
      language: "Next.js",
      description: t("carland"),
      html_url: "https://github.com/wesleydematos/carland",
      homepage: "https://carland-gamma.vercel.app/",
    },
    {
      id: 570224459,
      name: "Soulful",
      language: "React",
      description: t("soulful"),
      html_url: "https://github.com/wesleydematos/digital-memory-passport",
      homepage: "https://soulfullab.xyz/",
    },
    {
      id: 570264459,
      name: "News APP",
      language: "React Native",
      description: t("newsApp"),
      html_url: "https://github.com/wesleydematos/news-app",
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
