import styles from '../../styles/package.module.css';
import Image from 'next/image'
import zebra from '../../public/2_days_maasai_mara.png';
import React from 'react';
import { AiOutlineArrowRight }  from 'react-icons/ai';
import Link from 'next/link'


export default function TwoDayPackage() {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                2 Days Maasai Mara Safari
            </div>
            <div className={styles.btm}>
                <div className={styles.priceTag}> <span className={styles.From}>From</span> US$250</div>
                <button className={styles.btn}>
                    <Link href="packages/Twodaypackage">
                     <AiOutlineArrowRight />
                    </Link>
                </button>
            </div>
        </div>
  );
}
