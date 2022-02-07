import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from  '../styles/carousel.module.css';
import Image2 from '../public/2.JPG';
import Image3 from '../public/3.JPG';
import Image4 from '../public/4.JPG';




export default function Carousel() {
  return (
  <div className={styles.Carousel}>
       <AliceCarousel 
                disableButtonsControls= {true}
                disableDotsControls = {true}
                autoPlay autoPlayInterval="4000">
               <div>
                 <Image src={Image2} />
                   <div className={styles.h1}>
                    This is an exciting 2 days safari into the famous Maasai Mara, 
                    the jewel of Kenyas wildlife and the greatest spot for wildebeest migration.
                    <button className={styles.btn}>Book</button>
                    </div>
                </div>

               <div><Image src={Image3} /><h1 className={styles.h1}></h1></div>
               <div><Image src={Image4} /><h1 className={styles.h1}></h1></div>
        </AliceCarousel>
  </div>)
}