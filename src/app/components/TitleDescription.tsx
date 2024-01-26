import Description from './Description'
import ProjectHighlights from './middle/ProjectHighlights'
import { fredoka } from '@/utils/fonts'
import styles from './TitleDescription.module.css'

interface TDProps {
  middleContent: string
}

export default function TitleDescription({ middleContent }: TDProps) {
  return (
    <div className={ styles.fadeIn }>
      <h1 className={ `${ fredoka.className } ${ styles.title }`}>Steven Quintana</h1>
      <div key={ middleContent } className={ styles.fadeIn }>
        { middleContent === 'description' && <Description /> }
        { middleContent === 'skills' && <p>Skills</p> }
        { middleContent === 'projects' && <ProjectHighlights /> }
        { middleContent === 'experience' && <p>Experience</p> }
      </div>
    </div>
  )
}
