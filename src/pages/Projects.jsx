import {
  Box,
  Text,
  Heading,
  Link,
  Badge,
  Stack,
  Container,
  List,
} from '@chakra-ui/react'
const Projects = () => {
  return (
    <Box backgroundColor='gray.200' minH='100vh'>
      <Container spaceY={4} p={10}>
        <Box spaceY={4}>
          <Link
            href='https://github.com/Ibrahimkamagate472/Job-Tracker'
            target='_blank'
          >
            <Heading size={{ md: '3xl' }}>Job Tacker</Heading>
          </Link>
          <Stack direction='row' pb={2} display='flex' flexWrap='wrap'>
            <Badge>JavaScript</Badge>
            <Badge>React</Badge>
            <Badge>Express.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>Prisma</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Chakra UI</Badge>
          </Stack>
          <List.Root fontWeight='medium' spaceY={2}>
            <List.Item>
              Developed a full-stack job application tracking system with secure
              user authentication and account management.
            </List.Item>
            <List.Item>
              Implemented CRUD functionality, allowing users to create, view,
              update, and delete job applications.
            </List.Item>
            <List.Item>
              Designed application records to store company name, position,
              application date, status, job posting link, and optional portal
              credentials.
            </List.Item>
            <List.Item>
              Built status tracking features to monitor application progress
              through stages such as Applied, Interviewing, Offer, and Rejected.
            </List.Item>
          </List.Root>
        </Box>
        <Box spaceY={4}>
          <Link
            href='https://github.com/Ibrahimkamagate472/Network'
            target='_blank'
          >
            <Heading size={{ md: '3xl' }}>Network</Heading>
          </Link>
          <br />
          <Badge>C++</Badge>
          <List.Root fontWeight='medium' spaceY={2}>
            <List.Item>
              Developed a Facebook-style social network simulation using an
              unordered map–based graph structure to manage user relationships.
            </List.Item>
            <List.Item>
              Designed user profiles containing personal information and dynamic
              friend lists with support for adding, removing, viewing, and
              recommending connections.
            </List.Item>
            <List.Item>
              Implemented duplicate-user handling, allowing multiple profiles
              with the same name while maintaining unique user records.
            </List.Item>
            <List.Item>
              Applied object-oriented programming principles, pointers, and
              advanced data structures to model and manage complex social
              network interactions efficiently.
            </List.Item>
          </List.Root>
        </Box>
        <Box spaceY={4}>
          <Link
            href='https://github.com/Ibrahimkamagate472/Phonebook-Management-System-'
            target='_blank'
          >
            <Heading size={{ md: '3xl' }}>Phonebook Management System</Heading>
          </Link>
          <br />
          <Badge>C++</Badge>
          <List.Root fontWeight='medium' spaceY={2}>
            <List.Item>
              Designed and implemented a modular phonebook management system
              featuring full CRUD operations, contact search functionality, and
              file persistence.
            </List.Item>
            <List.Item>
              Engineered a custom hash table with polynomial string hashing and
              double hashing collision resolution to optimize data storage and
              retrieval performance.
            </List.Item>
            <List.Item>
              Implemented dynamic rehashing strategies based on load factor
              thresholds, enabling efficient scaling as the dataset grows.
            </List.Item>
            <List.Item>
              Utilized lazy deletion techniques to maintain hash table integrity
              while preserving efficient search and insertion operations.
            </List.Item>
          </List.Root>
        </Box>
        <Box spaceY={4}>
          <Link
            href='https://github.com/Ibrahimkamagate472/Password-Manager'
            target='_blank'
          >
            <Heading size={{ md: '3xl' }}>Password Manager</Heading>
          </Link>
          <br />
          <Badge>C++</Badge>
          <List.Root fontWeight='medium' spaceY={2}>
            <List.Item>
              Designed and implemented a password manager with secure credential
              storage and file-based persistence.
            </List.Item>
            <List.Item>
              Developed account management features for adding, updating,
              removing, and retrieving account credentials.
            </List.Item>
            <List.Item>
              Integrated a custom XOR-based encryption and decryption system to
              protect stored data and demonstrate foundational cybersecurity
              concepts.
            </List.Item>
            <List.Item>
              Applied principles of data security, encryption, and information
              management to ensure reliable credential handling.
            </List.Item>
          </List.Root>
        </Box>
      </Container>
    </Box>
  )
}
export default Projects
