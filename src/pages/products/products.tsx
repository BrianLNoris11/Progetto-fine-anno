// @ts-ignore
import styles from "./products.module.css";
import {
  Box, Button,
  Card,
  CardBody, CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react"; // @ts-ignore
import React from "react";
import { Icon } from "@iconify-icon/react";
// @ts-ignore
import {products} from "../../data/products.ts";
import {useNavigate} from "react-router-dom";

export const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Box className={styles.header}>
        <Heading size="xl">Prodotti</Heading>
        <Text fontSize="md">Scegli tra la nostra vasta gamma di prodotti per la tua alimentazione</Text>
      </Box>
      <div className={styles.products}>
        <SimpleGrid columns={[1,3,5,6]} minChildWidth="250px" spacing="30px">
          {products?.map((product) => (
            <Card className={styles.productCard} key={product.id}>
              <CardHeader>
                <Heading size="md" className={styles.productTitle}>
                  {product.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src={product.img}
                  alt="immagine prodotto"
                  boxSize="85%"
                />

                <Box display="flex" mt="2" alignItems="center">
                  {Array(Math.round(product.rating))
                    .fill("")
                    .map((_, index) => (
                      <Icon key={index} icon="ph:star-fill" />
                    ))}
                  {Array(5 - Math.round(product.rating))
                    .fill("")
                    .map((_, index) => (
                      <Icon key={index} icon="ph:star" />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {Math.round(product.rating)}
                  </Box>
                </Box>
              </CardBody>
              <CardFooter>
                <Button colorScheme="orange" onClick={()=> {navigate(`/products/${product.id}`)}}>Visualizza</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};
