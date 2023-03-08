import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import { NodeNextRequest } from "next/dist/server/base-http/node"




const nameLogoVariant = defineStyle((props) => {

    return {
        transition: 'transform 0.15s ease-out, fontWeight 0.15s ease-out', textDecoration: "none",
        _hover: {
            transform: "scale(1.05, 1.05)",
            textDecoration: "none",
        }, 

    }
})
export const Link = defineStyleConfig({

    variants: {
        custom: nameLogoVariant,
    }
})