import { useRouter } from 'next/router'
import { ScrollView } from 'react-native-web'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "rgb(255,57,159)",
            background: "linear-gradient(360deg, rgba(227,0,101,1) 0%, rgba(238,0,122,0.7931547619047619) 49%, rgba(238,0,122,0.8491771708683473) 50%, rgba(227,0,101,0.7343312324929971) 100%)",
            minHeight: "100vh"
        }}>
            <h2>This is Tamer</h2>
        </ScrollView>
  )
}   

export default Post