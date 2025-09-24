import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbAlptrader from '../public/images/works/alptrader.png'
import imcImage from '../public/images/works/imc-prosperity-3.jpg'
import hs8Image from '../public/images/works/hs8.png'
import hs9Image from '../public/images/works/hs9.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="alptrader"
                            title="Alptrader"
                            thumbnail={thumbAlptrader}
                        >
                            A algorithmic trading bot
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.1}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Competitions
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem 
                            id="hacksheffield8" 
                            thumbnail={hs8Image} 
                            title="HackSheffield8"
                        >
                            Hackathon by University of Sheffield CS Society
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem 
                            id="hacksheffield9" 
                            thumbnail={hs9Image} 
                            title="HackSheffield9"
                        >
                            Hackathon by University of Sheffield CS Society
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem 
                            id="prosperity3" 
                            thumbnail={imcImage} 
                            title="Prosperity3"
                        >
                            Algorithm trading competition by IMC
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works