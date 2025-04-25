import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelModelLoader from '../voxel-model-loader'

const LazyVoxelModel = dynamic(() => import('../voxel-model'), {
    ssr: false,
    loading: () => <VoxelModelLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Timson Lee | Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelModel />
                {children}
            </Container>
        </Box>
    )
}

export default Main