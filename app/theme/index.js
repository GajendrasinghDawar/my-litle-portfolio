// my main theme entrypoint

import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

import { Link } from './link'
import Button from './button'
const overrides = {
    styles,
    // colors,
    // borders,
    // fonts,
    // Other foundational style overrides go here

    components: {
        Button,
        // Card,
        // Heading,
        // Drawer,
        Link
        // Other components go here
    },
}

export default extendTheme(overrides)