import Image from 'next/image'
import { fredoka } from '@/utils/fonts'
import headshot from '../images/headshot.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.aboutDescContainer }>
        <div className={ `${ fredoka.className } ${styles.textContainer }`}>
          <p>
            I am an MSCS Student and Software Engineer who develops beautiful, simple, and novel technologies.  I am passionate about building products that blend the worlds of technology and sustainability.
          </p>
          <p>
            In my free time I love to work in my garden, try new food places with my wife, run on trails, go hiking, and surf.
          </p>
          <p>
            I also love learning new technologies and collaborating on new ideas. So if you have one and need some help, reach out!
          </p>
        </div>
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
