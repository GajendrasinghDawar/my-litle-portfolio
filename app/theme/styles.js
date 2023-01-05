// all my global style overrides
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => {
        return {
            body: {
                bg: mode('rgb(255 255 255/1)', 'rgb(17 17 17/1)')(props),
                // color: ' rgb(136 136 136/1)',
                // color: 'rgb(17 17 17/1)',
                color: mode('rgb(17 17 17/1)', 'rgb(136 136 136 / 1)')(props),
                lineHeight: "1.5",
                letterSpacing: '1px'
            },
        }
    }
}

export default styles