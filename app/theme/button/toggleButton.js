import { defineStyle, } from '@chakra-ui/react'

const toggleButton = defineStyle({
    background: 'blackAlpha.300',
    color: "blackAlpha.900",
    borderRadius: "0.5rem",
    borderWidth: '2px',
    borderColor: 'transparent',
    _dark: {
        background: 'whiteAlpha.200',
        color: 'whiteAlpha.900'
    },
    _hover: {
        borderColor: 'green.500',
        transitionDuration: '.15s',
        _dark: {
            borderColor: 'pink.500',
        },
    },


})
export default toggleButton