import Image from 'next/image'
import { chakra } from "@chakra-ui/react";

const NextImage = chakra(Image, {
    baseStyle: { borderRadius: 'full' },
    shouldForwardProp: (prop) =>
        [
            "width",
            "height",
            "src",
            "alt",
            "quality",
            "placeholder",
            "blurDataURL",
            "loader ",
            'borderRadius',
        ].includes(prop),
});


export default function MyImage({ imgSrc, alt = 'myprofile pic', ...props }) {
    return <NextImage src={imgSrc} alt={alt} {...props} />
}

