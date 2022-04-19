import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import Link from 'next/link';
import Logo from '../public/full_Logo.png'
import styles from '../styles/Nav.module.css';
import { FaBars}  from 'react-icons/fa';
import { AiOutlineClose} from 'react-icons/ai';


export default function Navbar() {
    const[inProps, setInProps] = useState(false)

    const menuClicked = () => {
        setInProps(!inProps)
    }    

    return ( 
    
    <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={Logo}></Image>
                </div>
            </div>

            <div className={styles.menu}>
                <Link  href='/'>
                        <span className={styles.Link}>HOME</span >
                </Link>
                <Link  href='/'>
                        <span className={styles.Link}>WILDBEAST MIGRATION</span >
                </Link>
                <Link  href='/destinations'>
                        <span className={styles.Link}>NAIROBI CITY TOURS</span >
                </Link>
                <Link  href='/about'>
                        <span className={styles.Link}>ABOUT </span >
                </Link>
                <Link  href='/contact'>
                        <span className={styles.Link}>CONTACT</span >
                </Link>
            </div>
            <div className={styles.hamburger}>
               {inProps?<AiOutlineClose  className={styles.fabars}  onClick={menuClicked}/> : <FaBars  className={styles.fabars} onClick={menuClicked}/> }
           </div>
           <div className={inProps? styles.sidebar: styles.sidebarOff}>
              <div className={styles.menuMobile} >
                <item className={styles.item}>
                  <div className={styles.link}> 
                   
                     <Link href='/'>Home</Link>
                  </div>
                  
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <Link href='/featured'>Wildbeast migration</Link>
                   </div>
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <Link href='/featured'>Nairobi City Tours</Link>
                   </div>
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <Link href='/featured'>Masai Mara</Link>
                   </div>
                </item>

                <item className={styles.item}>
                   <div className={styles.link}>
                     <Link href='/contact-us'>Contact</Link>
                   </div>
                </item>
                
               </div>
            </div>
    </nav>
   
    );
  }