import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Header />
        <ProductList products={products} />
        <Footer />
      </VStack>
    </Container>
  );
};

const Header = () => (
  <Box as="header" w="100%" p={4} bg="blue.500" color="white">
    <Heading as="h1" size="lg" textAlign="center">Electronics Store</Heading>
  </Box>
);

const ProductList = ({ products }) => (
  <SimpleGrid columns={[1, 2, 3]} spacing={10} w="100%">
    {products.map(product => (
      <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.image} alt={product.name} />
        <Box p={6}>
          <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
          <Text mb={4}>{product.description}</Text>
          <Text fontWeight="bold" mb={4}>{product.price}</Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="blue">Add to Cart</Button>
        </Box>
      </Box>
    ))}
  </SimpleGrid>
);

const Footer = () => (
  <Box as="footer" w="100%" p={4} bg="gray.700" color="white" textAlign="center">
    <Text>&copy; {new Date().getFullYear()} Electronics Store. All rights reserved.</Text>
  </Box>
);

export default Index;