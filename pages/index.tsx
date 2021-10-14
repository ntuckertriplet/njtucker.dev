import { Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";

import Container from "../components/Container";
import Head from "next/head";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Nathan Tucker</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
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
          <Heading mb={2}>Hi, I'm Nate Tucker!</Heading>
          <Text color={colorSecondary[colorMode]}>
            Thanks for deciding to check out my site! While you're here, I
            invite you to check out my project showcase or take a look at my
            resume. In JSON format or PDF version, take your pick! You can also
            see my Blog and hear all about my ventures in homelabs, networking,
            servers, and spending too much money on things I will never regret.
            I also talk about my ventures home theater and audio as well as
            audio production and mixing, if that interests you. So take a look
            around!
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
