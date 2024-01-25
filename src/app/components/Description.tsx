import { description } from '@/data/description'

export default function Description() {
  return (
    <article
      style={{ 
        fontFamily: 'Arial',
        fontSize: 'large',
        width: '30dvw'
      }}
    >
      <p>{ description.p1 }</p>
    </article>
  )
}
