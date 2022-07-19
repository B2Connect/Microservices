import { Player } from "@lottiefiles/react-lottie-player";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
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
const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ fontSize: 28, fontWeight: 600 }}>
              Good
              <br />
              Morning
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <View style={{marginBottom: 15, paddingLeft: 5}}>
              <Text>Have a greate day!</Text>
            </View>
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
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Explor Mods</Text>

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
                    <Text  key={item.id} style={{paddingRight: 30, color: "gray"}}>{item.name}</Text>
                  )}
                />
             
              </View>

              <View>
                <FlatList
                  data={Mods}
                  horizontal
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                   <View style={{marginRight: 20}}>
                    <Image
                    source={{
                        uri: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg"
                    }}
                    style={{
                        width: 180,
                        height: 200
                    }}
                    />
                    </View>
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
