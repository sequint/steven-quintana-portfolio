import Image from 'next/image'
import headshot from '../images/headshot.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.aboutDescContainer }>
        <p>hello</p>
      </div>
      <div className={ styles.aboutImgContainer }>
        <Image
          className={ styles.headshot }
          src={ headshot }
          width={ 400 }
          height={ 400 }
          alt="SQ Logo"
        />  
      </div>

    </div>
  )
}
