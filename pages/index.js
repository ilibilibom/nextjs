import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

function Home({is_abtest}) {
  const router = useRouter()
  // get initial props - graphql
  // check if component props have the is_abtest=true
  // check the headers to see if request has abtest_variant cookie
  // if both are true load component 
  // else don't load
  // console.log('is_abtest',is_abtest);
  const DynamicComponent = dynamic(() => {
    const {query:{version}} = router;
    if(version===1){
      return import('./components/version1')
      }
      else {
        return import('./components/version2')
      }
    }
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

// This function gets called at build time
// export async function getStaticPaths() {
//   return {paths: [
//     { params: { id: '1' } },
//     { params: { id: '2' } }
//   ], fallback: false}
// }

export default Home