import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native-web";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactPlayer from "react-player/youtube";

const DATA = [
  {
    id: 1,
    name: "Russia Ukraine War Live | Putin vs Zelenskyy",
    desc: "News18 India is one of the leading YouTube News channels which delivers Indian and international news 24x7 in Hindi. News18 India is the country's most trusted news platform where you can find not only breaking news and news headlines but also exclusive interviews, series, mythological stories and factual stories.",
    channel: "News 18 India",
    channelLogo:
      "https://i.ytimg.com/vi/TdAKeFVFkOU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5Z1Ik2Q6QDuP1Oy087gxjGOGFUg",
    channelCat: "World",
    channelStream: "https://youtu.be/7ZgNi7071v0",
    logo: "https://yt3.ggpht.com/ytc/AKedOLR1QH1G7auCqp5BMAuj8t1iXcE10aFKyO2MwLm_Bg=s48-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    name: "DW News livestream | Headline news from around the world",
    desc: "DW News goes deep beneath the surface, providing the key stories from Europe and around the world. Exciting reports and interviews from the worlds of politics, business, sports, culture and social media are presented by our DW anchors in 15-, 30- and 60-minute shows. Correspondents on the ground and experts in the studio deliver detailed insights and analysis of issues that affect our viewers around the world. We combine our expertise on Germany and Europe with a special interest in Africa and Asia while keeping track of stories from the rest of the world. Informative, entertaining and up-to-date – DW News, connecting the dots for our viewers across the globe.",
    channel: "DW News",
    channelLogo:
      "https://i.ytimg.com/vi/GE_SfNVNyqk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZ06CWmvzuGxVvll7j4PQgN1gK_Q",
    channelCat: "World",
    channelStream: "https://youtu.be/GE_SfNVNyqk",
    logo: "https://yt3.ggpht.com/ytc/AKedOLToHygnzerTBVOB3GsUcxsPiMP6dIOzFe9T90R0fAE=s48-c-k-c0x00ffffff-no-rj"

  },
  {
    id: 3,
    name: "🔴 Al Jazeera English | Live from around the world",
    desc: "@Al Jazeera English,  we focus on people and events that affect people's lives. We bring topics to light that often go under-reported, listening to all sides of the story and giving a 'voice to the voiceless'.",
    channel: "Al Jazeera English",
    channelLogo:
      "https://i.ytimg.com/vi/F-POY4Q0QSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1ruLttw9AyMsbNMGFg_vaKEUzBQ",
    channelCat: "World",
    channelStream: "https://youtu.be/F-POY4Q0QSI",
    logo: "https://yt3.ggpht.com/ytc/AKedOLSWUC1XEN9_RtfZ6mUX_oN3jo1UuB-KU3tweyxPLb4=s48-c-k-c0x00ffffff-no-rj"

  },
  {
    id: 4,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo:
      "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "India",
    channelStream: "https://youtu.be/doqBgKIBBh8",
    logo: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"

  },
  {
    id: 5,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo:
      "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "India",
    channelStream: "https://youtu.be/doqBgKIBBh8",
    logo: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"

  },
  {
    id: 6,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo:
      "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "World",
    channelStream: "https://youtu.be/doqBgKIBBh8",
    logo: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"

  },
  {
    id: 7,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo:
      "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Sport",
    channelStream: "https://youtu.be/doqBgKIBBh8",
    logo: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"

  },

  {
    id: 8,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo:
      "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Sport",
    channelStream: "https://youtu.be/doqBgKIBBh8",
    logo: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"

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
    id: 4,
    title: "Sport",
    icon: "https://assets4.lottiefiles.com/packages/lf20_lz5rbiit.json",
  },
  {
    id: 5,
    title: "India",
    icon: "",
  },
];

const index = () => {
  const [initData, setInitData] = useState(DATA);
  const [filtredData, setFiltredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedViedo, setSelectedVideo] = useState({})


  const handelFilter = (item) => {
    setSelectedFilter(item);
    if (item == "All") {
      setFiltredData([]);
    } else {
      let newData = initData.filter((news) => news.channelCat == item);
      setFiltredData(newData);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video)
  }
  const handleClose = () => {
    setSelectedVideo({})
  }

  return (
    <View
      style={{
        background: "#e2e6e9",
        minHeight: "100vh",
      }}
    >
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
                onClick={() => handelFilter(item.title)}
                key={item.id}
              >
                <View
                  style={[
                    selectedFilter == item.title
                      ? {
                          background: "blue",

                          borderRadius: 20,
                        }
                      : {
                          background: "#cbd5e0",

                          borderRadius: 20,
                        },
                  ]}
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
                    <View
                      style={[
                        selectedFilter == item.title
                          ? { color: "white" }
                          : { color: "black" },
                      ]}
                    >
                      {item.title}
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <FlatList
            data={filtredData.length > 0 ? filtredData : initData}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  marginVertical: 10,
                  width: 300,
                }}
                key={item.id}
                onClick={() => handleVideoSelect(item)}
              >
                <View
                  style={{
                    background: "white",
                    marginRight: 20,
                    borderRadius: 15,
                    padding: 5,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 15,
                    }}
                    source={{
                      uri: item.channelLogo,
                    }}
                  />
                  <View
                    style={{
                      padding: 10,
                    }}
                  >
                    <View
                      style={{
                        marginVertical: 10,
                      }}
                    >
                      <Text style={{ color: "gray", fontWeight: 600 }}>
                        {item.channelCat}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "#000000c9",
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <View>
                        <Image
                          source={{
                            uri: item.logo,
                          }}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          marginHorizontal: 10,
                        }}
                      >
                        <Text style={{ fontWeight: 600 }}>{item.channel}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 600 }}>
            Recommendation
          </Text>
          <View style={{ marginLeft: 10, padding: 5 }}>
            <ScrollView>
              <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginVertical: 10,
                      width: "100%",
                      maxWidth: "100%",
                    }}
                    key={item.id}
                  >
                    <View
                      style={{
                        background: "white",
                        marginRight: 20,
                        borderRadius: 15,
                        padding: 5,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{
                          width: "40%",
                          height: 100,
                          borderRadius: 15,
                        }}
                        source={{
                          uri: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
                        }}
                      />
                      <View
                        style={{
                          padding: 10,
                          maxWidth: "60%",
                        }}
                      >
                        <View
                          style={{
                            marginVertical: 10,
                          }}
                        >
                          <Text style={{ color: "gray", fontWeight: 600 }}>
                            {item.channelCat}
                          </Text>
                        </View>
                        <View
                          style={{
                            maxWidth: "100%",
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: "#000000c9",
                            }}
                          >
                            How the Warriors will quickly become on NBA..
                          </Text>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "row",
                          }}
                        ></View>
                      </View>
                    </View>
                  </View>
                )}
              />
            </ScrollView>
          </View>
          {selectedViedo && selectedViedo.channelStream &&  (
 <View
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              background: "#000000e0",
              height: "100%",
              scrollY: "none"
            }}
          >
            <ReactPlayer width={"100%"} url={selectedViedo.channelStream} playing />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <View style={{margin: 10}}>
                <View>
                  <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>Channel Title</Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={{ color: "white", fontSize: 14 }}>Channel description</Text>
                </View>
              </View>
              <View style={{position: "relative", top: "90%", alignItems: "center"}}>
               <TouchableOpacity style={{background: "white", textAlign: "center", width: "80%", borderRadius: 20}} onPress={handleClose}>
                Close
               </TouchableOpacity>
              </View>
            </View>
          </View>
          )}
          
        </View>
      </SafeAreaView>
    </View>
  );
};

export default index;
