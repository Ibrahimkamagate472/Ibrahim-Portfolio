import { Button, Box, SimpleGrid, Heading, Stack } from '@chakra-ui/react'
import { MoveRight } from 'lucide-react'
import { Skills } from '../components/index'
const About = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box>
          <Skills />
        </Box>
        <Box>
          <Box>
            <Heading>Ibrahim Kamagate</Heading>
          </Box>
          <Button
            as='a'
            target='_blank'
            href='https://ibrahimkamagate472.github.io/IbrahimResume/Resume.html'
            variant='surface'
            w='300px'
          >
            Resume
            <MoveRight />
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
export default About
