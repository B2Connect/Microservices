import { useRouter } from 'next/router'
import { ScrollView } from 'react-native-web'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "rgb(255,57,159)",
            background: "linear-gradient(180deg, rgba(217,60,84,0.8099614845938375) 0%, rgba(217,60,84,0.9192051820728291) 53%, rgba(217,60,84,1) 100%)",
            minHeight: "100vh"
        }}>
            <h2>This is Tamer</h2>
        </ScrollView>
  )
}   

export default Post