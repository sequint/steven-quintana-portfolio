import logo from '../images/logo.png'
import Image from 'next/image'
import styles from './SiteLogo.module.css'

export default function SiteLogo() {
  return (
    <Image
      className={ styles.logo }
      src={ logo }
      width={ 300 }
      height={ 300 }
      alt="SQ Logo"
    />
  )
}
