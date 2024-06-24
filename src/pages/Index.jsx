import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Flex, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "Electronics",
    rating: 4.5,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    category: "Electronics",
    rating: 4.7,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: 199,
    category: "Wearables",
    rating: 4.2,
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (category ? product.category === category : true) &&
        product.rating >= rating
      )
    );
  }, [searchQuery, priceRange, category, rating]);
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Header />
        <Flex mb={4} justify="space-between" w="100%">
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Input
            placeholder="Min Price"
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <Input
            placeholder="Max Price"
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
          <Input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            placeholder="Min Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </Flex>
        <ProductList products={filteredProducts} />
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