import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"




const nameLogoVariant = defineStyle((props) => {

    return {
        transition: 'transform 0.15s ease-out, fontWeight 0.15s ease-out',
        textDecorationStyle: "none",
        _hover: {
            transform: "scale(1.05, 1.05)",
            textDecorationStyle: "none",
            _dark: {
                textDecorationStyle: "none",

            }
        },

    }
})
export const Link = defineStyleConfig({

    variants: {
        custom: nameLogoVariant,
    }
})