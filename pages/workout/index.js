import Link from "next/link";
import { Button, Text, View } from "react-native-web";
import { ReactSVG } from "react-svg";
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()

  const handleMuscle = (e) => {
    if(e.target.id.includes("Pectorals")) {
      router.push('/workout/chest')
    }  
    if(e.target.id.includes("Abs")) {
      router.push('/workout/abs')
    } 
    if(e.target.id.includes("Obliques")) {
      router.push('/workout/abs')
    } 
    if(e.target.id.includes("Biceps")) {
      router.push('/workout/biceps')
    } 
    if(e.target.id.includes("Deltoids")) {
      router.push('/workout/deltoids')
    }   
    if(e.target.id.includes("Quads")) {
      router.push('/workout/quads')
    }   
   
    console.log(e.target.id)
  }
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
            handleMuscle(e)
          }}
        />
        <View style={{alignItems: "center", marginVertical: 20}}>
          <Text>OR</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Button color="#e0457c" title="Full body workout" />
          <Link href={"/workout/dips"} >Test</Link>
        </View>
        </div>
      
      </div>
    </main>
  );
};
export default index;
