'use client';

import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';

export default function MyChakraProvider({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}
