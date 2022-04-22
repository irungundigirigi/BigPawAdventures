import styles from '../../styles/package.module.css';
import Image from 'next/image'
import zebra from '../../public/23._days.png';
import React from 'react';
import { AiOutlineArrowRight }  from 'react-icons/ai';



export default function TreeDaysTwoNights () {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                3 days Two nights Maasai Mara safari
            </div>
            <div className={styles.btm}>
                <div className={styles.priceTag}> <span className={styles.From}>From</span> $1020</div>
                <button className={styles.btn}>See more <AiOutlineArrowRight /></button>
            </div>

        </div>
  );
}
