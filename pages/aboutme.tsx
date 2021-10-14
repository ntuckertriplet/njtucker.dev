import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import Container from "../components/Container";
import Head from "next/head";

export default function AboutMe() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>About Me - Nathan Tucker</title>
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
          <Heading mb={2}>About Me</Heading>
          <Text color={colorSecondary[colorMode]}>
            I am a now senior at Iowa State University. I am in Software
            Engineering, although this is my second switch, first from Computer
            Science to Computer Engineering and now to Software Engineering (no
            more switches, I need to graduate). I have had a large focus in
            security, working at a{" "}
            <Link
              href="https://www.ece.iastate.edu/research/centers-institutes-and-laboratories/internet-scale-event-and-attack-generation-environment/"
              style={{ color: "#3182CE" }}
              isExternal
            >
              Cyber Security Research Lab
            </Link>{" "}
            and being a Treasurer for the{" "}
            <Link
              href="https://iasg.iac.iastate.edu"
              style={{ color: "#3182CE" }}
              isExternal
            >
              Iowa State Information Assurance Student Group
            </Link>{" "}
            for 2 years. Although I have recently taken to Cloud development and
            AWS in my time at Pearson (see my{" "}
            <Link href="/resume" style={{ color: "#3182CE" }}>
              Resume
            </Link>{" "}
            for more details).
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            Outside of a professional environment though, I love to write code
            in my spare time, including lower level C libraries, Data Centers
            and Networking, and making React/Next projects (weirdly meta).
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            Enough of the programmer technical jargon though. I like to do audio
            engineering and production. As well as being an audiophile, of
            course. My current headphones are a nice set of Hifiman Sundaras
            powered by the lovely Schiit stack (yup, it's pronounced exactly
            like you think it is). My favorite microphone to record on currently
            is the classic SM7B, the staple of a podcaster. I am planning on
            making a blog post around my audio recording setup, including
            equipment, DAW, and processes.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
