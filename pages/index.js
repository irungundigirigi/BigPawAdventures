import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel'
import Package from '../components/package';



export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <div className={styles.masaiMara}>
        <div className={styles.mara_header}>MASAI MARA PACKAGES</div>
      </div>
      <div className={styles.mara_content}>
      Masai Mara is a unique wildlife conservation haven, famous for its spectacular natural diversity of wildlife
      and happens to be a premier Kenya Safari location in East Africa, offering visitors many reasons to visit this animal
      paradise. Large numbers of Lions, Cheetah, Elephant, Rhino, African Buffalo, Wildebeest, Giraffe, Zebra and many
      more animals are found in the park in their natural habitat, unconfined and free to roam the vast wilderness
      stretching for miles on end.
      </div>
      <Package />
     
    </div>
  )
}
