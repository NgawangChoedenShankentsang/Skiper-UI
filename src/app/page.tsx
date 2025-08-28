'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import FlipLink from "@/components/ui/text-effect-flipper"
import { Camera, Globe, Aperture, Linkedin, Instagram } from 'lucide-react'
import React from 'react'

function page() {
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

        <div className='h-screen border-t-2'></div>
        <div className='h-screen border-t-2'></div>
        <div className='h-screen border-t-2'></div>
    </div>
  )
}

export default page