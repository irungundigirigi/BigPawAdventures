import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel'
import TwoDayPackage from '../components/packages/TwoDayPackage';



export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <TwoDayPackage />
    </div>
  )
}
