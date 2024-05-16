'use client'

import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)

    if (element)
      element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={ styles.linksContainer }>
      {/* <Link className={ styles.links } href='/projects'>Projects</Link> */}
      <div className={ styles.links } onClick={() => scrollTo('aboutme')}>About Me</div>
      <Link className={ styles.links } href='/resume'>Resume</Link>
    </div>
  )
}
