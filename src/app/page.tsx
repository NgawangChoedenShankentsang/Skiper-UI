'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import FlipLink from "@/components/ui/text-effect-flipper"
import { Camera, Globe, Aperture, Linkedin, Instagram } from 'lucide-react'
import React from 'react'
import { TextScroll } from '@/components/ui/text-scroll'
import { CardCarousel } from '@/components/ui/card-carousel'

const page =() =>{

    const images = [
    { src: "/card-01.jpg", alt: "Image 1" },
    { src: "/card-02.jpg", alt: "Image 2" },
    { src: "/card-03.jpg", alt: "Image 3" },
  ]

  return (
    <div>
      <h1 className='text-white'>Home</h1>
      <WrapButton href="/explore" className='mt-20'> 
        <Aperture  />
        Explore Now
      </WrapButton>

      <ShareButton 
        links={[
          { icon: Globe, href: "/", label: "GitHub" }, 
          { icon: Camera, href: "/", label: "GitHub" }, 
          { icon: Linkedin, href: "/", label: "GitHub" },
          { icon: Instagram, href: "/", label: "GitHub" }
        ]}>Share</ShareButton>

        <div className='mt-20'>
          <FlipLink href="/explore">Facebook</FlipLink>
          <FlipLink href="/explore">Instagram</FlipLink>  
        </div>
        <div className='h-screen mt-20'> <TextScroll default_velocity={5} className='text-white text-5xl font-bold' text="Loading...   " /></div>

        <div className="pt-40">
          <CardCarousel
            className='mt-20'
            images={images}
            autoplayDelay={1000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
    </div>
  )
}

export default page