import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
const sounds = require('./sounds')
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native-web";

const Mods = [
  {
    id: 1,
    name: "Recommendation",
  },
  {
    id: 2,
    name: "Calm",
  },
  {
    id: 3,
    name: "Sleepy",
  },
  {
    id: 4,
    name: "Music",
  },
];
const Sounds = [
  {
    id: 1,
    name: "medetation sound",
    image: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
    type: "Morning"
  },
  {
    id: 2,
    name: "medetation sound",
    image: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
    type: "Morning"
  },
  {
    id: 3,
    name: "medetation sound",
    image: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
    type: "Morning"
  },
  {
    id: 4,
    name: "medetation sound",
    image: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
    type: "Morning"
  },
]
const index = () => {
    const [selectedMod, setSelectedMod] = useState("Recommendation");
    const router = useRouter()
    const [greeting, setGreeting] = useState("");

    const handleSelectMod = (Mod) => {
      setSelectedMod(Mod)
    // console.log(Mod)
      
    }
    useEffect(() => {
      var today = new Date()
      var curHr = today.getHours()
    
      if (curHr < 12) {
        setGreeting('Morning')
      } else if (curHr < 18) {
        setGreeting('Afternoon')
      } else {
        setGreeting('Evening')
      }
    }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: 600, color: "#000000c4" }}>
              Good 
              <br />
            {greeting}
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
           
            <View>
              <View
                style={{
                  background: "pink",
                  minHeight: 100,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 15,
                }}
              >
                <View>
                  <View style={{ paddingLeft: 20 }}>
                    <View>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        Recommended{" "}
                      </Text>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        Morning PlayList{" "}
                      </Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                      <Text
                        style={{
                          color: "white",

                          fontWeight: 600,
                        }}
                      >
                        25 Mins
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ marginLeft: "auto" }}>
                  <Player
                    autoplay
                    loop
                    src={
                      "https://assets9.lottiefiles.com/packages/lf20_g2fmvbaf.json"
                    }
                    style={{
                      height: "200px",
                      width: "200px",
                      marginRight: 5,
                    }}
                  ></Player>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Explore Moods</Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 15
                }}
              >
                <FlatList
                  data={Mods}
                  horizontal
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity  key={item.id} style={[selectedMod == item.name ? {paddingRight: 30, color: "black", fontSize: 14} : {paddingRight: 30, color: "gray", fontSize: 14}]} onPress={() => handleSelectMod(item.name)}>{item.name}</TouchableOpacity>
                  )}
                />  
             
              </View>

              <View>
                <FlatList
                  data={sounds}
                  horizontal
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                   <TouchableOpacity style={{marginRight: 20}} onPress={() => router.push(`/meditation/${item.id}`)}>
                    <Image
                    source={{
                        uri: item.image
                    }}
                    style={{
                        width: 180,
                        height: 200
                    }}
                    />
                    </TouchableOpacity>
                  )}
                />    
                </View>
          </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
