import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo';
import { NavLinks } from './navLinks';
import { Accessibility } from './accessibility'

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    padding: 0 1.5em;
`;

const LeftSection = styled.div`
    display: flex;

`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export default function NavBar(props) {
    return <NavBarContainer>
        <LeftSection>
            <Logo />
        </LeftSection>
        <MiddleSection>
            <NavLinks />
        </MiddleSection>
        <RightSection>
            <Accessibility />
        </RightSection>
    </NavBarContainer>
}