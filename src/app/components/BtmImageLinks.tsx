import Image from 'next/image'
import skillsIcon from '../images/skillsIcon.png'
import projectsIcon from '../images/projectsIcon.png'
import experienceIcon from '../images/experienceIcon.png'
import styles from './BtmImageLinks.module.css'

export default function BtmImageLinks() {
  return (
    <div className={ styles.imageContainer }>
      <Image
        className={ styles.image }
        src={ skillsIcon }
        width={ 200 }
        height={ 200 }
        alt='HTML Element Brackets'
      />
      <Image
        className={ styles.image }
        src={ projectsIcon }
        width={ 300 }
        height={ 300 }
        alt='Cartoon Computer'
      />
      <Image
        className={ styles.image }
        src={ experienceIcon }
        width={ 400 }
        height={ 400 }
        alt='Cartoon Computer'
      />
    </div>
  )
}
