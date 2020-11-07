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
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';
import { Header, Input, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import DropDownPicker from 'react-native-dropdown-picker';

//Creating and exporting class
export default class FindRecipeScreen extends Component {
    
    //Initialising Constructor with State
    constructor(){
        super()
        this.state = {
            cuisine:'',
            dishName : '',
            Ingridients:'',
        }
    }

    //readDatabaseTest = async ()=>{
    //    const a = await db.collection('dishes').onSnapshot((snapshot)=>{
    //        var item = snapshot.docs.map((document)=>{
    //            {return document.data()}
    //        })
    //        console.log(item)
    //    })
    //}
    
    componentDidMount(){
        //this.readDatabaseTest()
    }

    //render function
    render(){

        //return statement
        return(
            <ScrollView style = {styles.container}>
                <ImageBackground
                    source = {require('../assets/background1.png')}
                    style  = {styles.image}
                >
                    <TouchableOpacity
                        onPress = {()=>{
                            this.props.navigation.toggleDrawer()
                        }}
                        style = {{alignSelf:'flex-start', marginTop:30, marginLeft:15,}}
                    >
                        <Icon
                            name = 'bars'
                            type = 'font-awesome'
                            color = 'white'    
                        />
                    </TouchableOpacity>
                    <Text style = {styles.header}>Find Recipes</Text>
                    <Text style = {styles.subtitle}>Welcome to the Find Recipe Section of our App! Have a few ingridients and want to make a new dish with them? Try us! Search Dishes by Cuisines, Ingridients and Name. Also upvote other recipes!</Text>
                    <TextInput
                        style = {[styles.textInput]}
                        multiline = {true}
                        placeholder = "Dish Name, leave blank if you don't want to search by name"
                    ></TextInput>
                    <DropDownPicker
                        items = {[
                            {label:'French', value:'french'},
                            {label:'Italian', value:'italian'},
                            {label:'North Indian', value:'northIndian'},
                            {label:'South Indian', value:'southIndian'},
                            {label:'American', value:'american'},
                            {label:'Chinese', value:'chinese'},
                            {label:'Other', value:'other'},
                            {label:"I don't know", value:'unknown'},
                            {label:"I don't want to search by cuisine", value:''},
                        ]}
                        containerStyle = {styles.dropDown}
                        dropDownMaxHeight={1000}
                        itemStyle = {styles.dropDownItems}
                        style = {{backgroundColor:'#363636'}}
                        dropDownStyle={{backgroundColor:'#363636'}}
                        labelStyle = {{color:'white'}}
                        arrowColor='white'
                        placeholder = "Cuisine, leave blank if you don't want to search by cuisine."
                    ></DropDownPicker>
                    <TextInput
                        style = {[styles.textInput]}
                        multiline = {true}
                        placeholder = "Ingridients, leave blank if you don't want to search by ingridients"
                    ></TextInput>
                    <TouchableOpacity
                        style = {styles.button}
                    >
                        <Text style = {styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        )
    }
}

//Creating Styles
const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    image : {
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
        width:'100%'
    },
    header: {
        fontSize:80,
        color:'white',
        alignSelf:'flex-start',
        justifyContent:'flex-start',
        marginLeft:10,
        marginTop:15,
    },
    subtitle : {
        color:'white',
        fontSize:18,
        marginLeft:5,
        marginBottom:25,
    },
    textInput:{
        padding:10,
        marginTop:30,
        alignSelf:'center',
        backgroundColor:'#363636',
        width:350,
        height:100,
        color:"white",
        borderWidth:0.5,
        borderRadius:5,
        borderColor:'white'
    },
    button : {
        backgroundColor:'#363636',
        width:150,
        borderRadius:15,
        borderWidth:5,
        marginTop:25,
        alignSelf:'center',
        height:50,
        borderColor:'#363636',
        marginBottom:5,
    },
    buttonText : {
        padding:10,
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        textAlignVertical:'center',
    },
    dropDown:{
        marginTop:30,
        width:350,
        alignSelf:'center',
    },
    dropDownItems : {
        justifyContent:'flex-start'
    },
    flexContainer : {
        flexDirection:'row', 
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
    }
})