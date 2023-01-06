"use client"
import React from 'react'
import { Grid, GridItem, VStack, Text, Heading, HStack, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { Icon, Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

import { FiGithub, } from "react-icons/fi";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { TfiTwitter, TfiLinkedin } from "react-icons/tfi";

import MyImage from '../app/MyImage'
import Mypic from '../public/me.jpg'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

const projects = [
    {
        name: 'contacts-book(React+Django)',
        url: 'contacts-book',
        github: 'https://github.com/GajendrasinghDawar/Contacts-Book',
        bg: 'linear(to-r, teal.500, green.500)'
    },
    {
        name: 'old-portfolio(React)',
        url: 'old-portfolio',
        github: 'https://github.com/GajendrasinghDawar/old-portfolio',
        bg: 'linear(to-l, #7928CA, #FF0080)'
    },
    {
        name: 'tiny-apps(django)',
        url: 'tiny-apps-django',
        github: 'https://github.com/GajendrasinghDawar/tiny-apps-django',
        bg: 'linear(to-r, green.200, pink.500)'
    },
    {
        name: 'api.fakejson.tk (Django)',
        url: 'api-fakejson',
        github: 'https://github.com/GajendrasinghDawar/api.fakejson.tk',
        bg: 'linear(red.100 0%, orange.100 25%, yellow.100 50%)'

    },
    {
        name: 'e-learning-website(Django)',
        url: 'e-learning-website',
        github: 'https://github.com/GajendrasinghDawar/e-learning_website',
        bg: 'linear(to-r, teal.500, green.500)'
    },
    {
        name: 'Blog-website(NextJs)',
        url: 'this-website',
        github: 'https://github.com/GajendrasinghDawar/my-website',
        bg: 'linear(to-r, gray.300, yellow.400, pink.200)'
    },
]

export default function Me() {
    const { colorMode, toggleColorMode } = useColorMode()
    // const value = useColorModeValue('rgb(255 255 255/1)', 'rgb(17 17 17/1)')
    const value = useColorModeValue('whiteAlpha.900', 'black')
    const headingColorMode = useColorModeValue("blackAlpha.900", 'whiteAlpha.900')
    return (
        <Grid gridTemplateColumns='1fr min(65ch,100%) 1fr'>
            <GridItem />
            <GridItem
                h='100%'
                className={inter.className}
            >
                <VStack
                    mt={5}
                    justifyContent={'center'}
                    alignContent='center'
                    textAlign={'center'}
                    width={'full'}
                >
                    <MyImage
                        mr={1}
                        boxSize='100px'
                        alt='Gajendrsinghdwr'
                        imgSrc={Mypic}
                        borderRadius='full'
                    />
                    <Heading
                        color={headingColorMode}
                        fontSize={{ base: "1.5rem", sm: "1.2rem", md: "2rem", lg: "2rem" }}
                    >
                        Gajendrasingh Dawar
                    </Heading>
                    <Text>
                        Web Developer
                    </Text>
                </VStack>
                <HStack
                    mt={8}
                    width={'full'}
                    fontSize={'1.5rem'}
                    justifyContent='space-around'
                    alignItems={'center'}
                    color={headingColorMode}
                >
                    <Link href='https://twitter.com/gajendrsinghdwr' isExternal>
                        <Icon
                            as={TfiTwitter}
                            _hover={{
                                transform: 'scale(1.2)',
                                transitionDuration: '.15s',
                                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                                cursor: 'pointer',
                            }}
                        />
                    </Link>
                    <Link href='https://github.com/GajendrasinghDawar' isExternal>
                        <Icon
                            as={FiGithub}
                            _hover={{
                                transform: 'scale(1.2)',
                                transitionDuration: '.15s',
                                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                                cursor: 'pointer',
                            }}
                        />
                    </Link>
                    <Link href='https://www.linkedin.com/in/gajendrasingh-d-49597b23a/' isExternal>
                        <Icon
                            as={TfiLinkedin}
                            _hover={{
                                cursor: 'pointer',
                                transform: 'scale(1.2)',
                                transitionDuration: '.15s',
                                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
                            }} />
                    </Link>

                </HStack>
                <VStack
                    width={'full'}
                    mt={8}
                    textAlign='center'
                >
                    <Text>Projects</Text>
                    {projects.map((project) => {
                        return (
                            <>
                                <HStack
                                    width={'full'}
                                    textAlign='center'
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    <Link
                                        href={project.github}
                                        isExternal
                                        variant={'custom'}
                                        width={'full'}
                                    >
                                        <Box
                                            bgGradient={project.bg}
                                            p={1}
                                            borderRadius={'.70rem'}
                                            alignItems={'center'}
                                            justifyContent='center'
                                            width={'full'}
                                        >
                                            <HStack
                                                bg={value}
                                                h={'10%'}
                                                border='8px solid white'
                                                borderColor={'transparent'}
                                                borderImageSlice={1}
                                                borderRadius='.75rem'
                                                padding={'8px'}
                                                justifyContent={'space-between'}
                                                p={1}
                                            >
                                                <Text >{project.name}
                                                </Text>
                                                <ExternalLinkIcon mx='2px' />
                                            </HStack>
                                        </Box>
                                    </Link>
                                </HStack>
                            </>
                        )
                    })}
                </VStack>
                <HStack
                    mt={8}
                    borderTop={'1px'}
                    h={'80px'}
                    p={3}
                    textAlign={'center'}
                    justifyContent='space-between'
                    alignItems={'center'}
                >
                    <Text>No rights reserved@2023</Text>
                    <IconButton
                        variant={'toggleButton'}
                        aria-label='toggle color'
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode} />
                </HStack>
            </GridItem>
            <GridItem />
        </Grid>
    )
}
