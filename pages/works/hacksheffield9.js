import { Container, Badge, Link, List, ListItem, Stack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="HackSheffield9">
            <Container>
                <Title>
                    HackSheffield 9 <Badge>2025</Badge>
                </Title>
                <P>
                    Crypto Crashouts is a crypto based trading card game built on top of cryptoapi.
                    Players can utilise their crypto balances and engage in a battle and put their
                    crypto at stake.
                </P>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href='https://github.com/TimOthry/crypto-crashouts'>
                            https://github.com/TimOthry/crypto-crashouts<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>Spring Web, Java, React, ThreeJS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>API Used</Meta>
                        <Link href='https://cryptoapis.io/'>
                            https://cryptoapis.io/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/timson-homepage/images/works/hs9.png" alt="Prosperity"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work