//Importing Libraries
import React, {Component} from 'react';
import * as firebase from 'firebase';
import db from '../config'
import {
    StyleSheet,
    Text,
    View,
    Modal,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    Animated,
    KeyboardAvoidingView
} from 'react-native';
import { Header, Input, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


//Initialising and Exporting Function
export default class WelcomeScreen extends Component {
    
    //Initialising Constructor with state
    constructor(){
        super()
        this.state = {
            fontLoaded : false,
            setFontLoaded: false,
            headerOpacity: new Animated.Value(0),
            subtitleOpacity : new Animated.Value(0),
            buttonOpacity : new Animated.Value(0),
        }
    } 

    //Creating a function to change the state 'headerOpacity' to 1 in a duration of 2500 ms
    headerLoad = ()=> {
        Animated.timing(this.state.headerOpacity,{
            toValue:1,
            duration:2500,
            useNativeDriver:true,
        }).start()
    }

    //Creating a function to change the state 'subtiteOpacity' to 1 in a duration of 4000 ms
    subtitleLoad = ()=> {
        Animated.timing(this.state.subtitleOpacity,{
            toValue:1,
            duration:4000,
            useNativeDriver:true,
        }).start()
    }

    //Creating a function to change the state 'buttonOpacity' to 125 in a duration of 4000 ms
    textLoad = ()=> {
        Animated.timing(this.state.buttonOpacity,{
            toValue:1,
            duration:7000,
            useNativeDriver:true,
        }).start()
    }

    //Creating a function to help load fonts
    loadFonts = ()=> {
        return Font.loadAsync({
            'tomatoes':require('../assets/fonts/Tomatoes.ttf')
        })
    }

    //Component Did Mount function
    componentDidMount = ()=> {
        this.headerLoad()
        this.subtitleLoad()
        this.textLoad()
    }


    //render function
    render(){

        //Keep loading the app until the fonts aren't loaded
        if(!this.state.fontLoaded){
            return(
                <AppLoading
                    startAsync = {this.loadFonts}
                    onFinish = {()=>{this.setState({
                        fontLoaded:true,
                    })}}
                    onError = {(err)=>{console.error(err)}}
                />
            )
        }

        //Actual return statement
        return(
            <Animated.View style = {styles.container}>
                <Animated.Image
                    source = {{uri:'https://www.nicepng.com/png/full/280-2801282_soup-clipart-black-and-white-soup-clipart-black.png'}}
                    style={{ width: 200, marginTop:35, height: 245, alignSelf: 'center', opacity : this.state.headerOpacity, marginBottom:5 }}
                ></Animated.Image>

                <Animated.Text
                    style = {[styles.header,{opacity:this.state.headerOpacity}]}
                >
                    Application Name
                </Animated.Text>
                <Animated.Text style = {[styles.subtitle,{opacity:this.state.subtitleOpacity}]}>
                    Application Subtitle
                </Animated.Text>
                <Animated.Text
                    style = {[styles.buttonText,{opacity:this.state.buttonOpacity}]}
                    onPress = {()=> {this.props.navigation.navigate('LoginScreen')}}
                >
                    Continue
                </Animated.Text>
            </Animated.View>
        )

    }

}

//Creating styles
const styles = StyleSheet.create({
    
    container : {
        flex:1,
        width:'100%',
        backgroundColor:'black',
        alignSelf:'center',
    },

    header : {
        fontSize:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        color:'white',
        fontFamily:'tomatoes',
        marginTop:20,
    },

    subtitle : {
        fontSize:15,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        color:'white',
    },
    
    buttonText : {
        padding:10,
        color:'white',
        alignSelf:'center',
        textAlignVertical:'center',
        backgroundColor:'#363636',
        marginTop:100,
        width:120,
        textAlign:'center',
        borderRadius:15,
        borderWidth:5,
    }
})