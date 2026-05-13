import { Box, Flex, Link, Separator, Container } from '@chakra-ui/react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiHandshake } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <Box backgroundColor='gray.200'>
      <Separator borderColor='black' borderWidth='1px' />
      <Flex
        justifyContent='center'
        spaceX={8}
        pt={5}
        pb={2}
        colorPalette='black'
      >
        <Link
          href='mailto:ibrahimk3114@gmail.com'
          _hover={{ color: 'gray.400' }}
        >
          <MdEmail size={32} />
        </Link>
        <Link
          as='a'
          target='_blank'
          href='https://github.com/Ibrahimkamagate472'
          _hover={{ color: 'gray.400' }}
        >
          <FaGithubSquare size={30} />
        </Link>
        <Link
          as='a'
          target='_blank'
          href='https://linkedin.com/in/ibrahim-k-b36422264'
          _hover={{ color: 'gray.400' }}
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          as='a'
          target='_blank'
          href='https://app.joinhandshake.com/profiles/het24e'
          _hover={{ color: 'gray.400' }}
        >
          <SiHandshake size={27} />
        </Link>
      </Flex>
    </Box>
  )
}
export default Footer
