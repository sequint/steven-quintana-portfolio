import { pageTitles } from '@/data/pageTitles'
import { fredoka } from '@/utils/fonts'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  // Add rounded nav bar
  // Below description add list of education, projects, and experience
  // Each list item is an arrow dropdown that exposes it on hover
  return (
    <nav className={ `${ fredoka.className } ${ styles.navContainer }` }>
      <div className={ styles.linksContainer }>
        <Link className={ styles.links } href='/projects'>Projects</Link>
        <Link className={ styles.links } href='/about'>About Me</Link>
        <Link className={ styles.links } href='/resume'>Resume</Link>
      </div>
    </nav>
  )
}
