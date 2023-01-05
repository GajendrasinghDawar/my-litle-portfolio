"use client"
import React from 'react'
import { Grid, GridItem, VStack, Img, Text, Heading, HStack, Button, Stack, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { CiTwitter } from "react-icons/ci";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Icon, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

const projects = [
    {
        name: 'contacts book',
        url: 'contacts-book',
        github: 'https://github.com/GajendrasinghDawar/Contacts-Book',
        bg: 'linear(to-r, gray.300, yellow.400, pink.200)'
    },
    {
        name: 'old portfolio',
        url: 'old-portfolio',
        github: 'https://github.com/GajendrasinghDawar/old-portfolio',
        bg: 'linear(to-l, #7928CA, #FF0080)'
    },
    {
        name: 'tiny apps django',
        url: 'tiny-apps-django',
        github: 'https://github.com/GajendrasinghDawar/tiny-apps-django',
        bg: 'linear(to-r, green.200, pink.500)'
    },
    {
        name: 'api.fakejson.tk',
        url: 'api-fakejson',
        github: 'https://github.com/GajendrasinghDawar/api.fakejson.tk',
        bg: 'linear(red.100 0%, orange.100 25%, yellow.100 50%)'

    },
    {
        name: 'e-learning website ',
        url: 'e-learning-website',
        github: 'https://github.com/GajendrasinghDawar/e-learning_website',
        bg: 'linear(to-r, teal.500, green.500)'
    },
    {
        name: 'this website ',
        url: 'this-website',
        github: 'https://github.com/GajendrasinghDawar/my-website',
        bg: 'linear(to-l, #7928CA, #FF0080)'
    },
]

export default function Me() {
    const { colorMode, toggleColorMode } = useColorMode()
    const value = useColorModeValue('rgb(255 255 255/1)', 'rgb(17 17 17/1)')
    const headingColorMode = useColorModeValue("rgb(0 0 0 /1)", 'rgb(255 255 255/1)')
    return (
        <Grid

            gridTemplateColumns='1fr min(65ch,100%) 1fr'
        // gridTemplateColumns='1fr min(60ch, calc(100% - 64px)) 1fr'
        // gap={6}
        >
            <GridItem
            // bgGradient='linear(to-r, teal.500, green.500)'
            />
            <GridItem
                h='100%'
                // bg='rgb(17 17 17/1)'
                className={inter.className}
                // borderRight='1px'
                // borderLeft={'1px'}
            >
                <VStack

                    mt={5}
                    justifyContent={'center'}
                    alignContent='center'
                    textAlign={'center'}
                    width={'full'}
                >
                    <Img
                        borderRadius='full'
                        boxSize='80px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                    <Heading
                        color={headingColorMode}
                        fontSize={{ base: "1.5rem", sm: "1.2rem", md: "2rem", lg: "2rem" }}
                    >
                        Gajendrasingh Dawar</Heading>
                    <Text
                    >
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
                    <Icon

                        as={CiTwitter}
                        _hover={{
                            transform: 'scale(1.2)',
                            transitionDuration: '.15s',
                            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
                        }}
                    />
                    <Icon

                        as={FiGithub}
                        _hover={{
                            transform: 'scale(1.2)',
                            transitionDuration: '.15s',
                            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
                        }}
                    />
                    <Icon

                        as={FaLinkedinIn}
                        _hover={{
                            transform: 'scale(1.2)',
                            transitionDuration: '.15s',
                            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)'
                        }} />
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
                                        href='#'
                                        isExternal
                                        variant={'custom'}
                                        w='90%'
                                    >
                                        <Box

                                            // _hover={{
                                            //     transition: 'transform 0.15s ease-out, fontWeight 0.15s ease-out'
                                            // }}

                                            bgGradient={project.bg}

                                            // bgGradient={[
                                            //     'linear(to-tr, teal.300, yellow.400)',
                                            //     'linear(to-t, blue.200, teal.500)',
                                            //     'linear(to-b, orange.100, purple.300)',
                                            // ]}

                                            p={1}
                                            borderRadius={'.70rem'}
                                            alignItems={'center'}
                                            justifyContent='center'

                                        >
                                            <HStack
                                                bg={value}
                                                h={'10vh'}
                                                border='8px solid white'
                                                borderColor={'transparent'}
                                                borderImageSlice={1}
                                                width={'100%'}
                                                borderRadius='.75rem'
                                                padding={'8px'}
                                                justifyContent={'space-between'}
                                            >
                                                <Text

                                                >{project.name}</Text>

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
                    p={5}
                    textAlign={'center'}
                    justifyContent='space-around'
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
            <GridItem
            // bgGradient='linear(to-r, teal.500, green.500)'

            />
        </Grid>
    )
}
