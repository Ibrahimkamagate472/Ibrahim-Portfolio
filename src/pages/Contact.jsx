import { Box, Heading, Field, Input, Center, Button } from '@chakra-ui/react'
export default function Contact() {
  return (
    <Box backgroundColor='gray.200' minH='100vh'>
      <Center pt='40px'>
        <Box
          bg='gray.300'
          shadow='md'
          borderWidth='2px'
          borderColor='blackAlpha.200'
        >
          <form>
            <Heading p={2}>Contact Form</Heading>
            <Field.Root p={2}>
              <Field.Label>Email</Field.Label>
              <Input
                placeholder='Please enter your email'
                w='500px'
                borderColor='black'
              />
            </Field.Root>
            <Field.Root p={2}>
              <Field.Label>Subject</Field.Label>
              <Input
                placeholder='Please enter the subject'
                w='500px'
                borderColor='black'
              />
            </Field.Root>
            <Field.Root p={2}>
              <Field.Label>Description</Field.Label>
              <Input
                placeholder='Please enter your email'
                w='500px'
                h='100px'
                borderColor='black'
              />
            </Field.Root>
            <Button type='submit' m={2}>
              send
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}
