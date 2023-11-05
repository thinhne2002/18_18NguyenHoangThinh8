import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { useEffect, useState } from 'react';

var data = [];
var url= "https://65462ad3fe036a2fa955498e.mockapi.io/DATAJOB";

export default function App() {
    var [data,setData] = useState([]);
    var nav = useNavigation();
    
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => {
            data = json,
            setData(data)
        });
    }, []);
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',width:390,height:60}}>
                <Pressable style={{marginLeft:20}} onPress={()=>nav.navigate("Screen1")}>
                    <Image source={require('../assets/back.png')} style={{width:22,height:22}} />
                </Pressable>
                <Image source={require('../assets/avata.png')} style={{marginLeft:110,marginRight:10,width:50,height:50,borderRadius:100,backgroundColor:'#DA70D6'}}/>
                <View style={{width:160,height:60,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign: 'center', color: '#171A1F', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', lineHeight: 30, wordWrap: 'break-word'}}>Hi Twinkle</Text>
                    <Text style={{opacity: 0.75, textAlign: 'center', color: 'gray', fontSize: 14, fontFamily: 'Arial', fontWeight: '700', lineHeight: 22, wordWrap: 'break-word'}}>Have agrate day a head</Text>
                </View>
            </View>
            <View style={{marginBottom:50,marginTop:30,width:335,height:50,alignItems:'center',flexDirection:'row',border: '1px #9095A0 solid',borderRadius:10}}>
                <Image source={require('../assets/search.png')} style={{marginRight:10,marginLeft:12,width:26,height:26,resizeMode:'contain'}}/>
                <TextInput style={{height:50,fontSize:17}} placeholder='Search'></TextInput>
            </View>
            {data.map((item)=>{
                return(
                    <View style={{width:330,height:50,marginBottom:17,flexDirection: "row",alignItems:'center',borderRadius: 30,
                    backgroundColor: '#DCDCDC'}} key={item.id}>
                        <Image source={require('../assets/tick.png')} style={{marginLeft:20,width:24,height:24,resizeMode:'contain'}} />
                        <Text style={{width:150,height:24,marginLeft:10,marginRight:80,color: '#171A1F', fontSize: 14, fontFamily: 'Arial', fontWeight: '700', lineHeight: 26, wordWrap: 'break-word'}}>{item.job}</Text>
                        <Image source={require('../assets/edit.png')} style={{width:24,height:24,resizeMode:'contain'}} />
                    </View>
                );
            })}
            <Pressable onPress={()=>nav.navigate("Screen3")}>
                <Image source={require('../assets/plus.png')} style={{backgroundColor:'cyan',width:70,height:70,borderRadius:100}}/>
            </Pressable>
        </View>
    );
}
