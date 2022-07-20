import { useRouter } from 'next/router'
import { ScrollView } from 'react-native-web'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "rgb(255,57,159)",
            background: "linear-gradient(180deg, rgba(255,57,159,1) 0%, rgba(238,0,122,1) 35%, rgba(117,0,60,1) 100%)",
            minHeight: "100vh"
        }}>
            <h2>This is Tamer</h2>
        </ScrollView>
  )
}   

export default Post