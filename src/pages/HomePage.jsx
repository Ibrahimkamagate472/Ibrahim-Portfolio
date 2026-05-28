import { Heading, Text, Box, Center, VStack } from '@chakra-ui/react'
const HomePage = () => {
  return (
    <Box backgroundColor='gray.200' minH='100vh'>
      <Center h='80vh'>
        <VStack gap={2}>
          <Text
            data-state='open'
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '900ms',
            }}
            textStyle={{ base: 'md', md: '2xl' }}
          >
            Hello, I'm
          </Text>
          <Heading
            data-state='open'
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '900ms',
            }}
            textStyle={{ base: '4xl', md: '7xl' }}
          >
            Ibrahim Kamagate
          </Heading>
          <Text
            data-state='open'
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '900ms',
            }}
            textStyle={{ base: 'md', md: '2xl' }}
          >
            aspiring Software Engineering
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}
export default HomePage
