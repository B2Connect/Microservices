import { Text, View } from "react-native-web";
import { ReactSVG } from "react-svg";

const index = () => {
  return (
    <main>
      <div class="muscle-groups">
        <View style={{display: "flex",  alignItems: "center", marginVertical: 30}}>
          <Text style={{fontSize: 22, fontWeight: 600}}>Select a muscle to train</Text>
        </View>
        <div style={{
          alignSelf: "center"
        }}>
  <ReactSVG
          src={"/images/body.svg"}
          onClick={(e) => {
            console.log("wrapper onClick", e.target.id);
          }}
        />
        </div>
      
      </div>
    </main>
  );
};
export default index;
