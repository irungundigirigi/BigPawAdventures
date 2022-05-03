import styles from '../../styles/package.module.css';
import Image from 'next/image'
import zebra from '../../public/mara-nakuru.png';
import React from 'react';
import Link from 'next/link'
import { AiOutlineArrowRight }  from 'react-icons/ai';


export default function MaraNakuru() {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={zebra} />
            </div>
            <div className={styles.cardHeader}>
                Maasai Mara/ Lake Nakuru - 4 Days/3 nights
            </div>
            <div className={styles.btm}>
                <div className={styles.priceTag}> <span className={styles.From}>From</span> US$ 1020 </div>
                <button className={styles.btn}>
                    <Link href="packages/MaraNakuru">
                     <AiOutlineArrowRight />
                    </Link>
                </button>
            </div>
        </div>
  );
}
