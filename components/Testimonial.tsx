import { Avatar, Box, Stack, Text, useColorModeValue, Heading } from '@chakra-ui/react';

export default function Testimonial() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
        <Heading>Testimonials</Heading>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum quis praesentium voluptatibus quod blanditiis explicabo beatae. Impedit cumque quasi vitae 
            reprehenderit aliquam delectus, expedita laborum, totam vel tempora unde? Fugiat, sequi at accusantium ipsa nulla itaque!
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          mb={2}
        />

        <Text fontWeight={600}>Krintox</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Projects Head
        </Text>
      </Box>
    </Stack>
  );
}