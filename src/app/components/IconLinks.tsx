import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import styles from './IconLinks.module.css'
import Link from 'next/link'

export default function IconLinks() {
  return (
    <div style={{ marginTop: -25 }}>
      <Link href='https://github.com/sequint' target='_blank'>
        <FiGithub
          size={35}
          color='grey'
          className={ styles.icon }
        />
      </Link>
      <Link href='https://www.linkedin.com/in/steven-quintana-278b0091/' target='_blank'>
        <FiLinkedin
          size={35}
          color='grey'
          className={ styles.icon }
          style={{ marginLeft: 20 }}
        />
      </Link>
    </div>
  )
}
