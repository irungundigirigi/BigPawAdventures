import styles from '../../styles/package.module.css';
import Image from 'next/image'
import zebra from '../../public/mara-nakuru.png';
import React from 'react';


export default function MaraNakuru() {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                Maasai Mara/ Lake Nakuru - 4 Days/3 nights
            </div>
            <div className={styles.content}>
                Adding to two memorable days at the game filled plains of the Maasai Mara Game Reserve, this safari also
                takes you to Lake Nakuru National Park which is one of the worlds greatest bird paradise. Other than thebird population of different species and especially flamingos that flock the lake, the park has its fair share
                of wildlife that include the endangered black rhino.
            </div>
            <div className={styles.priceTag}> <span className={styles.From}>From</span> $420</div>
            <button className={styles.btn}>See more</button>

        </div>
  );
}
