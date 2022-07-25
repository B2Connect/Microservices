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
        console.log(exGroup)

    return (
        <SafeAreaView>
            <View>
                <View >
                  {exGroup.length > 0 ? exGroup?.map(item => (
                    <View key={item.id}>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: "#e0457c", fontWeight: 600}}>{item.title}</Text>
                            </View>
                            <View style={{marginLeft: 10, paddingTop: 7}}>
                                <Text><span style={{color: "#000", fontWeight: 600}}>Difficulty:</span> {item.difficulty}</Text>
                            </View>

                            <View style={{display: "flex", flexDirection: "row"}}>
                                {item?.gif?.map(item => (
                                    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                                          <Image 
                                    source={{
                                        uri: item
                                    }}
                                    style={{width: 300, height: 300}}
                                    />
                                        </View>
                                  
                                ))}
                            </View>

                            <View>
                                {item?.instructions?.map(item => (
                                    <ol type="1">
                                    <li>{item}</li>
                                   
                                  </ol>  
                                  
                                ))}
                            </View>

                        </View>
                  )) : null}
                </View>
            </View>
        </SafeAreaView>
    )
}


export default workout;