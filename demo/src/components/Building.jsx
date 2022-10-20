import React from 'react'
import { Grid, GridItem, Box, Text, Image } from '@chakra-ui/react'

export default function Building() {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} padding='10px'>
            <GridItem w='100%' h='180px' bg='blue.500' padding='2px' borderRadius='5px'>
                <Box alignItems='center' justifyContent='center'>
                    <Text textAlign='center'>Building 1</Text>
                    <Image src='https://via.placeholder.com/150x150' padding='10px'></Image>
                </Box>
            </GridItem>
            <GridItem w='100%' h='180px' bg='blue.500' />
            <GridItem w='100%' h='180px' bg='blue.500' />
            <GridItem w='100%' h='180px' bg='blue.500' />
        </Grid>
    )
}
