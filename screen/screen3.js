import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';

export default function App() {
    var nav = useNavigation();
    return (
    <View style={{flex:1,alignItems:'center'}}>
        <View style={{alignItems:'center',flexDirection:'row',width:390,height:60}}>
            <Image source={require('../assets/avata.png')} style={{marginLeft:35,marginRight:10,width:50,height:50,borderRadius:100,backgroundColor:'#DA70D6'}}/>
            <View style={{width:160,height:60,marginRight:60}}>
                <Text style={{marginLeft:15, color: '#171A1F', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', lineHeight: 30, wordWrap: 'break-word'}}>Hi Twinkle</Text>
                <Text style={{opacity: 0.75, textAlign: 'center', color: 'gray', fontSize: 14, fontFamily: 'Arial', fontWeight: '700', lineHeight: 22, wordWrap: 'break-word'}}>Have agrate day a head</Text>
            </View>
            <Pressable style={{marginLeft:20}} onPress={()=>nav.navigate("Screen2")}>
                <Image source={require('../assets/back.png')} style={{width:22,height:22}} />
            </Pressable>
        </View>
        <Text style={{marginTop:50,width:228,height:48,textAlign: 'center', color: '#171A1F', fontSize: 29, fontFamily: 'Arial', fontWeight: '700', lineHeight: 48}}>ADD YOUR JOB</Text>
        <View style={{marginTop:30,flexDirection:'row',width:334,height:44,border: '1px #9095A0 solid',borderRadius:5,alignItems:'center'}}>
            <Image source={require('../assets/job.png')} style={{width:25,height:25,resizeMode:'contain',marginLeft:10}}/>
            <TextInput style={{marginLeft:10,height:44,fontFamily:'Arial',color:'#171A1F'}} placeholder='input your job'></TextInput>
        </View>
        <Pressable style={{marginTop:63}} onPress={()=>nav.navigate("Screen2")}>
            <Text style={{textAlign:'center',paddingTop:11,color:'white',width:190,height:44,backgroundColor:'#00BDD6',borderRadius:20}}>
                FINISH {`->`}
            </Text>
        </Pressable>
        <Image source={require('../assets/Theme.png')} style={{marginTop:80,width:190,height:170,resizeMode:'contain'}}/>
    </View>
  );
}
