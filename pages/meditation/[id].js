import { useRouter } from 'next/router'
import { ScrollView, View } from 'react-native-web'
import { Player } from "@lottiefiles/react-lottie-player";

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
        <ScrollView style={{
            background: "#0C2340",
            background: "#0C2340",
            minHeight: "100vh",
        }}>
            <h2>This is Tamer</h2>
            <View style={{
                display: "flex",
                flexDirection: "center",
                alignItems:"center"

            }}>
                 <Player
                    autoplay    
                    loop
                    src={
                      "https://assets3.lottiefiles.com/packages/lf20_72GGiU.json"
                    }
                    style={{
                      height: "200px",
                      width: "200px",
                      marginRight: 5,
                    }}
                  ></Player>
            </View>
           
        </ScrollView>
  )
}   

export default Post