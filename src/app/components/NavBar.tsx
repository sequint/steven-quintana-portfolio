import { pageTitles } from '@/data/pageTitles'
import styles from './NavBar.module.css'

export default function NavBar() {
  // Add rounded nav bar
  // Below description add list of education, projects, and experience
  // Each list item is an arrow dropdown that exposes it on hover
  return (
    <nav className={ styles.navContainer }>
      <div className={ styles.linksContainer }>
        <p className={ styles.links }>Projects</p>
        <p className={ styles.links }>About Me</p>
        <p className={ styles.links }>Resume</p>
      </div>
    </nav>
  )
}
