import { useRouter } from 'next/router'
import { ScrollView, View } from 'react-native-web'
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from 'react';
const sounds = require('./sounds')

const Post = () => {
  const router = useRouter()
  const { id } = router.query;
  
  const [selectedSound, setSelectedSound] = useState({});


  useEffect(() => {
    setSelectedSound( sounds.filter((item) => item.id == id));
  }, []);
  console.log(selectedSound)
  return (
        <ScrollView style={{
            background: "#0C2340",
            background: "#0C2340",
            minHeight: "100vh",
        }}>
            <h2>This is Tamer</h2>
            <View style={{
               
              
                alignItems:"center",
              
            }}>
                 <Player
                    autoplay    
                    loop
                    speed={0.1}
                    src={
                      "https://assets3.lottiefiles.com/packages/lf20_72GGiU.json"
                    }
                    style={{
                      height: "300px",
                      width: "300px",
                      marginRight: 5,
                    }}
                  ></Player>
            </View>
           
        </ScrollView>
  )
}   

export default Post