import React, {useState} from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


import ReactPlayer from 'react-player'


const Playvideo=()=>{
  
  
  //alert("button pressed so play video")
  return(
   <div>
      <ReactPlayer controls url="https://youtu.be/efoUl2AfSIE" />
      
    </div>
  );
}

const Hero = (props) => {
const [hidden, setHidden] = useState(false);
  const onmyPress = () => setHidden(true);
return(
   
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Water purifier <br />
          Providing clean water using solar
        </SectionTitle>
        <SectionText>
        This is a solar based water purification and purification unit. The project leverages on Solar energy, ultrafiltration and Ultra-Violet Purification to provide clean drinking water. This is our final year project submission.
        </SectionText>
        <Button onClick={onmyPress}>Click to WATCH!</Button>
        {hidden  ? <Playvideo/> : null  }
        
      </LeftSection>
    </Section>
);
}

export default Hero;