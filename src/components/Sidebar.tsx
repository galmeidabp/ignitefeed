import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://img.freepik.com/fotos-gratis/textura-de-folha-verde-fundo-de-textura-de-folha_501050-120.jpg?t=st=1712774926~exp=1712778526~hmac=41820b8971c6f9a580593a3718335801a64d99de55e344b372fe0d9d5c0d9023&w=996"
      />
      <div className={styles.profile}>
        <Avatar src="https://img.freepik.com/fotos-gratis/garota-e-apanhador-de-sonhos_1321-1596.jpg?t=st=1712775183~exp=1712778783~hmac=024a1f8148267bac466cc66acb83b1894a485d24263bada24acce513e747a525&w=740" />
        <strong>Blue Sargent</strong>
        <span>Designer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
