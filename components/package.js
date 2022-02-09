import styles from '../styles/package.module.css';
import Image from 'next/image'
import zebra from '../public/2_days_maasai_mara.png';


import React from 'react';

export default function Package() {

    
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                2 Days Maasai Mara Safari
            </div>
            <div className={styles.content}>
            This is an exciting 2 days  safari into the famous Maasai Mara,
            the jewel of Kenyas wildlife and the greatest spot for wildebeest migration.
            



            </div>


        </div>
  );
}
