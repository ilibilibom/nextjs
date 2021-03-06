import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

function Blog({is_abtest}) {
  // GET param in the URL - page has isAbtest=true and testVairant=123
  // blog page gets ACF repeater
  // list of fields returns from getStaticProps
  // for each component:
    // if component variantId === testVairant ? 
      // display test component
    // else
    // if component variantId !== testVairant ?
      //  

  const router = useRouter()
  const DynamicComponent = dynamic(() => {
    const {query:{version}} = router;
    if(version=='2'){
      return import('../components/version2')
      }
      else {
        return import('../components/version1')
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

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
        { params: { id: '1' } },
        { params: { id: '2' } }
      ], fallback: false}
}

export default Blog