import Head from 'next/head'
import Image from 'next/image'
import Kelly from '../public/kelly_mtKenya.JPG'
import t from '../public/2.JPG'
import th from '../public/3.JPG'
import fr from '../public/4.JPG'
import styles from '../styles/Home.module.css';
import Carousel from '../components/carousel'



export default function Home() {
  return (
    <div>
      <Carousel />
     
    </div>
  )
}
