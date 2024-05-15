import Description from './Description'
import { fredoka } from '@/utils/fonts'
import styles from './TitleDescription.module.css'

export default function TitleDescription() {
  return (
    <div className={ styles.fadeIn }>
      <h1 className={ `${ fredoka.className } ${ styles.title }`}>Steven Quintana</h1>
      <Description />
    </div>
  )
}
