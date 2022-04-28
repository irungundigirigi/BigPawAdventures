import React from 'react';
import styles from '../styles/Footer.module.css';
import Logo from '../public/full_Logo.png'
import Image from 'next/image'
import {FaPhoneSquareAlt}  from 'react-icons/fa';
import {MdEmail, MdLocationOn}  from 'react-icons/md';

export default function Footer() {
  return <div className={styles.footer} >
    <Image src={Logo}></Image>
    <div className={styles.hr} ></div>
    <div className={styles.contactsContainer}>
      <div className={styles.item}> <FaPhoneSquareAlt className={styles.footerIcon} /> +254 720859681</div>
      <div className={styles.item}> <MdEmail  className={styles.footerIcon}/>kellykellitoh@gmail.com</div>      
      <div className={styles.item}> <MdLocationOn className={styles.footerIcon} /> Nairobi, Kenya</div>  
    </div>
    </div>
}
