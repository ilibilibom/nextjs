import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

function Home({is_abtest}) {

  // get initial props - graphql
  // check if component props have the is_abtest=true
  // check the headers to see if request has abtest_variant cookie
  // if both are true load component 
  // else don't load
  // console.log('is_abtest',is_abtest);
  const router = useRouter()
  const DynamicComponent = dynamic(() => {
    const {query:{version}} = router;
    if(version==='2'){
      return import('./components/version2')
      }
      else {
        return import('./components/version1')
      }
    },
    { ssr:false }
  )

  return (
    <div>
      <DynamicComponent />
    </div>
  )
}

export const getStaticProps = async() => {
  // const randomBoolean = Math.random() >= 0.5;
  return ({
    props: {
      is_abtest:true
    }
  })
}
export default Home