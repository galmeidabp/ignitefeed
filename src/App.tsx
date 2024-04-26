import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import "./styles.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://img.freepik.com/fotos-gratis/homem-de-tiro-medio-em-caminhada_23-2150343020.jpg?t=st=1712838386~exp=1712841986~hmac=fdde1f4cf7c5cb6c94ec85c553dcc879e066f72dcdbf6db7fb478b17874b2e22&w=996",
      name: "Adam Parrish",
      role: "Web Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://img.freepik.com/fotos-gratis/garota-e-apanhador-de-sonhos_1321-1596.jpg?t=st=1712775183~exp=1712778783~hmac=024a1f8148267bac466cc66acb83b1894a485d24263bada24acce513e747a525&w=740",
      name: "Blue Sargent",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-10 20:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
