import {Tile, Tiles, LinkTile} from '../components/core/Tile'
import {P} from '../components/core/P'
import {Icon} from '../components/core/Icon'

import { CSSProperties } from 'react'

import resume_background from '../assets/Desk.png'
import map_background from '../assets/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg'
import blog_background from '../assets/code.png'
import profile_background from '../assets/profile.png'

import hotel_flag_image from '../assets/Pictures/hotel flag.png'
import bee_image from '../assets/Pictures/Bee and the Flower.png'
import hotel_image from '../assets/Pictures/hotel.png'
import rose_image from '../assets/Pictures/The Rose.png'
import city_image from '../assets/Pictures/IMG_9331.png'


import { Carosel } from '../components/carosel/Carosel'

export function Landing() {
  const skill_tile_styles: CSSProperties = {
    border: "2px solid #a6adc8", 
    padding: "1px 8px", 
    borderRadius: '5px'
  }

  return (
    <>
      <link rel="preload" href={hotel_flag_image} as="image" />
      <link rel="preload" href={bee_image} as="image" />
      <link rel="preload" href={hotel_image} as="image" />
      <link rel="preload" href={rose_image} as="image" />
      <link rel="preload" href={city_image} as="image" />
      <Tiles>
        <Tile name="Welcome" start_at={[1,1]} height={1} width={2}>
          <div className='flex v-centered space-between pad-right-15px pad-bottom-10px'>
            <h2 className='font-smallish'>Start Here</h2>
            <div className='flex v-centered gap-5px'>
              <Icon size='small' name='pin'/>
              <P className='font-smallish'>Chandler, AZ</P>
            </div>

          </div>
          <P className='font-smallish'>Hello, My Name is <span className='font-orange font-bold'>Daniel Rustrum</span>! A Programmer, Photographer, and Designer with a strong background in Quality Assurance and Web Accessibility. In the Pursuit of Creating Quality Designs, Experiences, and Interactions for the Web.</P>
        </Tile>
        <Tile name="Profile" start_at={[3,1]} height={2} width={1} pad_tile={true}>
          <div style={{
                  display: "flex", 
                  background: `linear-gradient(0deg, #1E1E2E30, #1E1E2E30), url(${profile_background})`, 
                  height: "100%", 
                  width:"100%", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "10px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
              }} />
        </Tile>
        <LinkTile name='Journey' start_at={[4,1]} title='My Journey' background_image={map_background} icon='journey' link_to='/journey' height={1} width={1}/>
        <LinkTile name='Blog' start_at={[1,2]} title='My Blog' background_image={blog_background} icon='arrow_right' link_to='/journey' height={1} width={1}/>
        <Tile name="Programming" start_at={[1,3]} height={4} width={1}>
          <div className="flex columns v-centered height-fill space-between pad-vert-5px pad-bottom-15px">
            <div>
              <h2 className='text-centered gap-15px pad-bottom-10px font-sub-head font-orange font-bold'>Developer</h2>
              <P className='font-reg pad-hori-15px'>As a kid I loved making video games for me and my friends, it was always a blast! This love has now grown and expanded to encompass not only video games, but also to include pretty much anything that includes user interaction, but primarily on the Web.</P>
            </div>
            <div className='flex wrap centered gap-7px'>
                <P style={skill_tile_styles}>HTML</P>
                <P style={skill_tile_styles}>CSS</P>
                <P style={skill_tile_styles}>Javascript</P>
                <P style={skill_tile_styles}>React</P>
                <P style={skill_tile_styles}>Go-Lang</P>
                <P style={skill_tile_styles}>PixiJS</P>
                <P style={skill_tile_styles}>Web Accessibility</P>
                <P style={skill_tile_styles}>Web Animation</P>
                <P style={skill_tile_styles}>TailwindCSS</P>
                <P style={skill_tile_styles}>MotionJS</P>
                <P style={skill_tile_styles}>React Router</P>
            </div>
            <div className='flex v-centered gap-15px'> 
              <Icon size='xlarge' name='codepen'/>
              <Icon size='xlarge' name='github'/>
            </div>
          </div>
        </Tile>
        <Tile name="Photography" start_at={[2,2]} height={5} width={1}>
        <div className="flex columns v-centered gap-15px height-fill space-between pad-vert-5px pad-bottom-15px">
          <div>
            <h2 className='text-centered pad-bottom-10px font-sub-head font-orange'>Photographer</h2>
            <P className='font-reg pad-hori-15px'>Photography is what merges my physical and digital worlds. It is the art of observation; freeze time on a single instance and allows me to capture and share the beauty that surrounds us. Here is some of my Favorite!</P>
          </div>
          <Carosel
            images={[
              hotel_flag_image,
              bee_image,
              hotel_image,
              rose_image,
              city_image,
            ]} 
          />
          <div className='flex v-centered gap-15px'>
            <Icon size='xlarge' name='cara'/>
            <Icon size='xlarge' name='instagram'/>
            <Icon size='xlarge' name='youtube'/>
            <Icon size='xlarge' name='twitch'/>
          </div>
        </div>
        </Tile>
        <Tile name="Design" start_at={[3,3]} height={4} width={1}>
          <div className="flex columns v-centered gap-15px height-fill space-between pad-vert-5px pad-bottom-15px">
            <div>
              <h2 className='text-centered pad-bottom-10px font-sub-head font-orange'>Designer</h2>
              <P className='font-reg pad-hori-15px'>I am a Catppucin/Nunito Enthusiast; half-jokingly. I DO strive to create designs that a variety users can easily interact with and that make a pleasant experience.</P>
            </div>
            <div className='flex v-centered gap-15px'>
              <Icon size='xlarge' name='codepen'/>
              <Icon size='xlarge' name='youtube'/>
              <Icon size='xlarge' name='dribble'/>
            </div>
          </div>
        </Tile>
        <Tile name="Contact" start_at={[4,2]} height={3} width={1}>
          <h2>Interested?</h2>
          <h3 className='pad-bottom-25px font-smallish'>Here are some ways to get ahold of me!</h3>

          <div className='flex columns gap-15px pad-left-25px'>
            <div className='flex v-centered gap-15px'>
              <Icon  name='mail'/>
              <P>daniel@rustrum.net</P>
            </div>
            <div className='flex v-centered gap-15px'>
              <Icon  name='linkedin'/>
              <P>daniel-rustrum</P>
            </div>
            <div className='flex gap-15px'>
              <Icon  name='phone'/>
              <div className='flex columns '>
                <P>(602) 845-0408</P>
                <P>*Texting Prefered</P>
              </div>
            </div>
            <div className='flex v-centered gap-15px'>
              <Icon  name='twitter'/>
              <P>HMNIRusty</P>
            </div>
          </div>
        </Tile>
        <Tile name="Themes" start_at={[4,5]} height={1} width={1}>
          <h2 className='font-reg pad-left-15px pad-top-5px'>Don't Like The Look?</h2>
          <h3 className='font-small pad-bottom-5px pad-left-25px'>Change The Accent Color from this selection of 6 colors.</h3>
          <div className='flex space-between pad-hori-15px pad-vert-5px gap-15px wrap'>
            <button className='theme-changer--button orange'></button>
            <button className='theme-changer--button yellow'></button>
            <button className='theme-changer--button green'></button>
            <button className='theme-changer--button cyan'></button>
            <button className='theme-changer--button blue'></button>
            <button className='theme-changer--button purple'></button>
            {/* <button style={{border: "none"}} className='no-background'>
              <Icon size='larger' name='light'/>
            </button> */}
          </div>
        </Tile>
        <LinkTile name='Resume' start_at={[4,6]} title='My Resume' background_image={resume_background} icon='arrow_right' link_to='/journey' height={1} width={1}/>
      </Tiles>
    </>
    
  )
}