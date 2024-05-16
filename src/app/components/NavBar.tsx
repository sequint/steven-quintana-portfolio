import { fredoka } from '@/utils/fonts'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={ `${ fredoka.className } ${ styles.navContainer }` }>
      <div className={ styles.linksContainer }>
        <Link className={ styles.links } href='/projects'>Projects</Link>
        <Link className={ styles.links } href='#aboutme'>About Me</Link>
        <Link className={ styles.links } href='/resume'>Resume</Link>
      </div>
    </nav>
  )
}
