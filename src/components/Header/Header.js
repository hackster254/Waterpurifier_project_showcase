import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { IoWaterOutline}from 'react-icons/io5'
const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <IoWaterOutline size="3rem" /> <span> WATER PURIFIER</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      {/*
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>  
         */}
      <li>
        <Link href="#team">
          <NavLink>Team</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/hackster254">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.efa.crowdsolve.net/workspace/workspace/team-2020-25-jomo-kenyatta-university-of-agriculture-and-technology-kenya-title-solar-powered-water-filtration-and-purification-system">
        <AiOutlineFundProjectionScreen size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
