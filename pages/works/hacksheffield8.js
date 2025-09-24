import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="HackSheffield8">
            <Container>
                <Title>
                    HackSheffield 8 <Badge>2025</Badge>
                </Title>
                <P>
                    The theme for this hackathon was &quot;Eco-environment&quot; with the sponsors being
                    SolarZero. We decided to create pro eco-friendly practice meme generater using openai
                    api.
                </P>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href='https://github.com/imoutia/EcoMemes'>
                            https://github.com/imoutia/EcoMemes <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>Python, Streamlit</span>
                    </ListItem>
                    <ListItem>
                        <Meta>API Used</Meta>
                        <Link href='https://openai.com/api/'>
                            https://openai.com/api/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Web Framework</Meta>
                        <Link href='https://streamlit.io/'>
                            https://streamlit.io/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/timson-homepage/images/works/hs8.png" alt="Prosperity"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work