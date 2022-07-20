import { useRouter } from 'next/router'
import { ScrollView, View, Image } from 'react-native-web'
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
                <View style={{
                    

                }}>
                <Player
                    autoplay    
                    loop
                    speed={0.2}
                    src={
                      "https://assets3.lottiefiles.com/packages/lf20_gqhy4rmx.json"
                    }
                    style={{
                      height: "300px",
                      width: "300px",
                      marginRight: 5,
                    }}
                  ></Player>
                  <Image 
                    source={{
                       uri: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg" 
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        position: "absolute",
                        top: 80,
                        left: 75,
                        borderRadius: 100
                    }}
                  />
                </View>
                 
            </View>
           
        </ScrollView>
  )
}   

export default Post