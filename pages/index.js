import Title from './components/Title'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function Home({props}) {
  const router = useRouter()
  const {query:{v,t}} = router;
  return (
    <div className={styles.container}>
        <h1>v={v} t={t}</h1>
        <Title 
          backgroundColor="#03c8ff"
          version={1}
        />
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(req) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  console.log(req.headers);

  // Pass data to the page via props
  return { props: { } }
}

export default Home;