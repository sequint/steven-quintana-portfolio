import logo from '../favicon.ico'
import Image from 'next/image'

export default function SiteLogo() {
  return (
    <Image
      style={{ transform: 'rotate(349deg)' }}
      src={ logo }
      width={ 300 }
      height={ 300 }
      alt="SQ Logo"
    />
  )
}
