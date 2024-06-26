import Link from "next/link";
import { Button, Text, View } from "react-native-web";
import { ReactSVG } from "react-svg";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const index = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2200)
  }, [])
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
    if(e.target.id.includes("Trapezius")) {
      router.push('/workout/trapezius')
    }
    if(e.target.id.includes("Triceps")) {
      router.push('/workout/triceps')
    } 
    if(e.target.id.includes("Glutes")) {
      router.push('/workout/glutes')
    } 
    if(e.target.id.includes("Lats")) {
      router.push('/workout/lats')
    }
    if(e.target.id.includes("Hamstrings")) {
      router.push('/workout/hamstrings')
    }
    if(e.target.id.includes("Calves")) {
      router.push('/workout/calves')
    }  
    if(e.target.id.includes("Forearms")) {
      router.push('/workout/forearms')
    }
    
    
    
  }
  const handleFullWorkout = () => {
    router.push('/workout/full')
  }
  if(loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={"/images/loader.gif"}
          alt={"loader"}
          style={{
            width: "300px",
          }}
        />
      </div>
    );
  }else{
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
            <Button color="#e0457c" title="Full body workout" onPress={handleFullWorkout} />
  
          </View>
          </div>
        
        </div>
      </main>
    );
  }
 


};
export default index;
