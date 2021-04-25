import Title from './components/Title'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function Home({props}) {
  const router = useRouter()
  const {query:{v}} = router;
  const backgroundColor = v === '1' ? "#03c8ff" : "#ffdf59";
  return (
    <div className={styles.container}>
        <Title 
          backgroundColor={backgroundColor}
          version={v}
        />
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(req) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { } }
}

export default Home;