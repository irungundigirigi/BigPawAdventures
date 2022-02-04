import Head from 'next/head'
import Image from 'next/image'
import Kelly from '../public/kelly_mtKenya.JPG'
import t from '../public/2.JPG'
import th from '../public/3.JPG'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
      <Carousel  className={styles.carousel}> 
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={th}
            alt="Third slide"
          />
        <Carousel.Caption>
            <h3 className={styles.h3}>Adventure Tour Company</h3>
            <p>We offer high quality adventure and wildlife safaris within East Africa and particularly Kenya.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
