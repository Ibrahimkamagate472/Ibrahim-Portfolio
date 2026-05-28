import { Box, SimpleGrid, Heading, Text, GridItem } from '@chakra-ui/react'
import { AboutRight, AboutLeft } from '../components/index'

const About = () => {
  return (
    <Box backgroundColor='gray.200' paddingLeft={5}>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        gap={{ base: '24px', md: '40px' }}
      >
        <GridItem colSpan={{ base: 2, md: 3 }}>
          <AboutLeft />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Box
            display='flex'
            justifyContent={{ base: 'center', md: 'flex-start' }}
            marginRight={{ md: 5 }}
            pb={{ base: 5 }}
            marginTop={{ md: 10 }}
          >
            <AboutRight />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
export default About
