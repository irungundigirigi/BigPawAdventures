import styles from '../../styles/package.module.css';
import Image from 'next/image'
import pp from '../../public/nakuru.png';
import React from 'react';


export default function SixDaysAmboseli () {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={pp} />
            </div>
            <div className={styles.cardHeader}>
                6 Days Amboseli/Lake Nakuru/Maasai Mara
            </div>
            <div className={styles.content}>
                Adding to two memorable days at the game filled plains of the Maasai Mara Game Reserve, this safari also
                takes you to Lake Nakuru National Park which is one of the worlds greatest bird paradise. Other than the
                bird population of different species and especially flamingos that flock the lake, the park has its fair share
                of wildlife that include the endangered black rhino.
            </div>
            <div className={styles.priceTag}> <span className={styles.From}>From</span> $1400</div>
            <button className={styles.btn}>See more</button>

        </div>
  );
}
