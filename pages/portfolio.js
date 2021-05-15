import Head from 'next/head'
import { useColorMode, Heading, Flex, Stack } from '@chakra-ui/react'
import { Grid, makeStyles } from '@material-ui/core'

import Container from '../components/Container'
import Card from '../components/Card'

export default function Portfolio() {

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  
  return (
    <Container>
      <Head>
        <title>Portfolio - Nathan Tucker</title>
      </Head>
      <Stack
        as="main"
        spacing={6}
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
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
            Project Showcase
          </Heading>
          <Grid container spacing={4}>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
            <Grid item xs={11} sm={8} md={4}>
              <Card />
            </Grid>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}