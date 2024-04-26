import styles from "./Comment.module.css"
import { Trash } from "phosphor-react"
import { ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://img.freepik.com/fotos-gratis/garota-e-apanhador-de-sonhos_1321-1596.jpg?t=st=1712775183~exp=1712778783~hmac=024a1f8148267bac466cc66acb83b1894a485d24263bada24acce513e747a525&w=740"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorNTime}>
              <strong>Blue Sargent</strong>
              <time
                title="11 de Abril de 2024 às 09:36h"
                dateTime="2024-04-11 09:36:23"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} className={styles.applause}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
