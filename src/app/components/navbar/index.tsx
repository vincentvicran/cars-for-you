import React from 'react';
import { Logo } from '../logo';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavItems } from './navItems';

const NavbarContainer = styled.div`
    min-height: 68pxd;
    ${tw`
        w-full
        min-w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div``;

export function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
    );
}
