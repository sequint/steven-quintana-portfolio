import logo from '../images/logo.png'
import Image from 'next/image'
import styles from './SiteLogo.module.css'
interface SiteLogoProps {
  getClickedImage: FunctionStringCallback
}

export default function SiteLogo({ getClickedImage }: SiteLogoProps) {
  return (
    <Image
      className={ styles.logo }
      src={ logo }
      width={ 300 }
      height={ 300 }
      alt="SQ Logo"
      onClick={() => getClickedImage('description')}
    />
  )
}
