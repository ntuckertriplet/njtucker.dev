import {
  Flex,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import Container from "../components/container";
import { GitHub } from "@material-ui/icons";
import Head from "next/head";
import { projects } from "../data/projects";

export default function Portfolio() {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "rgba(0,0,0,.9)",
    dark: "gray.400",
  };

  return (
    <Container>
      <Head>
        <title>Portfolio - Nathan Tucker</title>
      </Head>
      <Stack
        as="main"
        spacing={6}
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} as="h2">
            Project Showcase
          </Heading>
          <List w="100%">
            {projects.map((project) => (
              <>
                <ListItem py={2}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" fontWeight={100}>
                      <Flex alignItems="center" fontWeight={100}>
                        <Text
                          fontWeight={400}
                          fontSize="lg"
                          lineHeight="shorter"
                          w={["3em", "5em", "8em"]}
                        >
                          {project.name}
                        </Text>
                      </Flex>
                      <Text
                        display={["none", "none", "block"]}
                        pl="1em"
                        pr="2em"
                        color={secondaryTextColor[colorMode]}
                        w="full"
                      >
                        {project.description}
                      </Text>
                    </Flex>
                    <Flex>
                      {project.hasOwnProperty("source") ? (
                        <Link
                          _hover={{ textDecoration: "none" }}
                          href={project.source}
                          isExternal
                        >
                          <IconButton
                            aria-label="Github"
                            size="lg"
                            color="blue.500"
                            variant="ghost"
                          >
                            <GitHub fontSize="small" />
                          </IconButton>
                        </Link>
                      ) : null}
                    </Flex>
                  </Flex>
                </ListItem>
              </>
            ))}
          </List>
        </Flex>
      </Stack>
    </Container>
  );
}
