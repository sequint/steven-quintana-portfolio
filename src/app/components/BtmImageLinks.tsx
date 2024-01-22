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
        width={ 225 }
        height={ 225 }
        alt='HTML Element Brackets'
      />
      <Image
        style={{ marginLeft: 50 }}
        className={ styles.image }
        src={ projectsIcon }
        width={ 350 }
        height={ 350 }
        alt='Cartoon Computer'
      />
      <Image
        className={ styles.image }
        src={ experienceIcon }
        width={ 425 }
        height={ 425 }
        alt='Cartoon Computer'
      />
    </div>
  )
}
