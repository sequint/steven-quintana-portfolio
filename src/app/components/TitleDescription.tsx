import { description } from '@/data/description'
import { fredoka } from '@/utils/fonts'
import styles from './TitleDescription.module.css'

export default function TitleDescription() {
  return (
    <div className={ styles.fadeIn }>
      <h1 className={ `${fredoka.className} ${styles.title}`}>Steven Quintana</h1>
      <article
        style={{ 
          fontFamily: 'Arial',
          fontSize: 'large',
          width: '30dvw'
        }}
      >
        <p>{ description.p1 }</p>
      </article>
    </div>
  )
}
