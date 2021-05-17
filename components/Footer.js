import { Link, Flex, IconButton } from "@chakra-ui/react";
import { GitHub, LinkedIn, Email } from '@material-ui/icons'

const Footer = () => (
    <Flex justify="center">
      <Link href="https://github.com/ntuckertriplet" title="GitHub" isExternal>
        <IconButton
          aria-label="Github"
          size="lg"
          color="gray.500"
          variant="ghost"
        >
            <GitHub fontSize="small"/>
        </IconButton>
      </Link>
      <Link
        href="https://www.linkedin.com/in/nathan-tucker-a74286161/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          size="lg"
          color="gray.500"
          variant="ghost"
        >
            <LinkedIn fontSize="small"/>
        </IconButton>
      </Link>
      <Link href="mailto:ntuckertriplet@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          size="lg"
          color="gray.500"
          variant="ghost"
        >
            <Email fontSize="small"/>
        </IconButton>
      </Link>
    </Flex>
  );
  
  export default Footer;