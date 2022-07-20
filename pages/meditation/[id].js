import { useRouter } from "next/router";
import { ScrollView, View, Image, Text } from "react-native-web";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const sounds = require("./sounds");

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedSound, setSelectedSound] = useState({});

  useEffect(() => {
    setSelectedSound(sounds.filter((item) => item.id == id));
  }, []);
  console.log(selectedSound);
  return (
    <ScrollView
      style={{
        background: "#0C2340",
        background: "#0C2340",
        minHeight: "100vh",
      }}
    >
      <View style={{marginVertical: 20}}>
        <Text style={{color: "white", textAlign: "center", fontSize: 16, fontWeight: 600}}>{selectedSound[0]?.cat}</Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View style={{}}>
          <Player
            autoplay
            loop
            speed={0.2}
            src={"https://assets3.lottiefiles.com/packages/lf20_gqhy4rmx.json"}
            style={{
              height: "300px",
              width: "300px",
              marginRight: 5,
            }}
          ></Player>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/audio/2022/05/27/23-51-43-941_200x200.jpg",
            }}
            style={{
              width: 150,
              height: 150,
              position: "absolute",
              top: 75,
              left: 77,
              borderRadius: 100,
            }}
          />
        </View> 
        <View>
          <MdOutlinePlayCircleFilled
            size={70}
            style={{ color: "white", marginTop: "70%" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Post;
