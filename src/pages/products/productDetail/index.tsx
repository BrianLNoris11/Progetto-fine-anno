import { useNavigate, useParams } from "react-router-dom"; // @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import { products } from "../../../data/products.ts";
import { Product } from "../../../models";
import {Box, Button, Heading, Image, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
// @ts-ignore
import styles from "./index.module.css";
import { Icon } from "@iconify-icon/react";

export const ProductDetail: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>({
    description: "",
    id: "",
    img: "",
    price: 0,
    rating: 0,
    title: "",
  });

  useEffect(() => {
    const itemFound = products?.find((item: Product) => item.id === params.id);
    if (!itemFound) {
      navigate("/products");
      return;
    }
    setProduct(itemFound);
  }, []);

  return (
    <Box className={styles.page}>
      <Breadcrumb className={styles.breadCrumb}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Prodotti</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href={"#"} isCurrentPage>{product.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box className={styles.detailPage}>
        <Box className={styles.productImage}>
          <Image src={product.img} alt={product.title} />
        </Box>
        <Box className={styles.productDescription}>
          <Box className={styles.detailHeader}>
            <Heading size="xl">{product.title}</Heading>
            <Text fontSize="large">{product.description}</Text>
          </Box>
          <Box className={styles.detailCenter}>
            {Array(Math.round(product.rating))
              .fill("")
              .map((_, index) => (
                <Icon
                  key={index}
                  icon="ph:star-fill"
                  className={styles.filledStar}
                />
              ))}
            {Array(5 - Math.round(product.rating))
              .fill("")
              .map((_, index) => (
                <Icon key={index} icon="ph:star" />
              ))}
            <Box ml="2" color={"black"} fontSize="sm">
              {Math.round(product.rating)}
            </Box>
          </Box>
          <Box className={styles.detailFooter}>
            <Heading size="md">${product.price}</Heading>
            <Button className={styles.ShopBtn} colorScheme={"orange"} color="black">
              <Icon icon="ph:shopping-bag" />
              Aggiungi al carrello
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
