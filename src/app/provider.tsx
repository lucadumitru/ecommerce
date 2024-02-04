"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

import StoreProvider from "@/store/StoreProvider";

interface ProviderProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  },
  uri: "http://localhost:1337/graphql/playground"
});

export const Provider: React.FC<ProviderProps> = ({ children }) => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <StoreProvider>{children}</StoreProvider>
    </ChakraProvider>
  </ApolloProvider>
);
