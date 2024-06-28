import styles from "./products.module.css"
import {Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text} from "@chakra-ui/react";

interface Product {
  img: string,
  title: string,
  description: string,
  price: number,
  rating: number,
}

const products: Product[] = [
  {
    img: "https://bbetter.co/cdn/shop/products/Omega3.png?v=1680507526",
    title: "Omega-3 Fish Oil Supplement",
    description: "High potency Omega-3 fish oil with EPA and DHA for heart health.",
    price: 24.99,
    rating: 4.5,
  },
  {
    img: "https://example.com/img2.jpg",
    title: "Vitamin D3 Supplement",
    description: "Supports bone, teeth, and immune health.",
    price: 15.99,
    rating: 4.7,
  },
  {
    img: "https://example.com/img3.jpg",
    title: "Probiotic 50 Billion CFU",
    description: "Supports digestive and immune health with 50 billion CFU.",
    price: 28.99,
    rating: 4.4,
  },
  {
    img: "https://example.com/img4.jpg",
    title: "Turmeric Curcumin with Bioperine",
    description: "Anti-inflammatory and antioxidant supplement.",
    price: 19.99,
    rating: 4.6,
  },
  {
    img: "https://example.com/img5.jpg",
    title: "Multivitamin for Women",
    description: "Complete multivitamin with vitamins, minerals, and antioxidants.",
    price: 22.49,
    rating: 4.5,
  },
  {
    img: "https://example.com/img6.jpg",
    title: "Collagen Peptides Powder",
    description: "Supports skin, hair, nail, and joint health.",
    price: 25.99,
    rating: 4.8,
  },
  {
    img: "https://example.com/img7.jpg",
    title: "Vitamin C with Rose Hips",
    description: "Boosts immune health and skin health.",
    price: 14.99,
    rating: 4.6,
  },
  {
    img: "https://example.com/img8.jpg",
    title: "Magnesium Glycinate",
    description: "Supports muscle, nerve, and heart health.",
    price: 17.99,
    rating: 4.5,
  },
  {
    img: "https://example.com/img9.jpg",
    title: "Ashwagandha Root Powder",
    description: "Adaptogen for stress relief and energy boost.",
    price: 18.99,
    rating: 4.6,
  },
  {
    img: "https://example.com/img10.jpg",
    title: "Calcium Supplement",
    description: "Supports bone health and muscle function.",
    price: 12.99,
    rating: 4.4,
  },
  {
    img: "https://example.com/img11.jpg",
    title: "B-Complex Vitamin",
    description: "Supports energy metabolism and nervous system health.",
    price: 16.99,
    rating: 4.5,
  },
  {
    img: "https://example.com/img12.jpg",
    title: "Iron Supplement",
    description: "Supports red blood cell production and energy levels.",
    price: 13.99,
    rating: 4.3,
  },
  {
    img: "https://example.com/img13.jpg",
    title: "CoQ10 Supplement",
    description: "Supports heart health and cellular energy production.",
    price: 29.99,
    rating: 4.6,
  },
  {
    img: "https://example.com/img14.jpg",
    title: "Zinc Supplement",
    description: "Supports immune system and skin health.",
    price: 11.99,
    rating: 4.4,
  },
  {
    img: "https://example.com/img15.jpg",
    title: "Elderberry Gummies",
    description: "Supports immune health with antioxidants.",
    price: 19.99,
    rating: 4.7,
  },
  {
    img: "https://example.com/img16.jpg",
    title: "Apple Cider Vinegar Capsules",
    description: "Supports digestion and weight management.",
    price: 14.99,
    rating: 4.5,
  },
  {
    img: "https://example.com/img17.jpg",
    title: "Spirulina Powder",
    description: "Nutrient-rich superfood for overall health.",
    price: 23.99,
    rating: 4.4,
  },
  {
    img: "https://example.com/img18.jpg",
    title: "Melatonin Supplement",
    description: "Supports healthy sleep patterns.",
    price: 10.99,
    rating: 4.6,
  },
  {
    img: "https://example.com/img19.jpg",
    title: "Green Tea Extract",
    description: "Supports metabolism and weight management.",
    price: 18.49,
    rating: 4.5,
  },
  {
    img: "https://example.com/img20.jpg",
    title: "Vitamin B12 Supplement",
    description: "Supports energy production and nervous system health.",
    price: 17.99,
    rating: 4.7,
  },
];


export const Products: React.FC = () => {

  return <div className={styles.page}>
    <div className={styles.header}>
      <h2>Prodotti</h2>
      <span>Scegli tra la nostra vasta gamma di prodotti</span>
    </div>
    <div className={styles.products}>
      {
        products?.map((product) => (
                <Card className={styles.product}>
                  <CardHeader>
                    <Heading size='md' className={styles.productTitle}>{product.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Image src={product.img} alt='immagine prodotto' boxSize='200px'/>
                    <Text>{product.rating}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button colorScheme="orange">Visualizza</Button>
                  </CardFooter>
                </Card>))
      }

    </div>
  </div>
}