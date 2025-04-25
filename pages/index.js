import NextLink from 'next/link'
import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello I&apos;m a a full stack developer based in England!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Timson Lee
                        </Heading>
                        <p>Software Engineer | Student</p>
                    </Box>
                    <Box flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/timson-homepage/images/timson.png"
                            alt="Profile" />
                    </Box>
                </Box>
        
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Timson is currently a student at the University of Sheffield and an incoming intern at IBM.
                        He is focusing his efforts to becoming a full-stack developer. Currently working on
                        a project called{' '}
                        <Link as={NextLink} href="/works/alptrader" passHref scroll={false}>Alptrader</Link>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/works"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="purple"
                        >
                            My portfolio
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Born in Shropshire, England.
                    </BioSection>
                    <BioSection>
                    <BioYear>2023</BioYear>
                    Started studying a Bachelors in Computer Science at the University of Sheffield.
                    </BioSection>
                    <BioSection>
                    <BioYear>2025</BioYear>
                    IBM Placement Year, Hursley, England
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Interests
                    </Heading>
                    <Paragraph>
                        3D Modelling, Game Development, Finance, Guitar
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/TimOthry" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoGithub}></Icon>}>@TimOthry</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://linkedin.com/in/timsonlee" target="_blank">
                                <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoLinkedin}></Icon>}>@Timson Lee</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
            <div style={{ fontSize: '12px', opacity: 0.5 }}>
                This website is built based on the {' '}
                <Link as={NextLink} href='https://www.craftz.dog/' passHref scroll={false}>
                    Takuya Matsuyama&apos;s website
                </Link>
            </div>
        </Layout>
    )
}

export default Page