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
export default class AddRecipeScreen extends Component {
    
    //Initialising constructor with state
    constructor(){
        super()
        this.state = {
            cuisine:'unknown',
            recipe:'',
            dishName:'',
            ingridients:'',
            background1 : 'white',
            background2 : 'white',
            background3 : 'white',
            background4 : 'white',

        }
    }

    addDish = ()=>{
        const recipe = this.state.recipe
        const ingridients = this.state.ingridients
        const cuisine = this.state.cuisine
        const dish = this.state.dishName

        if(recipe!='' && ingridients!='' && cuisine!=''&&dish!=''){
            db.collection('dishes').add({
                'dishName' : dish,
                'cuisine' : cuisine,
                'ingridients' : ingridients,
                'recipe' : recipe,
            })
    
            Alert.alert('Dish added succesfully')
            this.setState({
                cuisine:'',
                recipe:'',
                dishName:'',
                ingridients:'',
                background1 : 'white',
                background2 : 'white',
                background3 : 'white',
                background4 : 'white',
            })
        }

        else {
            Alert.alert('Please fill all entries')
        }

    }

    //Render function
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
                            //Alert.alert("Inside Icon Tag")
                        }}
                        style = {{alignSelf:'flex-start', marginTop:30, marginLeft:15,}}
                    >
                        <Icon
                            name = 'bars'
                            type = 'font-awesome'
                            color = 'white'    
                        />
                    </TouchableOpacity>
                    <Text style = {styles.header}>Add Recipes</Text>
                    <Text
                        style = {styles.subtitle}   
                    >
                        Have a great recipe in your mind which you think would be better enjoyed share with the world? People can upvote your recipes, and make it more widely known too! Scroll Down!
                    </Text>
                    <TextInput 
                        style = {[styles.textInput,]}
                        placeholder = 'Your Dish Name'
                        placeholderTextColor='white'
                        value = {this.state.dishName}
                        onChangeText = {(text)=>{
                            this.setState({
                                dishName:text,
                            })
                        }}
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
                        ]}
                        containerStyle = {styles.dropDown}
                        dropDownMaxHeight={1000}
                        itemStyle = {styles.dropDownItems}
                        style = {{backgroundColor:'#363636'}}
                        dropDownStyle={{backgroundColor:'#363636'}}
                        labelStyle = {{color:'white'}}
                        arrowColor='white'
                        placeholder = 'Select a Cuisine'
                        onChangeItem = {(item)=>{
                            this.setState({cuisine:item.value})
                            console.log(item.value)
                        }}
                    ></DropDownPicker>

                    <TextInput 
                        style = {[styles.textInput,]}
                        multiline = {true}
                        placeholder = 'Ingridients required'
                        placeholderTextColor='white'
                        value = {this.state.ingridients}
                        onChangeText = {(text)=>{
                            this.setState({
                                ingridients:text,
                            })
                        }}
                    ></TextInput>


                    <TextInput 
                        style = {[styles.textInput,{height:490}]}
                        multiline = {true}
                        placeholder = 'Your recipe, [Please enter steps in different lines]'
                        value = {this.state.recipe}
                        onChangeText = {(text)=>{
                            this.setState({
                                recipe:text,
                            })
                        }}
                    ></TextInput>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{this.addDish()}}
                    >
                        <Text style = {styles.buttonText}>I am done!</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        )
    }
}

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
        marginBottom:25
    },
    textInput:{
        marginTop:30,
        padding:10,
        alignSelf:'center',
        backgroundColor:'#363636',
        width:300,
        height:110,
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
        width:300,
        alignSelf:'center',
    },
    dropDownItems : {
        justifyContent:'flex-start'
    }
})