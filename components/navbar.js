import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import Link from 'next/link';
import Logo from '../public/icon.svg'
import styles from '../styles/Nav.module.css';
import { FaBars}  from 'react-icons/fa';
import { AiOutlineClose} from 'react-icons/ai';


export default function Navbar() {
    const[inProps, setInProps] = useState(false)

    const menuClicked = () => {
        setInProps(!inProps)
    }    

    return ( 
    <>
        <Head>
        <meta name= "description" content="" />
        <meta name= "keywords" content=""/>
        <title>BigPaw adventures</title>
        <link rel="icon" sizes="32x32" href="icon.svg" />
        </Head>

        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={Logo}></Image>
                </div>
                <div>BigPaw Adventure</div>
            </div>
            <div className={styles.menu}>
                <Link  href='/'>
                        <span className={styles.Link}>Home</span >
                </Link>
                <Link  href='/destinations'>
                        <span className={styles.Link}>Destinations</span >
                </Link>
                <Link  href='/about'>
                        <span className={styles.Link}>About us</span >
                </Link>
                <Link  href='/contact'>
                        <span className={styles.Link}>Contact us</span >
                </Link>
            </div>
            <div className={styles.hamburger}>
               {inProps?<AiOutlineClose  className={styles.fabars}  onClick={menuClicked}/> : <FaBars  className={styles.fabars} onClick={menuClicked}/> }
           </div>
        </nav>
    </>
    );
  }