import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel'
import TwoDayPackage from '../components/packages/TwoDayPackage';
import TreeDaysTwoNights from '../components/packages/ThreeDaysTwoNights'
import MaraNakuru from '../components/packages/Mara-Nakuru';
import Nakuru from '../components/packages/SixDaysAmboseli';
import NairobiCityTours from '../components/packages/NairobiCityTours';



export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <div className={styles.packagesHolder}>
        <TreeDaysTwoNights />
        <TwoDayPackage />
        <NairobiCityTours />
        <MaraNakuru />
        <Nakuru />
      </div>

    </div>
  )
}
