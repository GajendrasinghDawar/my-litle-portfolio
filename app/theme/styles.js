// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                bg: mode('whiteAlpha.900', 'blackAlpha.900')(props),
                color: mode('blackAlpha.800', 'whiteAlpha.500')(props),
                lineHeight: "1.5",
                letterSpacing: '1px'
            },
        }
    }
}

export default styles