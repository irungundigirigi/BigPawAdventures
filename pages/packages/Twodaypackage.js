import React, {useState} from 'react'
import AliceCarousel from 'react-alice-carousel';
import Image from 'next/image';
import styles from '../../styles/Overview.module.css'
import "react-alice-carousel/lib/alice-carousel.css";
import mara1 from '../../public/TwoDayMaraOverview/mara1.JPG'
import mara2 from '../../public/TwoDayMaraOverview/mara2.JPG'
import mara3 from '../../public/TwoDayMaraOverview/mara3.JPG'
import {FaMoneyCheckAlt,} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi'
import {IoIosArrowDropdown} from 'react-icons/io'




export default function Twodaypackage() {

  const[overview, setOverview] = useState(true)
  const[schedule, setSchedule] = useState(true)

  const ToggleOverview = () => {
    setOverview(!overview)
} 

const ToggleSchedule = () => {
  setSchedule(!schedule)
}



  return (

    < >
    <AliceCarousel 
                disableButtonsControls= {true}
                disableDotsControls = {true}
                autoPlay autoPlayInterval="4000">
                <Image src={mara1} />
                <Image src={mara2} />
                <Image src={mara3} />
    </AliceCarousel>
    <div className={styles.headerContainer}>
       <div className={styles.header}>Two day Masai Mara</div>
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
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Overview</span>
        <IoIosArrowDropdown onClick={ToggleOverview} className={styles.dropDown}/>
      </div>
      <p className={overview? styles.p :styles.pOff }>
          This is an exciting 2 days safari into the famous Maasai Mara, the jewel of Kenyas wildlife and the
          greatest spot for wildebeest migration. The trip will start immediately upon your arrival at Jomo Kenyatta
          International Airport into the famous Maasai Mara Game Reserve through the Great Rift Valley. You are
          likely to see plenty of wildlife varying from Kenyas big five; the lion, elephant, rhino, buffalo, and the
          leopard among a host of other different animal species. You will travel in a shared safari tour van and stay
          in a tented camp.
      </p>
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Schedule</span>
        <IoIosArrowDropdown onClick={ToggleSchedule} className={styles.dropDown}/>
      </div>
      <div className={schedule? styles.schedule: styles.scheduleOff}>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 1. Nairobi/Maasai Mara</span>
          <p className={styles.p}>
            Depart Nairobi in the morning and drive to the floor of the Rift Valley - to Maasai Mara Game Reserve
            arriving in time for lunch. Afternoon game drive. Dinner and overnight at Tented camp.
            Approx transit time: 5½ hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 2. Maasai Mara/Nairobi</span>
          <p className={styles.p}>
          Another early morning game drive in Mara, then depart after breakfast and drive back to Nairobi arriving
          approx. 13:00hrs. Drop at your hotel or transfer to the airport for onward flight home.
          Approx transit time: 5½ hrs
          </p>
        </div>

      </div>
    </div>

    </>
  )
}

