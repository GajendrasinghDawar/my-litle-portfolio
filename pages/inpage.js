import React from 'react'
import { Image, Img } from '@chakra-ui/react'
import MyImage from '../app/MyImage'
import Bme from '../public/Bme.jpg'
export default function Inpage() {
    return (
        <>
            <Img
                // borderRadius='full'
                boxSize='100px'
                borderRadius='50%'
                src='https://bit.ly/dan-abramov'

                alt='Dan Abramov'
            />
            <MyImage imgSrc={Bme} borderRadius='50%' />
        </>
    )
}
