import { fredoka } from '@/utils/fonts'
import styles from './TitleDescription.module.css'

export default function TitleDescription() {
  return (
    <>
      <h1 className={ `${fredoka.className} ${styles.title}`}>Steven Quintana</h1>
      <article></article>
    </>
  )
}