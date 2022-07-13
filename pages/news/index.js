import { View, Text, SafeAreaView, FlatList } from "react-native-web";
import YouTube from "react-youtube";

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
    title: "English",
  },
  {
    id: 2,
    title: "Hindi",
  },
  {
    id: 3,
    title: "Malayalam",
  },
  {
    id: 3,
    title: "Malayalam",
  },
  {
    id: 3,
    title: "Malayalam",
  },
];

const index = () => {
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
                  <Text
                    style={{
                      padding: "15px",
                    }}
                  >
                    {item.title}
                  </Text>
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
                  />
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
