import React from 'react'
import Image from 'next/image'

import './styles.css'

//images
import bg_img from './parallaxHeroImages/01background.png'
import fog_7 from './parallaxHeroImages/02fog_7.png'
import mountain_10 from './parallaxHeroImages/03mountain_10.png'
import fog_6 from './parallaxHeroImages/04fog_6.png'
import mountain_9 from './parallaxHeroImages/05mountain_9.png'
import mountain_8 from './parallaxHeroImages/06mountain_8.png'
//


const Homeparallax: React.FC<{}> = ({ }) => {
  return (
    <div className='parallax-hero'>
      <div className='parallax bg-img'>
        <Image
          src={bg_img}
          alt='parallax'
          className='bg-img-img'
        />
      </div>

      <div className='parallax fog-7'>
        <Image
          src={fog_7}
          alt='parallax'
          className='fog-7-img'
        />
      </div>

      <div className='parallax mountain-10'>
        <Image
          src={mountain_10}
          alt='parallax'
          className='parallax mountain-10-img'
        />
      </div>

      <div className='parallax fog-6'>
        <Image
          src={fog_6}
          alt='parallax'
          className='parallax fog-6-img'
        />
      </div>

      <div className='parallax mountain-9'>
        <Image
          src={mountain_9}
          alt='parallax'
          className='parallax mountain-9-img'
        />
      </div>

      <div className='parallax mountain-8'>
        <Image
          src={'/assets/parallaxHeroImages/06mountain_8.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-8-img'
        />
      </div>
      {/*
      <div className='parallax fog-5'>
        <Image
          src={'/assets/parallaxHeroImages/07fog_5.png'}
          fill
          alt='parallax'
          priority
          className='parallax fog-5-img'
        />
      </div>

      <div className='parallax mountain-7'>
        <Image
          src={'/assets/parallaxHeroImages/08mountain_7.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-7-img'
        />
      </div>

      <div className='text parallax'>
        <h2>Hi, I'm</h2>
        <h1>BoBoTheDev</h1>
      </div>

      <div className='parallax mountain-6'>
        <Image
          src={'/assets/parallaxHeroImages/09mountain_6.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-6-img'
        />
      </div>

      <div className='parallax  fog-4'>
        <Image
          src={'/assets/parallaxHeroImages/10fog_4.png'}
          fill
          alt='parallax'
          priority
          className='parallax fog-4-img'
        />
      </div>

      <div className='parallax mountain-5'>
        <Image
          src={'/assets/parallaxHeroImages/11mountain_5.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-5-img'
        />
      </div>

      <div className='parallax fog-3'>
        <Image
          src={'/assets/parallaxHeroImages/12fog_3.png'}
          fill
          alt='parallax'
          priority
          className='parallax fog-3-img'
        />
      </div>
      
      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/13mountain_4.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-4'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/14mountain_3.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-3'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/15fog_2.png'}
          fill
          alt='parallax'
          priority
          className='parallax fog-2'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/16mountain_2.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-2'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/17mountain_1.png'}
          fill
          alt='parallax'
          priority
          className='parallax mountain-1'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/18sun_rays.png'}
          fill
          alt='parallax'
          priority
          className='sun-rays'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/19black_shadow.png'}
          fill
          alt='parallax'
          priority
          className='black-shadow'
        />
      </div>

      <div className='parallax'>
        <Image
          src={'/assets/parallaxHeroImages/20fog_1.png'}
          fill
          alt='parallax'
          priority
          className='parallax fog-1'
        />
      </div>

  */}
    </div>
  )
}

export default Homeparallax
