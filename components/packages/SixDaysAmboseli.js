import styles from '../../styles/package.module.css';
import Image from 'next/image'
import pp from '../../public/nakuru.png';
import Link from 'next/link'
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
            <button className={styles.btn}>
                    <Link href="packages/SixdaysAmboseli">
                     <AiOutlineArrowRight />
                    </Link>
                </button>

        </div>
  );
}
