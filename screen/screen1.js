import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
    const nav = useNavigation();
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <Image source={require('../assets/Theme.png')} style={{marginTop:42,width:271,height:271}} />
            <Text style={{marginTop:42,width:390,height:72,textAlign: 'center', color: '#8353E2', fontSize: 24, fontFamily: 'Arial', fontWeight: '700', lineHeight: 36, wordWrap: 'break-word'}} >
                MANAGE YOUR<br/>TASK</Text>
            <View style={{alignItems:'center',marginTop:60,flexDirection:'row',width:344,height:43,borderRadius: 12, border: '1px #9095A0 solid'}}>
                <Image source={require('../assets/email.png')} style={{marginLeft:15,width:20,height:20,resizeMode:'contain'}} />
                <TextInput style={{color:'#BCC1CA', marginLeft:10,width:124,height:20}} placeholder='Enter Your Email' />
            </View>
            <Pressable style={{marginTop:80}} onPress={()=>nav.navigate("Screen2")}>
                <Text style={{color: 'white', fontSize: 16, fontFamily: 'Arial', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word',width:190,height:44,textAlign:'center',paddingTop:11,backgroundColor:'cyan',borderRadius:12}}>
                    GET STARTED -{`>`}
                </Text>
            </Pressable>
        </View>
    );
}
