<template>
  <ChakraProvider>
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <Box textAlign="center" p={8} maxWidth="500px" borderRadius="lg" bg="white" boxShadow="lg">
        <Heading as="h1" size="2xl" mb={4} color="red.500">
          Erreur {{ error.statusCode }}
        </Heading>
        <Text fontSize="xl" mb={6} color="gray.600">
          {{ error.message || "Oups ! Quelque chose s'est mal passé." }}
        </Text>
        <Image src="/404-illustration.svg" alt="Erreur illustration" maxWidth="200px" mx="auto" mb={6} />
        <Button colorScheme="blue" size="lg" @click="handleError">
          Retour à l'accueil
        </Button>
      </Box>
    </Box>
  </ChakraProvider>
</template>

<script setup>
import { Box, Heading, Text, Button, Image, ChakraProvider } from '@chakra-ui/vue-next'

const props = defineProps({
  error: Object
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
