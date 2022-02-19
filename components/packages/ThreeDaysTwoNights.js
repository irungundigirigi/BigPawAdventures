import styles from '../../styles/package.module.css';
import Image from 'next/image'
import zebra from '../../public/23._days.png';
import React from 'react';


export default function TreeDaysTwoNights () {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                3 days Two nights Maasai Mara safari
            </div>
            <div className={styles.content}>
            This is a short safari featuring Maasai Mara National Reserve. The safari departs Nairobi in the morning
                and involves a drive down to the the floor of the Rift Valley, making a stop at view point to see the
                escarpment and the awesome sight of the valley and the features there in. To arrive Maasai Mara in timefor lunch, followed by a late afternoon game drive that introduces you to Kenya's most popular game
                sanctuary.
            </div>
            <div className={styles.priceTag}> <span className={styles.From}>From</span> $600pp</div>
            <button className={styles.btn}>See more</button>

        </div>
  );
}
