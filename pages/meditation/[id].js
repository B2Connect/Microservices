import { useRouter } from 'next/router'
import { ScrollView } from 'react-native-web'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "#0C2340",
            background: "#0C2340",
            minHeight: "100vh"
        }}>
            <h2>This is Tamer</h2>
        </ScrollView>
  )
}   

export default Post