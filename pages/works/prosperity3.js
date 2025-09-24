import { Container, Badge, Link, List, ListItem, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Prosperity3">
            <Container>
                <Title>
                    IMC Prosperity 3 Competition <Badge>2025</Badge>
                </Title>
                <Stack spacing={4}>
                    <P>
                        During April 7th-22nd 2025 I participated in IMC Prosperity 3,  a global trading 
                        competition designed for students to test their algorithmic trading ability. The 
                        competition consists of two parts: algorithmic trading and manual trading. There 
                        are 5 rounds total in the competition each lasting 3 days, each rounds introduces a 
                        new product to trade in the algorithmic portion. For the manual portion a new math/game 
                        theory question is given.
                    </P>
                    <P>
                        I did this challenge along with 2 fellow students, Matius Chong and Nawar Abou Trabi as team 
                        ‘Diamond’ managing to place 588th place in the world and top 50 in the UK.
                    </P>
                </Stack>
                
                <WorkImage src="/timson-homepage/images/works/imc-prosperity-3.jpg" alt="Prosperity"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work