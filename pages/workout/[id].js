import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native-web";
const workoutsJson = require("./workouts.json");

const workout = () => {

    const router = useRouter();

    const { id } = router.query;
    const [exGroup, setExGroup] = useState([])
    useEffect(() => {
        async function getData() {
           if(id && workoutsJson) {
            const res = workoutsJson.filter((item) => {
                return item.idenfire === id
            })
            setExGroup(res)
           }
        }
    
        getData()
    }, [id])
    
    
      
      

    return (
        <SafeAreaView>
            <View>
                <View style={{marginTop: 40}}>
                  {exGroup.length > 0 ? exGroup?.map(item => (
                    <View key={item.id} >
                            <View style={{marginLeft: 20}}>
                                <Text style={{color: "#e0457c", fontWeight: 600, fontSize: 22}}>{item.title}</Text>
                            </View>
                            <View style={{marginLeft: 20, paddingTop: 7, marginBottom: 10}}>
                                <Text style={{fontSize: 18}}><span style={{color: "#000", fontWeight: 600, fontSize: 18}}>Difficulty:</span> {item.difficulty}</Text>
                            </View>

                            <View style={{display: "flex", flexDirection: "row"}}>
                                {item?.gif?.map(item => (
                                    <View style={{paddingHorizontal: 20, }}>
                                          <Image 
                                    source={{
                                        uri: item
                                    }}
                                    style={{width: 300, height: 300, borderRadius: 20}}
                                    />
                                        </View>
                                  
                                ))}
                            </View>

                            <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
                               
                                    <ol type="1" style={{padding: 5, width: "150vw"}}>
                                    {item?.instructions?.map(item => (
                                    <li style={{background: "#ececec", margin: "10px 0", borderRadius: 20, padding: "5px 10px"}}>{item}</li>
                                    ))}
                                  </ol>  
                                  
                               
                            </View>

                        </View>
                  )) : null}
                </View>
            </View>
        </SafeAreaView>
    )
}


export default workout;