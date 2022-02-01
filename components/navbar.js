import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/icon.jpg'
import styles from '../styles/Nav.module.css';

export default function Navbar() {
    return ( 
    <>
        <Head>
        <meta name= "description" content="" />
        <meta name= "keywords" content=""/>
        <title>BigPaw adventures</title>
        <link rel="icon" sizes="32x32" href="icon.jpg" />
        </Head>

        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src={Logo}></Image>
                </div>
                <div>BigPaw Adventure</div>
            </div>
            <div className={styles.menu}>
            </div>
        </nav>
    </>
    );
  }