import { React } from 'react';
import styled from 'styled-components';
import { NumberedHeader, OuterSection } from '../reuseable';
import TextSection from './components/textComponent';

const InnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
   
    @media screen and (max-width:1100px) {
      flex-direction: column;
      justify-content: center;
      gap: 0px;
  } 
   
`
const marketingObjects = [
  {
    title: "Content Writing",
    text: "I wrote SEO optimizing content for TIXY where the goal was to attract more traction through our SEO strategy. This involved heavy research into the events, ticketing and blockchain industry.  ",
    image: "/images/marketing/writing.jpg",
    skills: [ "Research", "Keywords", "Design","SEO"]
  },
  {
    title: "Guerilla marketing",
    text: "With Tixy I helped develop a campaign where we through QR code posters managed to attract many users around the LoolaPalooza event in Stockholm. With posters scattered outside the entrances. ",
    image: "",
    image: "/images/marketing/palooza.png",
    skills: [ "Canva", "Photoshop", "Marketing"]
  },
  {
    title: "Sustainable Branding",
    text: "Leveraging student groups, we organized the Stoppa Miljösvinnet campaign, utilizing digital merchandise in place of physical goods.",
    image: "",
    image: "/images/marketing/sustainability.png",
    skills: [ "Canva", "Blockchain", "Sustainability"]
  },
  {
    title: "Digital Strategy",
    text: "Collaborated with a diverse range of organizations to create digital strategy plans. I offer guidance to craft, evaluate, and execute a dynamic digital strategy, that will transform your visitors into dedicated, long-term users. ",
    image: "",
    image: "/images/marketing/digital1.png",
    skills: [ "S.W.O.T.", "Wordpress", "Conversions"]
  }
]

export default function MarketingSection({ scrollRef, inViewRef }) {

  return (
    <OuterSection ref={scrollRef}>
      <NumberedHeader ref={inViewRef} number={3} >Marketing</NumberedHeader>
      {marketingObjects.map((item, index) => {
        return (
          <InnerContainer key={item.image}>
            <TextSection key={item.image} marketingObject={item} index={index}></TextSection>
          </InnerContainer>)
      })}

    </OuterSection>
  )
}

