import styled from "styled-components";
import Image from 'next/image'
// import {AiOutlineMenu} from 'react-icons/ai'

function Header() {
    return (
        <HeaderContainer className='
        flex 
        bg-white
        mb-6 
        items-center 
        justify-between 
        p-4
        rounded-lg
        bg-gradient-to-l from-white to-green-400
        '>
            <HeaderGreeting className='flex items-center'>
                <Image 
                    src="https://thumbs.dreamstime.com/z/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144847501.jpg"
                    alt="logo"
                    width={65}
                    height={65}
                    className='rounded-full margin'
                />
                <HeaderGreetingText className='ml-4 text-xl'>
                    Hi, Corey
                </HeaderGreetingText>
            </HeaderGreeting>
            <HeaderNav className='flex'>
                <HeaderNavItem>
                    <HeaderNavLink href='/'>
                            Home
                    </HeaderNavLink>
                </HeaderNavItem>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``; 

const HeaderGreeting = styled.div``;

const HeaderGreetingText = styled.p``;

const HeaderNav = styled.nav``;

const HeaderNavItem = styled.li`
    text-decoration: none;
    list-style: none;

    &:active {
        list-style: none;
    }
`;

const HeaderNavLink = styled.a`
    text-decoration: none;
`;