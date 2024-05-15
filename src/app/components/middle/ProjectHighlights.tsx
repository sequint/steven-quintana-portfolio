import Link from 'next/link'
import { TiArrowRightOutline } from 'react-icons/ti'
import styles from './ProjectHighlights.module.css'

export default function ProjectHighlights() {
  return (
    <aside className={ styles.fadeIn }>
      <p className={ styles.highlightTitle }>Project Highlights</p>
      <Link
        style={{ textDecoration: 'none' }}
        href='https://github.com/sequint/Jofer'
        target='_blank'
      >
        <div className={ styles.projectBox }>
          <h4 className={ `${ styles.projectContents } ${ styles.title }` }>
            Jofer
          </h4>
          <TiArrowRightOutline
            size={ 23 }
            className={ styles.arrowIcon }
          />
          <p className={ `${ styles.projectContents } ${ styles.description }` }>
            An agile hiring app for HR departments to retain pipelines even after job declines
          </p>
        </div>
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        href='https://github.com/sequint/pub'
        target='_blank'
      >
        <div className={ styles.projectBox }>
          <h4 className={ `${ styles.projectContents } ${ styles.title }` }>
            pub
          </h4>
          <TiArrowRightOutline
            size={ 23 }
            className={ styles.arrowIcon }
          />
          <p className={ `${ styles.projectContents } ${ styles.description }` }>
            An app that allows users to create and manage projects that they are working on
          </p>
        </div>
      </Link>
    </aside>
  )
}
