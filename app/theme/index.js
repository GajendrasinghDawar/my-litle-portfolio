import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

import { Link } from './link'
import Button from './button'
const overrides = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles,
    components: {
        Button,
        Link
    },
}

export default extendTheme(overrides)