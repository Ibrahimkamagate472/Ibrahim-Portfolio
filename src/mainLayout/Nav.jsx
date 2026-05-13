import { Flex, Button, ButtonGroup, Box, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <Box backgroundColor='gray.200'>
      <Center>
        <Flex
          justify='flex-end'
          minw='100vh'
          minH='auto'
          shadow='xl'
          borderRadius='2xl'
        >
          <ButtonGroup marginRight={5} my={1} variant='surface' padding={2}>
            <Button
              variant='ghost'
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Button>
            <Button
              variant='ghost'
              onClick={() => {
                navigate('/about')
              }}
            >
              About
            </Button>
            <Button variant='ghost' onClick={() => navigate('/projects')}>
              Projects
            </Button>
            {/* <Button variant='ghost' onClick={() => navigate('/contact')}>
              Contact
            </Button> */}
            <Button
              variant='ghost'
              as='a'
              target='_blank'
              href='https://github.com/Ibrahimkamagate472'
            >
              Github
            </Button>
            <Button
              variant='ghost'
              as='a'
              target='_blank'
              href='https://linkedin.com/in/ibrahim-k-b36422264'
            >
              Linked In
            </Button>

            <Button
              variant='ghost'
              as='a'
              target='_blank'
              href='https://ibrahimkamagate472.github.io/IbrahimResume/Resume.html'
            >
              Resume
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
    </Box>
  )
}
