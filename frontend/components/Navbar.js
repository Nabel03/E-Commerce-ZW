import {Box, Flex, Text, Input, Container, Link  , Button} from "@chakra-ui/react"
// import Link from 'next/link'

export default function Header (){
    return (
        <Box  as='header' backgroundColor='gray.900' color='blue.200' px='8' py='4'>
           <Box py='2' backgroundColor='gray.800'> 
               <Text fontSize='xs'>+021-95-51-84  email@email.com  1734 Stonecoal Road</Text>
           </Box>
           <Flex justifyContent='space-between' alignItems='center' py='4'>
            <Text fontSize='md'>Ecommerce ZW</Text>
            <Flex>
                <Input maxW='xl' placeholder='Search' size='sm' />
                <Button size='sm'>Search</Button>
            </Flex>
            <p>icons</p>
           </Flex>
           <Flex py='4' alignItem='center' gap='4' justifyContent='center' as='nav'>
                <Link href='/'>Home</Link>
                <Link href='/'>Hot Deals</Link>
                <Link href='/'>Categories</Link>
                <Link href='/'>Accessories</Link>
                <Link href='/'>Laptop</Link>
           </Flex>
        </Box>
    )

} 
