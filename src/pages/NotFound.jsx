import { Flex, Button, Heading, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      h="100vh"
      bg="gray.50"
      px={4}
    >
      <Image
        src="https://i.imgur.com/qIufhof.png"
        alt="404"
        objectFit="contain"
        maxH="40vh"
        mb={6}
      />

      <Heading as="h1" fontSize="4xl" mb={4} textAlign="center" color="teal.500">
        404 - Página no encontrada
      </Heading>

      <Text fontSize="lg" textAlign="center" color="gray.600" mb={6}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </Text>

      <Button
        as={RouterLink}
        to="/"
        colorScheme="teal"
        size="lg"
        _hover={{ bg: 'teal.600' }}
      >
        Volver al inicio
      </Button>
    </Flex>
  );
};

export default NotFound;
