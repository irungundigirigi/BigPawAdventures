import styles from '../../styles/package.module.css';
import Image from 'next/image'
import elephant from '../../public/nairobi_city_tours.png';
import React from 'react';
import { AiOutlineArrowRight }  from 'react-icons/ai';
import Link from 'next/link'


export default function NairobiCityTours() {
  return (
        <div className={styles.packageCard}>
            <div className={styles.ImageContainer}>
                <Image src={elephant} />
            </div>
            <div className={styles.cardHeader}>
               Nairobi City Tours
            </div>
            <div className={styles.btm}>
                <div className={styles.priceTag}> <span className={styles.From}>From</span> US$250</div>
                <button className={styles.btn}>
                    <Link href="packages/NairobiCityTours">
                     <AiOutlineArrowRight />
                    </Link>
                </button>
            </div>
        </div>
  );
}
