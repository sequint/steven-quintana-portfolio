import { FaRegCopyright } from "react-icons/fa6"
import { fredoka } from '@/utils/fonts'
import IconLinks from "./IconLinks";
import styles from './Footer.module.css'

export default function footer() {
  return (
    <div className={ styles.footerContainer }>
      <IconLinks />
      <div className={ styles.copyRightContainer }>
        <FaRegCopyright
          size={15}
          color='grey'
        />
        <span className={ `${ fredoka.className } ${ styles.copyRight}`}>2024 Steven Quintana</span>
      </div>
    </div>
  )
}
