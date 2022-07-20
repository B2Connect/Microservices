import { useRouter } from "next/router";
import { ScrollView, View, Image, Text } from "react-native-web";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import { MdOutlinePlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
const sounds = require("./sounds");
import ReactAudioPlayer from 'react-audio-player';






const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const playerRef = useRef();

  const [selectedSound, setSelectedSound] = useState({});
  const [audio, setAudio] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setSelectedSound(sounds.filter((item) => item.id == id));
    setAudio(playerRef.current.audioEl.current)

  }, []);
 
  console.log(audio)
  const trigger = () => playing ? audio?.pause() : audio?.play()
  return (
    <ScrollView
      style={{
        background: "#0C2340",
        background: "#0C2340",
        minHeight: "100vh",
      }}
    >
     
      <View
        style={{
          alignItems: "center",
          paddingTop: 30
        }}
      >
        <View style={{ }}>
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
                {playing ? (
                    <MdPauseCircleFilled 
                    size={90}
                    onClick={trigger}
                    style={{ color: "white", marginTop: "70%" }}
                    />
                ) : (
                    <MdOutlinePlayCircleFilled
                    size={90}
                    onClick={trigger}
                    style={{ color: "white", marginTop: "70%" }}
                  />
                )}
            
       
          
 
         
              

        </View>
      </View>
      <ReactAudioPlayer
  src="https://audio-samples.github.io/samples/mp3/blizzard_tts_unbiased/sample-0/real.mp3"
  ref={playerRef}
  controls
  onPlay={() =>setPlaying(true)}
  onPause={() => setPlaying(false)}
  style={{opacity: 0}}

/>
    </ScrollView>
  );
};

export default Post;
