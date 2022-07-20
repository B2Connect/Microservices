import { useRouter } from 'next/router'
import { ScrollView } from 'react-native-web'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "rgb(255,57,159)",
            background: "linear-gradient(352deg, rgba(227,0,101,1) 0%, rgba(228,0,102,0.7399334733893557) 51%, rgba(227,0,101,0.711922268907563) 100%)",
            minHeight: "100vh"
        }}>
            <h2>This is Tamer</h2>
        </ScrollView>
  )
}   

export default Post