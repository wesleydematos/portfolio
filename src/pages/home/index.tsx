import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub, FaShare } from "react-icons/fa";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { ProjectLink } from "@/components/Project/style";

import { useTranslation } from "react-i18next";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/wesleydematos/portfolio`;

  const { t } = useTranslation();

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">
                {t("hello")} {userData.nameUser}!
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              {t("i")} {t("enjoy")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {t("creating")}{" "}
              </Text>
              {t("and")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {t("developing")}
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              {t("sfDescription")}
            </Text>
            <Text type="body1" color="grey2">
              {t("discover")}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                {t("seeProj")}
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                {t("seePort")}
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                {t("myProj")}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {t("someProj")}
                <ProjectLink
                  target="_blank"
                  href={`https://github.com/wesleydematos?tab=repositories`}
                >
                  <FaShare /> {t("seeAll")}
                </ProjectLink>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
