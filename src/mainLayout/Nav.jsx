import { Flex, Button, ButtonGroup, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <Box>
      <Flex justify='flex-end' minw='100vh' shadow='xl'>
        <ButtonGroup marginRight={5} my={1} variant='surface' padding={2}>
          <Button
            onClick={() => {
              navigate('/')
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => {
              navigate('/about')
            }}
          >
            About
          </Button>
          <Button onClick={() => navigate('/projects')}>Projects</Button>
          <Button onClick={() => navigate('/contact')}>Contact</Button>
          <Button
            as='a'
            target='_blank'
            href='https://github.com/Ibrahimkamagate472'
          >
            Github
          </Button>
          <Button
            as='a'
            target='_blank'
            href='https://linkedin.com/in/ibrahim-k-b36422264'
          >
            Linked In
          </Button>

          <Button
            as='a'
            target='_blank'
            href='https://ibrahimkamagate472.github.io/IbrahimResume/Resume.html'
          >
            Resume
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
