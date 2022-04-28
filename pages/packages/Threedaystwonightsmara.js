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




export default function ThreeDaysTwoNightsMara() {

  const[overview, setOverview] = useState(true)
  const[schedule, setSchedule] = useState(true)
  const[prices, setPrices] = useState(true)


  const ToggleOverview = () => {
    setOverview(!overview)
} 

  const ToggleSchedule = () => {
    setSchedule(!schedule)
  }

  const TogglePrices = () => {
    setPrices(!prices)
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
       <div className={styles.header}>3 days Two nights Maasai Mara safari</div>
       <div className={styles.featuresHolder}>
        <div className={styles.featureHolder}>
             <FaMoneyCheckAlt className={styles.icon}/>
              <span className={styles.featureText}>from US$600</span>
        </div>
        <div className={styles.featureHolder}>
           <BiTimeFive  className={styles.icon}/>
            <span className={styles.featureText}>3 days</span>
        </div>
       </div>
       <div>
       </div>

    </div>
    
    <div className={styles.contentHolder}> 
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Overview</span>
        <IoIosArrowDropdown onClick={ToggleOverview} className={styles.dropDown}/>
      </div>
      <p className={overview? styles.p :styles.pOff }>
        This is a short safari featuring Maasai Mara National Reserve. The safari departs Nairobi in the morning
        and involves a drive down to the the floor of the Rift Valley, making a stop at view point to see the
        escarpment and the awesome sight of the valley and the features there in. To arrive Maasai Mara in timefor lunch, followed by a late afternoon game drive that introduces you to Kenya's most popular game
        sanctuary.
      </p>

      
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Departures</span>
        <IoIosArrowDropdown onClick={ToggleSchedule} className={styles.dropDown}/>
      </div>
      <div className={schedule? styles.schedule: styles.scheduleOff}>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 1. Nairobi/Masai Mara</span>
          <p className={styles.p}>
          Depart Nairobi in the morning and drive to the floor of the Rift Valley - to Maasai Mara Game Reserve
          arriving in time for lunch. Afternoon game drive. Dinner and overnight at tented Camp
          Approx travel time: 5½ hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 2. Masai Mara</span>
          <p className={styles.p}>
          Spend the day in Maasai Mara, Kenya's most popular game sanctuary where you will have the best
          opportunity of spotting the Big Five - lion, leopard, buffalo, rhino and elephant.
          Game drives are flexible, with the option of going out with picnic lunch boxes to spend entire day in the
          the park, or you can choose to have early morning and late afternoon game drives. You will also have the
          option of visiting a Maasai cultural manyatta (US$20 per person).
          dinner and overnight at tented Camp :
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 3. Maasai Mara/Nairobi</span>
          <p className={styles.p}>
          Another early morning game drive in Mara, then depart after breakfast and drive back to Nairobi arriving
          approx. 13:00hrs. Drop at your hotel or transfer to the airport for onward flight home.
          Approx travel time: 5½ hrs
          </p>
        </div>

      </div>

    {/* Prices */}

    <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Prices</span>
        <IoIosArrowDropdown onClick={TogglePrices} className={styles.dropDown}/>
      </div>
      <div className={prices? styles.prices: styles.pricesOff}>
        <p>
        If using Custom Safari Tour Van
        <br/>
        High season US$630 per person sharing <br/>
        Low season US$600per person sharing <br/>

        {/*Seasons */}
        <p>Seasons
          <ul>
            <li>High Season: 16 Dec to 31 March 2017; 01 July – 15 Dec 2017</li>
            <li>Mid season: 01 – 30 June 2017 </li>
            <li>Low Season: 01 April – 31 May 2017</li>
          </ul>
        </p>
        {/*Inclusive */}
        <p> <span className={styles.budget}>Prices include:</span>
          <ul className={styles.ul}>
            <li>&#10004; Transportation in a safari tour van with pop-up roof ideal for game viewing and sightseeing.</li>
            <li>&#10004; Professional and experienced English speaking driver/guide</li>
            <li>&#10004; Fullboard accommodation in the lodge/tented camp as mentioned</li>
            <li>&#10004; Drinking Bottled water during safari</li>
            <li>&#10004; Game drives and all park entry fees</li>
          </ul>
        </p>

        <p> <span className={styles.budget}>Not included:</span>
          <ul className={styles.ul}>
            <li>&#x2717; International air transportation to and from Nairobi</li>
            <li>&#x2717; Expenses of personal nature such as visas, travel/baggage insurance, laundry, beverages, tips etc.</li>
          </ul>
        </p>

      
        </p>
      </div>

    </div>

    </>
  )
}


