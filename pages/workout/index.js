import { Button, Text, View } from "react-native-web";
import { ReactSVG } from "react-svg";

const index = () => {
  return (
    <main>
      <div class="muscle-groups">
        <View style={{display: "flex",  alignItems: "center", marginVertical: 50}}>
          <Text style={{fontSize: 22, fontWeight: 600}}>Select A Muscle To Train</Text>
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
        <View style={{alignItems: "center", marginVertical: 20}}>
          <Text>OR</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Button color="#e0457c" title="Full body workout" />
        </View>
        </div>
      
      </div>
    </main>
  );
};
export default index;
