import styles from '../../styles/package.module.css';
import Image from 'next/image'
import pp from '../../public/nakuru.png';
import React from 'react';
import { AiOutlineArrowRight }  from 'react-icons/ai';



export default function SixDaysAmboseli () {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={pp} />
            </div>
            <div className={styles.cardHeader}>
                6 Days Amboseli/Lake Nakuru/Maasai Mara
            </div>
            <div className={styles.btm}>
                <div className={styles.priceTag}> <span className={styles.From}>From</span> $1020</div>
                <button className={styles.btn}>See more <AiOutlineArrowRight /></button>
            </div>

        </div>
  );
}
