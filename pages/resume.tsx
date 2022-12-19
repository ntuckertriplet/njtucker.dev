import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import Container from "../components/container";
import React from "react";

function Resume({ data }) {
  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        w="100%"
        textAlign="center"
      >
        <Stack isInline>
          <Link
            _hover={{ textDecoration: "none" }}
            href="https://gist.githubusercontent.com/ntuckertriplet/1dfb7279cf4512603552574f6f20fa27/raw/58c3e537d5ff71012dedbfd71515e58375cf30ea/resume.json"
            download
          >
            <Button>JSON</Button>
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            href="/static/Nate_Tucker.pdf"
          >
            <Button>PDF</Button>
          </Link>
        </Stack>
        <Flex w="100%" flexDirection="column" lineHeight="tall">
          <Heading size="2xl">{data.basics.name}</Heading>
          <Stack
            isInline
            shouldWrapChildren
            flexWrap="wrap"
            alignSelf="center"
            pt={4}
          >
            <Link href={`tel:${data.basics.phone}`}>{data.basics.phone}</Link>
            <Link href={`mailto:${data.basics.email}`}>
              {data.basics.email}
            </Link>
            <Link
              href={`https://maps.google.com/?q=${data.basics.location.city},${data.basics.location.region}`}
            >
              {data.basics.location.city}, {data.basics.location.region}
            </Link>
          </Stack>
          <Stack
            isInline
            shouldWrapChildren
            flexWrap="wrap"
            alignSelf="center"
            letterSpacing="tight"
          >
            <Link href={data.basics.website}>
              {data.basics.website
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, "")}
            </Link>
            {data.basics.profiles.map((data) => {
              return (
                <Link
                  href={data.url}
                >{`${data.network}: ${data.username}`}</Link>
              );
            })}
          </Stack>
          <Divider borderColor="black" />
          <Heading size="lg">Education</Heading>
          {data.education.map((data) => (
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              pt={4}
            >
              <Box textAlign="left">
                <Heading size="sm">{data.institution}</Heading>
                <Text>{`${data.studyType}, ${data.area}, ${data.gpa}`}</Text>
              </Box>
              <Text fontWeight="bold">
                Intended grad: {format(parseISO(data.endDate), "MMMM, yyyy")}
              </Text>
            </Flex>
          ))}
          <Divider borderColor="black" />
          <Heading size="lg">Work Experience</Heading>
          {data.work.map((data) => (
            <Flex flexDirection="column" textAlign="left">
              <Flex
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                pt={4}
              >
                <Text>
                  <strong>{data.company},</strong>{" "}
                  {`${data.position}, ${data.location}`}
                </Text>
                <Text fontWeight="bold">
                  {format(parseISO(data.startDate), "MMM")} -{" "}
                  {format(parseISO(data.endDate), "MMM, yyyy")}
                </Text>
              </Flex>
              <List styleType="disc" pr={5}>
                {data.highlights.map((data) => (
                  <ListItem>{data}</ListItem>
                ))}
              </List>
            </Flex>
          ))}
          <Divider borderColor="black" />
          <Heading size="lg">Projects</Heading>
          {data.projects.map((data) => (
            <Flex flexDirection="column" textAlign="left">
              <Flex
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                pt={4}
              >
                <Text>
                  <strong>{data.name},</strong> {data.type}
                </Text>
              </Flex>
              <List styleType="disc" pr={5}>
                {data.highlights.map((data) => (
                  <ListItem key={data}>{data}</ListItem>
                ))}
              </List>
            </Flex>
          ))}
          <Divider borderColor="black" />
          <Heading size="lg">Leadership/Activities</Heading>
          {data.leadership.map((data) => (
            <Flex flexDirection="column" textAlign="left">
              <Flex
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                pt={4}
              >
                <Text>
                  <strong>{data.organization},</strong> {data.position}
                </Text>
              </Flex>
              <List styleType="disc" pr={5}>
                {data.highlights.map((data) => (
                  <ListItem>{data}</ListItem>
                ))}
              </List>
            </Flex>
          ))}
          <Divider borderColor="black" />
          <Heading size="lg">Awards</Heading>
          {data.awards.map((data) => (
            <Flex flexDirection="column" textAlign="left">
              <Flex
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
                pt={4}
              >
                <Text>
                  <strong>{data.awarder},</strong>{" "}
                  {`${data.title}, ${data.project}`}
                </Text>
              </Flex>
              <List styleType="disc" pr={5}>
                {data.highlights.map((data) => (
                  <ListItem>{data}</ListItem>
                ))}
              </List>
            </Flex>
          ))}
          <Divider borderColor="black" />
          <Heading size="lg">Skills</Heading>
          {data.skills.map((data) => (
            <Stack isInline shouldWrapChildren flexWrap="wrap">
              <Heading size="md">{data.name}:</Heading>
              {data.keywords.map((data) => (
                <>
                  <Text>{data}, </Text>
                </>
              ))}
            </Stack>
          ))}
        </Flex>
      </Stack>
    </Container>
  );
}

Resume.getInitialProps = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/ntuckertriplet/1dfb7279cf4512603552574f6f20fa27/raw/58c3e537d5ff71012dedbfd71515e58375cf30ea/resume.json"
  );
  const json = await res.json();
  return { data: json };
};

export default Resume;
