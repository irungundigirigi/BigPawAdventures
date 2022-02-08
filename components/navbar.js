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
                <Link  href='/destinations'>
                        <span className={styles.Link}>WILDLIFE</span >
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
    </nav>
   
    );
  }