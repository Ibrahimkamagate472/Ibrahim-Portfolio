import {
  Box,
  Text,
  Heading,
  Link,
  Badge,
  Stack,
  Container,
} from '@chakra-ui/react'
const Projects = () => {
  return (
    <Box backgroundColor='gray.200' minH='100vh'>
      <Box pt={10} px={5}>
        <Link
          href='https://github.com/Ibrahimkamagate472/Phonebook-Management-System-'
          target='_blank'
        >
          <Heading pb={5} textDecoration='underline'>
            Job Tacker
          </Heading>
        </Link>
        <Stack direction='row'>
          <Badge>JavaScript</Badge>
          <Badge>React</Badge>
          <Badge>Express.js</Badge>
          <Badge>Node.js</Badge>
          <Badge>Prisma</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Chakra UI</Badge>
        </Stack>
        <Text textIndent='20px'>
          A full-stack job tracking platform designed to help users efficiently
          manage their job search process in one centralized dashboard.
        </Text>
        <Text>
          Users can create an account and securely log in to manage their
          personal job applications. Each job entry includes key details such as
          company name, position, application date, current status, job listing
          link, and optional credentials (username and password) for external
          job portals.
        </Text>
        <Text>
          The application allows users to: Add new job applications Edit and
          update existing applications Delete applications Track and update the
          status of each application (e.g., applied, interviewing, offer,
          rejected)
        </Text>
        <Text>
          This project demonstrates full CRUD functionality, user
          authentication, and state management, providing a practical tool for
          organizing and monitoring job search progress.
        </Text>
      </Box>
      <Box pt={10} px={5}>
        <Link
          href='https://github.com/Ibrahimkamagate472/Phonebook-Management-System-'
          target='_blank'
        >
          <Heading pb={5} textDecoration='underline'>
            Network
          </Heading>
        </Link>
        <br />
        <Badge>C++</Badge>
        <Text textIndent='20px'>
          Developed a social network simulation that models Facebook-style
          friendships using an unordered map as the core graph structure. Each
          user profile stores personal details (first name, last name, school,
          field) and maintains a dynamic friends list with support for adding,
          removing, listing, and recommending connections. Implemented duplicate
          handling to allow multiple users with the same name, along with
          network-level operations for lookup, profile management, and
          relationship management, demonstrating strong understanding of data
          structures, pointers, and object-oriented design.
        </Text>
      </Box>
      <Box pt={10} px={5}>
        <Link
          href='https://github.com/Ibrahimkamagate472/Password-Manager'
          target='_blank'
        >
          <Heading pb={5} textDecoration='underline'>
            Password Manager
          </Heading>
        </Link>
        <br />
        <Badge>C++</Badge>
        <Text textIndent='20px'>
          Built a password manager that securely stores and preserves account
          credentials through file read/write operations. Implemented full
          account management functionality, including adding, removing,
          updating, and retrieving account names, usernames, and passwords.
          Integrated a custom XOR-based encryption and decryption system to
          simulate secure data storage and demonstrate foundational data
          security concepts.
        </Text>
      </Box>
    </Box>
  )
}
export default Projects
