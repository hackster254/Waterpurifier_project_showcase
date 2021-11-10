import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


import ReactPlayer from 'react-player'

const Playvideo=()=>{
  alert("button pressed so play video")
  return(
   
      <ReactPlayer controls url="https://www.youtube.com/watch?v=OPaLnMw2i_0&ab_channel=JavaScriptMastery" />
      
   
  )
}

const Hero = (props) => (

  <> 
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Water purifier <br />
          Providing clean water using solar
        </SectionTitle>
        <SectionText>
        This is a solar based water purification and purification unit. The project leverages on Solar energy, ultrafiltration and Ultra-Violet Purification to provide clean drinking water. This is our final year project submission.
        </SectionText>
        <Button onClick={Playvideo}>Find Out More</Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;