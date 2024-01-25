'use client'

import Image from 'next/image'
import { fredoka } from '@/utils/fonts'
import skillsIcon from '../images/skillsIcon.png'
import projectsIcon from '../images/projectsIcon.png'
import experienceIcon from '../images/experienceIcon.png'
import styles from './BtmImageLinks.module.css'
import { useState } from 'react'

interface ImageLinkProps {
  getClickedImage: FunctionStringCallback
}

interface ImageLink {
  imgOpacity: number,
  titleDisplay: string
}

export default function BtmImageLinks({ getClickedImage }: ImageLinkProps) {

  const [ skillsImg, setSkillsImg ] = useState<ImageLink>({
    imgOpacity: 1, titleDisplay: 'none'
  })
  const [ projectsImg, setProjectsImg ] = useState<ImageLink>({
    imgOpacity: 1, titleDisplay: 'none'
  })
  const [ experienceImg, setExperienceImg ] = useState<ImageLink>({
    imgOpacity: 1, titleDisplay: 'none'
  })

  return (
    <div className={ styles.imageContainer }>
      <span
        style={{ display: skillsImg.titleDisplay }}
        className={ `${fredoka.className} ${styles.title} ${styles.skillsTitle}` }
        onMouseEnter={ () => setSkillsImg({ imgOpacity: .4, titleDisplay: 'inline' }) }
        onMouseLeave={ () => setSkillsImg({ imgOpacity: 1, titleDisplay: 'none' }) }
        onClick={ () => getClickedImage('skills') }
      >
        Skills
      </span>
      <Image
        style={{ opacity: skillsImg.imgOpacity }}
        className={ styles.image }
        src={ skillsIcon }
        width={ 200 }
        height={ 200 }
        alt='HTML Element Brackets'
        onMouseEnter={() => setSkillsImg({ imgOpacity: .4, titleDisplay: 'inline' })}
        onMouseLeave={() => setSkillsImg({ imgOpacity: 1, titleDisplay: 'none' })}
        onClick={ () => getClickedImage('skills') }
      />
      <span
        style={{ display: projectsImg.titleDisplay }}
        className={ `${fredoka.className} ${styles.title} ${styles.projectsTitle}` }
        onMouseEnter={() => setProjectsImg({ imgOpacity: .4, titleDisplay: 'inline' })}
        onMouseLeave={() => setProjectsImg({ imgOpacity: 1, titleDisplay: 'none' })}
        onClick={ () => getClickedImage('projects') }
        >
          Project Highlights
      </span>
      <Image
        style={{ marginLeft: 50, opacity: projectsImg.imgOpacity }}
        className={ styles.image }
        src={ projectsIcon }
        width={ 325 }
        height={ 325 }
        alt='Computer'
        onMouseEnter={() => setProjectsImg({ imgOpacity: .4, titleDisplay: 'inline' })}
        onMouseLeave={() => setProjectsImg({ imgOpacity: 1, titleDisplay: 'none' })}
        onClick={ () => getClickedImage('projects') }
      />
      <span
        style={{ display: experienceImg.titleDisplay }}
        className={ `${fredoka.className} ${styles.title} ${styles.experienceTitle}` }
        onMouseEnter={() => setExperienceImg({ imgOpacity: .4, titleDisplay: 'inline' })}
        onMouseLeave={() => setExperienceImg({ imgOpacity: 1, titleDisplay: 'none' })}
        onClick={ () => getClickedImage('experience') }
        >
        Experience
      </span>
      <Image
        style={{ opacity: experienceImg.imgOpacity }}
        className={ styles.image }
        src={ experienceIcon }
        width={ 410 }
        height={ 410 }
        alt='Office Building'
        onMouseEnter={() => setExperienceImg({ imgOpacity: .4, titleDisplay: 'inline' })}
        onMouseLeave={() => setExperienceImg({ imgOpacity: 1, titleDisplay: 'none' })}
        onClick={ () => getClickedImage('experience') }
      />
    </div>
  )
}
