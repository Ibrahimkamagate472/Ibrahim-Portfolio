import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import Skills from './Skills'

const AboutLeft = () => {
  return (
    <Box mx={5} width='70' spaceY='4'>
      <Flex direction='column' spaceY={4}>
        <Heading marginTop={10} textStyle='3xl' textAlign='center'>
          About Me
        </Heading>
        <Text
          textIndent='25px'
          fontWeight='medium'
          maxW={{ base: '400px', md: '900px' }}
          letterSpacing='wide'
        >
          I’m currently a senior at Hunter College entering my final semester,
          pursuing a Bachelor of Arts degree in Computer Science with a minor in
          Mathematics. Computer Science was the first subject that actually
          clicked for me. Like many students starting high school, I wasn’t
          passionate about most subjects until I took my first computer science
          class in 9th grade. From that moment, I became captivated with problem
          solving and building systems from the ground up.
        </Text>
        <Text
          textIndent='25px'
          fontWeight='medium'
          maxW={{ base: '400px', md: '900px' }}
          letterSpacing='wide'
        >
          Since then, I’ve developed a strong interest in the world of Computer
          Science. Using my spare time to challenge my understanding of data
          structures, algorithms, backend systems and user-focused design. My
          experience includes developing applications with C++, React,
          PostgreSQL Prisma and modern web technologies.
        </Text>
        <Text
          textIndent='25px'
          fontWeight='medium'
          maxW={{ base: '400px', md: '900px' }}
          letterSpacing='wide'
        >
          I aspire to become a Software Engineer, Quantitative Developer, or
          Aerospace Software Engineer, combining strong analytical thinking with
          low-level programming expertise and mathematical problem-solving. I’m
          especially interested in high-performance systems, financial
          technology, simulations, and software that operates close to the
          hardware level.
        </Text>

        <Heading textAlign='center' textStyle='3xl'>
          Education
        </Heading>
        <Box spaceY={4}>
          <Box spaceY={1}>
            <Heading>Hunter College</Heading>
            <Text textIndent='20px'>
              Bachelor of Arts in Computer Science, Minor in Mathematics
            </Text>
          </Box>
          <Box spaceY={1}>
            <Heading>
              Eugenio María de Hostos Community College and City College
            </Heading>
            <Text textIndent='20px'>
              Associate of Applied Science in Game Design
            </Text>
          </Box>
        </Box>
        <Skills />
      </Flex>
    </Box>
  )
}
export default AboutLeft
