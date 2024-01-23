'use client'

import Image from 'next/image'
import skillsIcon from '../images/skillsIcon.png'
import projectsIcon from '../images/projectsIcon.png'
import experienceIcon from '../images/experienceIcon.png'
import styles from './BtmImageLinks.module.css'
import { useState } from 'react'

export default function BtmImageLinks() {
  const [ skillsOpacity, setSkillsOpacity ] = useState(1)
  const [ projectsOpacity, setProjectsOpacity ] = useState(1)
  const [ experienceOpacity, setExperienceOpacity ] = useState(1)

  return (
    <div className={ styles.imageContainer }>
      <Image
        style={{ opacity: skillsOpacity }}
        className={ styles.image }
        src={ skillsIcon }
        width={ 200 }
        height={ 200 }
        alt='HTML Element Brackets'
        onMouseEnter={() => setSkillsOpacity(.4)}
        onMouseLeave={() => setSkillsOpacity(1)}
      />
      <Image
        style={{ marginLeft: 50, opacity: projectsOpacity }}
        className={ styles.image }
        src={ projectsIcon }
        width={ 325 }
        height={ 325 }
        alt='Computer'
        onMouseEnter={() => setProjectsOpacity(.4)}
        onMouseLeave={() => setProjectsOpacity(1)}
      />
      <Image
        style={{ opacity: experienceOpacity }}
        className={ styles.image }
        src={ experienceIcon }
        width={ 410 }
        height={ 410 }
        alt='Office Building'
        onMouseEnter={() => setExperienceOpacity(.4)}
        onMouseLeave={() => setExperienceOpacity(1)}
      />
    </div>
  )
}
