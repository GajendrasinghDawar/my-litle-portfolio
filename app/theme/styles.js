// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                bg: mode('rgb(255 255 255/1)', 'rgb(17 17 17/1)')(props),
                color: ' rgb(136 136 136/1)',
                lineHeight: "1.5",
                letterSpacing: '1px'
            },
        }
    }
}

export default styles