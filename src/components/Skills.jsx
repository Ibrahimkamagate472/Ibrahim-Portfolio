import { Badge, Box, Heading } from '@chakra-ui/react'
const Skills = () => {
  return (
    <Box>
      <Heading textAlign='center'>Technical Skills</Heading>
      <Box>
        <Heading>Languages</Heading>
        <Badge mx={1}>C++</Badge>
        <Badge mx={1}>Pyton</Badge>
        <Badge mx={1}>JavaScript</Badge>
        <Badge mx={1}>SQL</Badge>
        <Badge mx={1}>HTML</Badge>
        <Badge mx={1}>CSS</Badge>
      </Box>
      <Box py={2}>
        <Heading>Frameworks/Libraries</Heading>
        <Badge mx={1}>React</Badge>
        <Badge mx={1}>Express</Badge>
      </Box>
      <Box py={2}>
        <Heading>Databases</Heading>
        <Badge mx={1}>PostgreSQL</Badge>
        <Badge mx={1}>Prisma</Badge>
      </Box>
      <Box py={2}>
        <Heading>Tools</Heading>
        <Badge mx={1}>Git</Badge>
        <Badge mx={1}>Github</Badge>
        <Badge mx={1}>VS Code</Badge>
      </Box>
    </Box>
  )
}
export default Skills
