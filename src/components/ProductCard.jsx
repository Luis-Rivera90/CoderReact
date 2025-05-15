import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router';


const Rating = ({ rating, numReviews }) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill key={i} color="teal.500" />
            );
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

const ProductCard = ({ id, title, image, price, isNew, rating, numReviews }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/item/${id}`)}
      cursor="pointer"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }}
      bg={useColorModeValue('white', 'gray.800')}
      maxW="250px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      m={2}
    >
      {isNew && (
        <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
      )}

      <Image src={image} alt={`Picture of ${title}`} roundedTop="lg" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" isTruncated>
            {title}
          </Box>
          <Tooltip label="Add to cart" bg="white" placement={'top'} color={'gray.800'}>
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={rating} numReviews={numReviews} />
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              £
            </Box>
            {price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
