import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel'



export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <div>
       
      </div>
    </div>
  )
}
