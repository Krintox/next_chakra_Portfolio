import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Features from '../components/About'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import { Stack } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack className='stack-wrapper'>
      <Stack>
        <Hero></Hero>
        <Features></Features>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </Stack>
    </Stack>
  )
}
