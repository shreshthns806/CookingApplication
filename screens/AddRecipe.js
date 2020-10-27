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
 
 
//Creating and exporting class
export default class AddRecipeScreen extends Component {
    
    //Initialising constructor with state
    constructor(){
        super()
        this.state = {
            basicIngridients:'',
            requiredIngridients:'',
            cuisine:'',
            recipe:'',
            dishName:'',
            background1 : 'white',
            background2 : 'white',
            background3 : 'white',
            background4 : 'white',
            background5 : 'white',
            background6 : 'white',
            background7 : 'white',
            background8 : 'white',

        }
    }

    onTextInputFocus1 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background1 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background1 : 'white'
            })
        }
    }

    onTextInputFocus2 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background2 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background2 : 'white'
            })
        }
    }

    onTextInputFocus3 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background3 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background3 : 'white'
            })
        }
    }

    onTextInputFocus4 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background4 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background5 : 'white'
            })
        }
    }

    onTextInputFocus5 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background6 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background6 : 'white'
            })
        }
    }

    onTextInputFocus6 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background6 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background6 : 'white'
            })
        }
    }

    onTextInputFocus7 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background7 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background7 : 'white'
            })
        }
    }

    onTextInputFocus8 = (focus)=>{
        if(focus == 'focus'){
            this.setState({
                background8 : '#363636'
            })
        }

        if(focus == 'blur'){
            this.setState({
                background8 : 'white'
            })
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
                    >
                        <Icon
                            name = 'bars'
                            type = 'font-awesome'    
                            style = {{alignSelf:'flex-start', marginTop:30, marginLeft:15,}}
                        />
                    </TouchableOpacity>
                    <Text style = {styles.header}>Add Recipes</Text>
                    <Text
                        style = {styles.subtitle}   
                    >
                        Have a great recipe in your mind which you think would be better enjoyed share with the world? People can upvote your recipes, and make it more widely known too! Scroll Down!
                    </Text>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background1}]}
                        placeholder = 'Your Dish Name'
                        placeholderTextColor = 'black'
                        onFocus = {()=>{this.onTextInputFocus1('focus')}}
                        onBlur = {()=>{this.onTextInputFocus1('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background2}]}
                        multiline = {true}
                        placeholder = 'Is your dish friendly to any communities [Jain-Friendly, Vegan-Friendly, etc]? If so please mention'
                        onFocus = {()=>{this.onTextInputFocus2('focus')}}
                        onBlur = {()=>{this.onTextInputFocus2('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background3}]}
                        placeholder = 'Your cuisine, [French, Indian, Italian, etc]'
                        onFocus = {()=>{this.onTextInputFocus3('focus')}}
                        onBlur = {()=>{this.onTextInputFocus3('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background4}]}
                        multiline = {true}
                        placeholder = 'Ingridients which can be found in every household, [Salt, Pepper, Turmeric, Water, Masalas, etc]'
                        onFocus = {()=>{this.onTextInputFocus4('focus')}}
                        onBlur = {()=>{this.onTextInputFocus4('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background5}]}
                        multiline = {true}
                        placeholder = 'Ingridients which are necessary to make the dish and may not be available in all houses, [Potato, Tomato, Beans, Spinach, Brocolli, etc]'
                        onFocus = {()=>{this.onTextInputFocus5('focus')}}
                        onBlur = {()=>{this.onTextInputFocus5('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background6}]}
                        multiline = {true}
                        placeholder = 'Are there any replacable ingridients or ingridients which may not be necessary in the making of recipe? If so, please mention as ReplacableDish1/ReplacableDish2. If none, please write NA'
                        onFocus = {()=>{this.onTextInputFocus6('focus')}}
                        onBlur = {()=>{this.onTextInputFocus6('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{height:490, backgroundColor:this.state.background7}]}
                        multiline = {true}
                        placeholder = 'Your recipe, [Please enter steps in different lines]'
                        onFocus = {()=>{this.onTextInputFocus7('focus')}}
                        onBlur = {()=>{this.onTextInputFocus7('blur')}}
                    ></TextInput>
                    <TextInput 
                        style = {[styles.textInput,{backgroundColor:this.state.background8}]}
                        multiline = {true}
                        placeholder = 'Is there any extra information some people may need to know about this recipe? If none, then please write NA'
                        onFocus = {()=>{this.onTextInputFocus8('focus')}}
                        onBlur = {()=>{this.onTextInputFocus8('blur')}}
                    ></TextInput>
                    <TouchableOpacity
                        style = {styles.button}
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
        backgroundColor:'#656565',
        width:300,
        height:110,
        color:"black",
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
})