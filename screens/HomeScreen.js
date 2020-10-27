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
    KeyboardAvoidingView
} from 'react-native';
import { Header, Input, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

//Initialising class and then exporting it
export default class HomeScreen extends Component {

    //Initialising Constructor and giving state
    constructor(){
        super()
        this.state = {

        }
    }

    //Render function
    render(){

        //return statement
        return(
            <View style = {styles.container}>
                <Header
                    backgroundColor='black'
                    centerComponent={{
                        text: 'Application Name',
                        style: styles.appHeader,
                    }}
                    leftComponent = {
                        <Icon name = 'bars' type = 'font-awesome' color = 'white' onPress = {()=>{
                            this.props.navigation.toggleDrawer()}}
                        >
                        </Icon>
                    }
                ></Header>
                <Text style = {styles.subtitle}>What's on your mind?</Text>
                <View style = {styles.flexContainer}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Find Recipes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {[styles.button,{marginLeft:20}]}
                        onPress = {()=>{
                            this.props.navigation.navigate('AddRecipe')
                        }}
                    >
                        <Text style = {styles.buttonText}>Add Recipes</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.flexContainer}>
                <Text 
                    style = {styles.buttonSubtitle}
                >
                    Having only a few ingridients and don't know to make out of them? Don't worry we, got you! Surf through our delicacies! Other features too!
                </Text>
                <Text 
                    style = {[styles.buttonSubtitle,{marginLeft:15}]}
                >
                    Having a family recipe in your mind which you want to share to the world? Add your recipe to our database! Other features too!</Text>
                </View>
                <Text style = {[styles.subtitle,{marginTop:25}]}>Or, check out our newest recipes!</Text>
                <Text style = {{color:'red', alignItems:'center',textAlign:'center'}}>Currently under construction!</Text>
            </View>
        )
    }

}

//Creating Styles for the render function
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'black',
        alignSelf : 'center',
        width:'100%'
    },
    subtitle : {
        textAlign:'center',
        fontSize:16,
        padding:15,
        color:'white'
    },
    textInput:{
        marginTop:30,
        padding:10,
        alignSelf:'center',
        backgroundColor:'#656565',
        width:300,
        height:70,
        color:"white",
    },
    signupButtonLabel : {
        color:'white',
        textAlign:'center',
        marginTop:10,
    },
    button : {
        backgroundColor:'#363636',
        width:150,
        borderRadius:15,
        borderWidth:5,
        marginTop:0,
        alignSelf:'center',
        height:50,
    },
    buttonText : {
        padding:10,
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        textAlignVertical:'center',
    },
    appHeader : {
        fontSize:18,
        color:'white',
        textAlign:'center',
        alignContent:'center',
        fontFamily:'tomatoes',
    },
    flexContainer : {
        flexDirection:'row', 
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    buttonSubtitle : {
        width:155,
        color:'white',
        fontSize:12,
        textAlign:'center',
        alignSelf:'center',
    }
})