import { useLocation } from "react-router-dom";
import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";
const SimilarProducts = () => {
  const location = useLocation();
  const similarProducts = location.state?.similarProducts || [];

  return (
    <div>
        <h1>Similar Products</h1>
      {similarProducts.length > 0 ? (
        <SimpleGrid columns={3} spacing={4}>
          {similarProducts.map((product) => (
            <Box key={product._id} border="1px" padding="4">
              <Image src={product.imageUrl} alt={product.name} boxSize="200px" />
              <Text>{product.name}</Text>
              <Text>${product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <p>No similar products found.</p>
      )}
    </div>
  );
};

export default SimilarProducts;
