import Link from 'next/link'
import FootprintIcon from './icons/footprint'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px
padding: 10px

 > svg {
    transition: 200ms ease;
}

&:hover > svg {
    transform: rotate(20deg);
}
`

const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <FootprintIcon />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}
                >
                    Timson Lee
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo