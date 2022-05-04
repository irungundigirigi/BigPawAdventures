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
       <div className={styles.header}>Maasai Mara/ Lake Nakuru - 4 Days/3 nights - Semi Luxury Kenyan Safari -Affordable
        Kenya Safari
    </div>
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
    
    <div className={styles.contentHolder}> 
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Overview</span>
        <IoIosArrowDropdown onClick={ToggleOverview} className={styles.dropDown}/>
      </div>
      <p className={overview? styles.p :styles.pOff }>
        Adding to two memorable days at the game filled plains of the Maasai Mara Game Reserve, this safari also
        takes you to Lake Nakuru National Park which is one of the worlds greatest bird paradise. Other than thebird population of different species and especially flamingos that flock the lake, the park has its fair share
        of wildlife that include the endangered black rhino.
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
            arriving Mara Sarova Tented Camp in time for lunch. Afternoon game drive. Dinner and overnight at a
            semi luxury tented camp.
            Approx Travel time: 5½ hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 2. Maasai Mara</span>
          <p className={styles.p}>
          Full day in Maasai Mara, Kenyas most popular game sanctuary where you will have the best opportunity
            of spotting the Big Five - lion, leopard, buffalo, rhino and elephant.
            Game drives are flexible, with the option of going out with picnic lunch boxes to spend entire day in the
            the park, or you can choose to have early morning and late afternoon game drives.
            You will also have the option of visiting a local Maasai village (US$20 per person).
            All meals and overnight at a semi luxury tented camp..
          </p>
        </div>

        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 3. Maasai Mara/Lake Nakuru</span>
          <p className={styles.p}>
          Depart Maasai Mara after breakfast for Lake Nakuru National Park, arriving at the camp in time for
            lunch. Afternoon game drive. Besides the flamingos that the lake is famous for, there are approx 400
            other species of birds visiting the lake. Also, many species of game can be found in the park including the
            introduced Rothschilds giraffe, black and white rhino, waterbuck, reedbuck,tree climbing lions, buffalo,
            leopard, baboon and many species of plains game.
            Dinner and overnight at the lodge.
            Approx Travel time: 6 hrs
          </p>
        </div>

        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 4. Lake Nakuru/Nairobi</span>
          <p className={styles.p}>
          Another morning game drive in Nakuru if staying inside the national park, then depart for Nairobi
            arriving approx. 1300 hrs. Drop at your hotel or transfer to the airport for onward flight home. End of
            services.
            Approx Travel time: 2½ hrs
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
       
        <ul>
        <li>Rate of 1020 US$ per person based on a minimum of 2 pax</li>
        <li>Private is 460$ each based on budget tented camps</li>
        </ul>
        </p>
      </div>

      {/*Inclusive */}
      <p> <span className={styles.budget}>Prices include:</span>
          <ul className={styles.ul}>
            <li>&#10004; Guarantee price/guarantee Kenya masai mara safari experience</li>
            <li>&#10004; Transport whilst on safari in a comfortable safari tour van ideal for game viewing and photography</li>
            <li>&#10004; Full board accommodation whilst on safari and Inclusive of all meals</li>
            <li>&#10004; Accomodation</li>
            <li>&#10004; Game drives and all park entry fees</li>
            <li>&#10004; English speaking professional driver/guide</li>
            <li>&#10004; Bottled water on safari</li>
          </ul>
        </p>
        NOTE: The tour begins and ends in Nairobi.


    </div>

    </>
  )
}

