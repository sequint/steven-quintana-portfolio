import Image from 'next/image'
import { fredoka } from '@/utils/fonts'
import headshot from '../images/headshot.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={ styles.aboutContainer }>
      <div className={ styles.aboutDescContainer }>
        <div className={ `${ fredoka.className } ${styles.textContainer }`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
