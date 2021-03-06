import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, smallImage } from './TechnologiesStyles';

import { ListGroup, ListGroupItem} from 'react-bootstrap';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The project intergrates the following technologies to purify the water.
    </SectionText>
    <List>
      <ListItem>
       
        <picture>
          <img src="/images/solarnew.jfif" />
          {/*<DiReact size="3rem" /> */}
        </picture>
        <ListContainer>
          <ListTitle>Solar</ListTitle>
          <ListParagraph>
            Solar to power <br />
            the filtration unit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <img src="/images/filter.jpeg"  width="225" height="225"/>
          {/*<DiFirebase size="3rem" /> */}
        </picture>
        <ListContainer>
          <ListTitle>Filtration</ListTitle>
          <ListParagraph>
            Use of both sediment filters <br />
            and ultrafiltration.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          {/*<DiZend size="3rem" /> */}
          <img src="/images/uvled.jpeg" width="225" height="225" />
        </picture>
        <ListContainer>
          <ListTitle>UV Purification</ListTitle>
          <ListParagraph>
            UV LEDs of wavelength<br />
            265nm to kill harmful microorganisms in water.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
     <SectionText>
      Additional features
    </SectionText>
   
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Reminder to change and replace the filters through SMS integration</ListGroup.Item>
      <ListGroup.Item as="li">Visualize flow statistics and volumes through Thingspeak API dashboard</ListGroup.Item>
      <ListGroup.Item as="li">Cellular connection and thus WiFi is not needed as data can be send to cloud via GPRS</ListGroup.Item>
    </ListGroup>
    <br />
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
