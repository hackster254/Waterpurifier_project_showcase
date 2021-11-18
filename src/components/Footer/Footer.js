import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { IconName, BiWorld } from "react-icons/bi";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      {/*
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn>
      */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="karira.charles@gmail.com">
            karira.charles@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
          <Slogan>Site Created by Karira 💻</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/hackster254">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/charles-karira-1019551b0/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://my_world-z3rmou.vertex360.co/">
            <BiWorld size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
