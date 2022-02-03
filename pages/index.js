import Head from 'next/head'
import Image from 'next/image'
import Kelly from '../public/kelly_mtKenya.JPG'
import t from '../public/2.JPG'
import th from '../public/3.JPG'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={Kelly}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={t} 
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src={th}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    </div>
  )
}
