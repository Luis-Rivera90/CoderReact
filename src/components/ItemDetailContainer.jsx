import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Badge,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const Rating = ({ rating, numReviews }) => {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return <BsStarFill key={i} color="teal.500" />;
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} color="teal.500" />;
                    }
                    return <BsStar key={i} color="gray.300" />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
};

const ItemDetailContainer = ({ product }) => {

    if (!product || Object.keys(product).length === 0) {
        return <Text>Cargando producto...</Text>;
    }

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    {product.images && (
                        <Image
                            rounded={'md'}
                            alt={`Image of ${product.title}`}
                            src={product.images[0]}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    )}
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                        >
                            {product.title}
                            {product.isNew && (
                                <Badge
                                    ml={4}
                                    px={2}
                                    colorScheme="red"
                                    fontSize="0.8em"
                                    rounded="full"
                                >
                                    New
                                </Badge>
                            )}
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}
                        >
                            ${product.price.toFixed(2)}
                        </Text>
                    </Box>

                    <Rating rating={product.rating} numReviews={product.numReviews} />

                    <VStack spacing={{ base: 4, sm: 6 }}>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize={'2xl'}
                            fontWeight={'300'}
                        >
                            {product.description}
                        </Text>
                    </VStack>

                    <Button
                        rounded={'md'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('teal.500', 'teal.300')}
                        color={useColorModeValue('white', 'gray.900')}
                        fontWeight="bold"
                        textTransform={'uppercase'}
                        _hover={{
                            bg: useColorModeValue('teal.600', 'teal.400'),
                            transform: 'translateY(-1px)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => console.log('Producto agregado al carrito')}
                    >
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

export default ItemDetailContainer;
