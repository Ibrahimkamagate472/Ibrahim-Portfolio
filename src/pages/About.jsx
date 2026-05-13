import { Box, SimpleGrid, Heading, Text, GridItem } from '@chakra-ui/react'
import { Skills, AboutRight } from '../components/index'
const About = () => {
  return (
    <Box backgroundColor='gray.200'>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        gap={{ base: '24px', md: '40px' }}
      >
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <Box mx={5} width='70' spaceY='4'>
            <Heading
              textAlign='center'
              marginTop={10}
              marginBottom={2}
              textStyle='3xl'
            >
              About Me
            </Heading>
            <Text textIndent='20px' fontWeight='medium'>
              I’m currently a senior at Hunter College entering my final
              semester, pursuing a Bachelor of Arts degree in Computer Science
              with a minor in Mathematics. Computer Science was the first
              subject that actually clicked for me. Like many students starting
              high school, I wasn’t passionate about most subjects until I took
              my first computer science class in 9th grade. From that moment, I
              became captivated with problem solving and building systems from
              the ground up.
            </Text>
            <Text textIndent='20px' fontWeight='medium'>
              Since then, I’ve developed a strong interest in the world of
              Computer Science. Using my spare time to challenge my
              understanding of data structures, algorithms, backend systems and
              user-focused design. My experience includes developing
              applications with C++, React, PostgreSQL Prisma and modern web
              technologies.
            </Text>
            <Text textIndent='20px' fontWeight='medium'>
              I aspire to become a Software Engineer, Quantitative Developer, or
              Aerospace Software Engineer, combining strong analytical thinking
              with low-level programming expertise and mathematical
              problem-solving. I’m especially interested in high-performance
              systems, financial technology, simulations, and software that
              operates close to the hardware level.
            </Text>
            <Heading textAlign='center' textStyle='3xl'>
              Education
            </Heading>
            <Box>
              <Heading>Hunter College</Heading>
              <Text textIndent='20px' py={1}>
                Bachelor of Arts in Computer Science, Minor in Mathematics
              </Text>
              <Heading>
                Eugenio María de Hostos Community College and City College
              </Heading>
              <Text textIndent='20px' py={1}>
                Associate of Applied Science in Game Design
              </Text>
            </Box>
            <Skills />
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box>
            <AboutRight />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
export default About
