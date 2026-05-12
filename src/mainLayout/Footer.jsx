import { Box, Flex, Link, Separator } from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiHandshake } from 'react-icons/si'
const Footer = () => {
  return (
    <Box mt={8}>
      <Separator />
      <Flex justifyContent='center' spaceX={8} spaceY={4}>
        <Link
          as='a'
          target='_blank'
          href='https://github.com/Ibrahimkamagate472'
        >
          <FaGithubSquare size={30} />
        </Link>
        <Link
          as='a'
          target='_blank'
          href='https://linkedin.com/in/ibrahim-k-b36422264'
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          as='a'
          target='_blank'
          href='https://app.joinhandshake.com/profiles/het24e'
        >
          <SiHandshake size={30} />
        </Link>
      </Flex>
    </Box>
  )
}
export default Footer
