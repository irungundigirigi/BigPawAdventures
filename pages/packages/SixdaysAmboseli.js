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
       <div className={styles.header}>6 Days Amboseli/Lake Nakuru/Maasai Mara - Accomodation at
        Amboseli Tented camp,Lake Nakuru Lion hill tented camp and
        Mwangaza mara or Enchoro tented camps</div>
       <div className={styles.featuresHolder}>
        <div className={styles.featureHolder}>
             <FaMoneyCheckAlt className={styles.icon}/>
              <span className={styles.featureText}>from US$1400</span>
        </div>
        <div className={styles.featureHolder}>
           <BiTimeFive  className={styles.icon}/>
            <span className={styles.featureText}>6 days</span>
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
        takes you to Lake Nakuru National Park which is one of the world's greatest bird paradise. Other than the
        bird population of different species and especially flamingos that flock the lake, the park has its fair share
        of wildlife that include the endangered black rhino.
      </p>

      
      <div className={styles.ToggleView}>
        <span className={styles.overviewHeading}>Departures</span>
        <IoIosArrowDropdown onClick={ToggleSchedule} className={styles.dropDown}/>
      </div>
      <div className={schedule? styles.schedule: styles.scheduleOff}>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 1. Nairobi/Amboseli</span>
          <p className={styles.p}>
            Depart Nairobi in the morning and drive to Amboseli National Park arriving at the Lodge well in time for
            lunch. Afternoon game drive in the park, a park famous for its big game and great scenic beauty whose
            entire landscape is dominated by Mt Kilimanjaro. Dinner and overnight at the Amboseli sentrim camp or
            Kibo safari camp..
            Approx travel time: 5 hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 2. Amboseli</span>
          <p className={styles.p}>
             Early morning game drive at 6.30am, since the animals are active before sunrise, also its when you have
            the best chance to see the majestic Mt. Kilimanjaro. Return to the lodge for late breakfast. The rest of the
            morning is at leisure. Afternoon game drive. All meals and overnight at Amboseli sentrim camp or Kibo
            safari camp.
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 3. Amboseli/Nairobi/Lake Nakuru</span>
          <p className={styles.p}>
             Depart Amboseli in the morning and drive via Nairobi to the floor of the Rift Valley with hot or picnic
            lunch en route to Lake Nakuru National Park arriving for your afternoon game drive. Besides the
            flamingos that the lake is famous for, there are approx 400 other species of birds visiting the lake. Also,
            many species of game can be found in the park including the introduced Rothschild's giraffe, black and
            white rhino, waterbuck, reedbuck, lion, buffalo, leopard, baboon and many species of plains game. Dinner
            and overnight at lion hill camp.
            Approx Travel time: 7 hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 4. Lake Nakuru/Maasai Mara</span>
          <p className={styles.p}>
             Depart after breakfast and drive further along the floor of the Rift Valley to Maasai Mara Game Reserve
            arriving Mara Mwangaza camp or Enchoro mid luxury tented camp in time for lunch. Afternoon game
            drive that introduces to this vast game filled reserve. Dinner and overnight at the camp.
            Approx Travel time: 6 hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 5. Masai Mara</span>
          <p className={styles.p}>
             Depart after breakfast and drive further along the floor of the Rift Valley to Maasai Mara Game Reserve
            arriving Mara Mwangaza camp or Enchoro mid luxury tented camp in time for lunch. Afternoon game
            drive that introduces to this vast game filled reserve. Dinner and overnight at the camp.
            Approx Travel time: 6 hrs
          </p>
        </div>
        <div className={styles.dayHolder}>
          <span className={styles.dayHeader}>Day 6. Masai Mara</span>
          <p className={styles.p}>
          After breakfast drive back to Nairobi arriving approx 14:00 hrs. Drop off at your hotel or transfer to the
            airport for your onward flight home. End of services.
            Approx Travel time: 6 hrs
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
        Rate of 1400US$ based on 2 pax <br/>

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

        <p> <span className={styles.budget}>Note</span>
          <ul className={styles.ul}>
            The tour begins and ends in Nairobi.
          </ul>
        </p>

      
        </p>
      </div>

    </div>

    </>
  )
}


