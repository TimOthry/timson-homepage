import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Alptrader">
            <Container>
                <Title>
                    Alptrader <Badge>2024</Badge>
                </Title>
                <P>
                    A algorithmic trading bot built using Alpaca Trading Api and python ran on AWS server.
                    The focus of this project was not to make money but experiment with existing trading
                    algorithms and see how effective thoeretical methods are in the real world.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href='https://github.com/TimOthry/AlpTrader'>
                            https://github.com/TimOthry/AlpTrader <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>Python, AWS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>API Used</Meta>
                        <Link href='https://alpaca.markets/'>
                            https://alpaca.markets/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/alptrader.png" alt="Alptrader"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work