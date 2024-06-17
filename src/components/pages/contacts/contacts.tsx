// src/components/Contact.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  FormErrorMessage, 
  VStack, 
  Heading 
} from '@chakra-ui/react';

// Definizione di un'interfaccia per i dati del modulo di contatto
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors: Partial<ContactForm> = {};

    if (!formData.name) {
      formErrors.name = 'Nome è richiesto';
    }

    if (!formData.email) {
      formErrors.email = 'Email è richiesta';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email non valida';
    }

    if (!formData.message) {
      formErrors.message = 'Messaggio è richiesto';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulazione di una chiamata API per l'invio del modulo
      console.log('Invio dati:', formData);
      alert('Messaggio inviato con successo!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={4} borderWidth={1} borderRadius="lg" bg="white">
      <Heading as="h1" mb={6} textAlign="center" color="teal.500">
        Contattaci
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Nome:</FormLabel>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message">Messaggio:</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <FormErrorMessage>{errors.message}</FormErrorMessage>}
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Invia
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Contact;
