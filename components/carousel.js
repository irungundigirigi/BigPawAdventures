import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from  '../styles/carousel.module.css';
import Image2 from '../public/zebras.jpeg';
import Image3 from '../public/lion_pack.jpeg';
import Image4 from '../public/4.JPG';
import Image1 from '../public/lion.jpeg';





export default function Carousel() {
  return (
  <div className={styles.Carousel}>
       <AliceCarousel 
                disableButtonsControls= {true}
                disableDotsControls = {true}
                autoPlay autoPlayInterval="4000">
                <Image src={Image1} />
                 <Image src={Image2} />
                 <Image src={Image3} />
               
        </AliceCarousel>
  </div>)
}