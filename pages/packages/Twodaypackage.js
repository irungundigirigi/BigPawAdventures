import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import styles from '../../styles/Overview.module.css'
import "react-alice-carousel/lib/alice-carousel.css";
import mara1 from '../../public/TwoDayMaraOverview/mara1.JPG'
import mara2 from '../../public/TwoDayMaraOverview/mara2.JPG'
import mara3 from '../../public/TwoDayMaraOverview/mara3.JPG'
import {FaMoneyCheckAlt,} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi'


export default function Twodaypackage() {
  return (
    <>
    <AliceCarousel 
                disableButtonsControls= {true}
                disableDotsControls = {true}
                autoPlay autoPlayInterval="4000">
                <Image src={mara1} />
                <Image src={mara2} />
                <Image src={mara3} />
    </AliceCarousel>
    <div className={styles.headerContainer}>
       <div className={styles.header}>Two day Masai Mara package</div>
       <div className={styles.featuresHolder}>
        <div className={styles.featureHolder}>
             <FaMoneyCheckAlt className={styles.icon}/>
              <span className={styles.featureText}>from $400</span>
        </div>
        <div className={styles.featureHolder}>
           <BiTimeFive  className={styles.icon}/>
            <span className={styles.featureText}>2 days</span>
        </div>
       </div>
       <div>
       </div>

    </div>
    <div className={styles.overviewHolder}> 
      <span className={styles.overviewHeading}>Overview</span>
      <p>
          This is an exciting 2 days safari into the famous Maasai Mara, the jewel of Kenyas wildlife and the
          greatest spot for wildebeest migration. The trip will start immediately upon your arrival at Jomo Kenyatta
          International Airport into the famous Maasai Mara Game Reserve through the Great Rift Valley. You are
          likely to see plenty of wildlife varying from Kenyas big five; the lion, elephant, rhino, buffalo, and the
          leopard among a host of other different animal species. You will travel in a shared safari tour van and stay
          in a tented camp.
      </p>
    </div>

    </>
  )
}

