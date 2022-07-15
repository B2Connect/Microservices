import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native-web";
import YouTube from "react-youtube";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const DATA = [
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },
  {
    id: 1,
    name: "title",
    desc: "desc",
  },

  {
    id: 1,
    name: "title",
    desc: "desc",
  },
];
const FilterData = [
  {
    id: 1,
    title: "All",
    icon: "",
  },
  {
    id: 2,
    title: "World",
    icon: "https://assets8.lottiefiles.com/packages/lf20_B6txqj.json",
  },
  {
    id: 3,
    title: "Tech",
    icon: "https://assets8.lottiefiles.com/private_files/lf30_wo5lnbyz.json",
  },
  {
    id: 3,
    title: "Sport",
    icon: "https://assets4.lottiefiles.com/packages/lf20_lz5rbiit.json",
  },
  {
    id: 3,
    title: "India",
    icon: "",
  },
];

const index = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <View>
      <SafeAreaView>
        <View>
          <FlatList
            data={FilterData}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    background: "#cbd5e0",

                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      paddingVertical: "10px",
                      paddingHorizontal: "20px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon && (
                      <Player
                        autoplay
                        loop
                        src={item.icon}
                        style={{
                          height: "25px",
                          width: "25px",
                          marginRight: 5,
                        }}
                      ></Player>
                    )}

                    {item.title}
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <FlatList
            data={DATA}
            vertical
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  marginVertical: 10,
                }}
              >
                <View>
                  <YouTube
                    opts={{
                      width: "100%",
                    }}
                    videoId={"HdscSv53dGI"}
                    onPlay={() => {
                      if (!videoPlaying) {
                        setVideoPlaying(true);
                      }
                    }}
                    onPause={() => {
                      setVideoPlaying(false);
                    }}
                    onEnd={() => {
                      setVideoPlaying(false);
                    }}
                  />
                  <View>
                    <Text>Video Title</Text>
                    <Text>Video subtitle</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default index;
