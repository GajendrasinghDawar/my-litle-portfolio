import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const toggleButton = defineStyle({
    background: ' rgb(234 234 234/1)',

    color: "rgb(0 0 0 /1)",
    borderRadius: "0.5rem",
    borderWidth: '2px',
    borderColor: 'transparent',
    //  fontSize: '22px',


    _dark: {
        background: 'rgb(68 68 68/1)',

        color: 'rgb(255 255 255/ 1)',
    },
    _hover: {
        // background: 'rgb(68 68 68/1)',
        borderColor: 'rgb(153 153 153/1)',
        transitionDuration: '.15s',
        _dark: {
            // bg: `themeButton.darkOnHoverBg`,
        },
    },


})
export default toggleButton