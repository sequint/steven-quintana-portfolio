import logo from '../images/logo.png'
import Image from 'next/image'
import styles from './SiteLogo.module.css'

export default function SiteLogo() {
  return (
    <div className={ styles.shineContainer }>
      <Image
        className={ styles.logo }
        src={ logo }
        width={ 400 }
        height={ 400 }
        alt="SQ Logo"
      />
    </div>
  )
}
