import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbAlptrader from '../public/images/works/alptrader.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="alptrader"
                            title="Alptrader"
                            thumbnail={thumbAlptrader}
                        >
                            A algorithmic trading bot
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Events
                    </Heading>
                </Section>
            </Container>
        </Layout>
    )
}

export default Works