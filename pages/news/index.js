import { useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, ScrollView } from "react-native-web";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactHLS from 'react-hls';


const DATA = [
  {
    id: 1,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Sport",
    channelM3u: ""
  },
  {
    id: 2,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "World",
    channelM3u: ""
  },
  {
    id: 3,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Tech",
    channelM3u: ""
    
  },
  {
    id: 4,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "India",
    channelM3u: ""
  },
  {
    id: 5,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "India",
    channelM3u: ""
  },
  {
    id: 6,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "World",
    channelM3u: ""
  },
  {
    id: 7,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Sport",
    channelM3u: ""
  },

  {
    id: 8,
    name: "title",
    desc: "desc",
    channel: "Zee News",
    channelLogo: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
    channelCat: "Sport",
    channelM3u: ""
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

  const handelFilter = (item ) => {
    setSelectedFilter(item);
    if(item == "All") {
    setFiltredData([]);
    }else{
      let newData = initData.filter(news => news.channelCat == item);
      setFiltredData(newData);
    }

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
                  style={
                     [selectedFilter == item.title ? {
                    background: "blue",

                    borderRadius: 20,
                  } : {
                    background: "#cbd5e0",

                    borderRadius: 20,
                  }]
                }
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
                      <View style={[selectedFilter == item.title ? {color: "white"} : {color: "black"}]}>{item.title}</View>
                    
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{marginHorizontal: 5}}>
          <FlatList
            data={filtredData.length > 0 ? filtredData :  initData}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  marginVertical: 10,
                  width: 300,
                }}
                key={item.id}
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
                      uri: "https://c.ndtvimg.com/2021-01/q94dao18_coronavirus-vaccine-mumbai-twitter_625x300_16_January_21.jpg",
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
                        How the Warriors will quickly become on NBA..
                      </Text>
                    </View>
                    <View style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row"
                    }}>
                      <View>
                        <Image source={{
                        uri: "https://seeklogo.com/images/Z/zee-entertainment-logo-7A69ADCA65-seeklogo.com.png"
                        
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50
                        }} />

                      </View>
                      <View style={{justifyContent: "center", marginHorizontal: 10}}>
                        <Text style={{fontWeight: 600}}>ZEE NEWS</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        
        <View style={{marginTop: 20}}>
          <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 600}}>Recommendation</Text>
          <View style={{marginLeft: 10, padding: 5}}>
          <ScrollView>

         
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  marginVertical: 10,
                  width: "100%",
                  maxWidth: "100%"
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
                    flexDirection: "row"
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
                      maxWidth: "60%"
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
                    <View style={{
                             maxWidth: "100%"
                    }}>
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
                    <View style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row"
                    }}>
                     
                   
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
     
          </ScrollView>
          </View>
        </View>
                    
    <View>
    
    <ReactHLS
    playesInline

    url="https://live-hls-web-aja.getaj.net/AJA/02.m3u8"
    />
        </View>
      
      </SafeAreaView>
    </View>
  );
};

export default index;
