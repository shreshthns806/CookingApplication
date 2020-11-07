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

//Initialising Class and Exporting it
export default class LoginSignupScreen extends Component {

    //Initialising Constructor with state
    constructor(){
        super();
        this.state = {
            emailID:'',
            password:'',
            isModalVisible:false,
            confirmPassword:'',
            username:'',
            mobileNumber:'',
            address:'',
            firstName:'',
            lastName:'',
        }
    }

    //Creating a function to show the signup modal
    showModal = ()=> {
        return(
            <Modal
                animationType = 'fade'
                transparent = {true}
                visible = {this.state.isModalVisible}
            >
                <View style = {modalStyles.container}>
                    <View style = {{justifyContent:'center'}}>
                    <View style = {{alignSelf:'flex-start', marginRight:20}}>
                        <Icon
                            name = 'arrow-left' 
                            type = 'feather' 
                            color = 'white' 
                            onPress = {()=>{
                                this.setState({
                                    isModalVisible:false
                                })
                            }}
                        ></Icon>
                    </View>
                        <ScrollView>
                            <KeyboardAvoidingView>
                                <View>
                                    <View>
                                        <TextInput
                                            style = {style = modalStyles.textInput}
                                            keyboardType = 'email-address'
                                            placeholder = 'Email ID'
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({
                                                        emailID:text,
                                                    })
                                                }
                                            }
                                            value = {this.state.emailID}
                                        ></TextInput>
                                        <TextInput
                                            style={style = modalStyles.textInput}
                                            placeholder='Password'
                                            secureTextEntry = {true}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({
                                                        password:text,
                                                    })
                                                }
                                            }
                                            value = {this.state.password} 
                                        ></TextInput>
                                        <TextInput
                                            style={style = modalStyles.textInput}
                                            placeholder='Confirm Password'
                                            secureTextEntry = {true}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({
                                                        confirmPassword:text,
                                                    })
                                                }
                                            }
                                            value = {this.state.confirmPassword} 
                                        ></TextInput>
                                        <TextInput
                                            placeholder = 'Contact Number'
                                            style = {style = modalStyles.textInput}
                                            keyboardType='numeric'
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({mobileNumber:text})
                                                }
                                            }
                                            maxLength={10}
                                            value = {this.state.mobileNumber}
                                        ></TextInput>
                                        <TextInput
                                            placeholder = 'Username'
                                            style = {style = modalStyles.textInput}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({username:text})
                                                }
                                            }
                                            maxLength={15}
                                            value = {this.state.username}
                                        ></TextInput>
                                        <TextInput
                                            placeholder = 'First Name'
                                            style = {style = modalStyles.textInput}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({firstName:text})
                                                }
                                            }
                                            maxLength={15}
                                            value = {this.state.firstName}
                                        ></TextInput>
                                        <TextInput
                                            placeholder = 'Last Name'
                                            style = {style = modalStyles.textInput}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({lastName:text})
                                                }
                                            }
                                            maxLength={15}
                                            value = {this.state.lastName}
                                        ></TextInput>
                                        <TextInput
                                            placeholder = 'Address'
                                            style = {style = modalStyles.textInput}
                                            onChangeText={
                                                (text)=>{
                                                    this.setState({address:text})
                                                    console.log(text)
                                                }
                                            }
                                            value = {this.state.address}
                                            multiline = {true}
                                            numberOfLines = {8}
                                        ></TextInput>
                                        <TouchableOpacity
                                            style = {[modalStyles.button]}
                                            onPress = {this.signup}
                                        >
                                            <Text style = {modalStyles.buttonText}>Sign Me Up!</Text>
                                        </TouchableOpacity>
                                        <Text style = {modalStyles.loginButtonLabel}>Already a user?</Text>
                                        <TouchableOpacity
                                            style = {[modalStyles.button,{marginBottom:30}]}
                                            onPress = {()=> {
                                                this.setState({
                                                    isModalVisible:false,
                                                })
                                            }}
                                        >
                                            <Text style = {modalStyles.buttonText}>Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }

    //A function to reset email and password
    reset = ()=> {
        this.setState({
            emailID:'',
            password:'',
        })
    }

    //Creating a function to sign the user up
    signup = async ()=> {
        
        //Creating Constants to store state values
        const email = this.state.emailID;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const address = this.state.address;
        const mobile = this.state.mobileNumber;
        const username = this.state.username;
        const firstname = this.state.firstName;
        const lastname = this.state.lastName;

        //An If statement to check if user has entered all Inputs
        //This If statement also checks if Password and Confirmed Passwords are equal or not
        if((email && password && confirmPassword && address && mobile && username && firstname && lastname)&&password==confirmPassword){
            
            //Try Statement
            try {
                
                //Calling API and creating a new user with Email and Password method
                const response = await firebase.auth().createUserWithEmailAndPassword(email,password)
                
                //Proceed only if response is true
                if(response){
                    
                    //Add a Collection 'users' where an AutoID Document is filled with these fields
                    db.collection('users').add({
                        'email' : email,
                        'password' : password,
                        'address' : address,
                        'contact' : mobile,
                        'username' : username,
                        'lastname' : lastname,
                        'firstname' : firstname,
                    })

                    //Give user an alert that they have been added succesfully as a user
                    Alert.alert('User added succesfully')

                    //Switch Screen
                    this.props.navigation.navigate('HomeScreen')
                }
            }

            //Catch statement which catches error
            catch(error){

                //Display the error message
                Alert.alert(error.message)                
            
            }

        }

        //An else-if statement to go to if password doesn't match confirmed password
        else if(password != confirmPassword){
            
            //Alert the user about the mismatch
            Alert.alert("Password doesn't match the confirmed password")
            
            //Reset values in the reqired fields
            this.setState({password:'', confirmPassword:''})
        }

        //An else statement to go to if none of the above statement is met
        else {
            
            //Display the error
            Alert.alert('Please fill all the entries')
        }
    }

    //Create a login function
    login = async (email,password)=> {
        
        //An if statement to check if email and password have been entered
        if(email && password){
            
            //Try Statement
            try{
                
                //Calling API and signing in the user
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                
                //Proceed only if response is true
                if(response){

                    //Alert the user that they have been logged in
                    Alert.alert('Login Succesfull')

                    //Switch Screen
                    this.props.navigation.navigate('HomeScreen')
                }
            }

            //Catch statement to catch error
            catch(error){
                
                //Switch statement on the error code
                switch(error.code){
                    
                    //Go to this case only if error code is 'auth/user-not-found'
                    case 'auth/user-not-found':
                        
                        //Alert the user
                        Alert.alert('User does not exist');
                        
                        break;

                    //Go to this case only if error code is 'auth/invalid-email'                        
                    case 'auth/invalid-email':
                        
                        //Alert the user
                        Alert.alert('Incorrect Email ID or password');
                        
                        break;

                    //Go to this case only if error code is 'auth/wrong-password'
                    case 'auth/wrong-password':
                        
                        //Alert the user
                        Alert.alert('Incorrect Password')
                        
                        break;
                    
                }
            }
        }

        //Else statement if If statement hasn't been met
        else{
            
            //Alert the user
            Alert.alert('Please Enter Email and Password!')
        }
    }

    //Render function
    render(){

        //Return statement
        return(
                <ScrollView
                    style = {styles.container}
                >
                    {this.showModal()}            
                   <Image
                        source = {{uri:'https://www.nicepng.com/png/full/280-2801282_soup-clipart-black-and-white-soup-clipart-black.png'}}
                        style={{ width: 150, marginTop:15, height: 180, alignSelf: 'center', marginBottom:5 }}
                    ></Image>
                    <Text
                        style = {styles.appHeader}
                    >Application Name</Text>
                    <TextInput
                        style = {styles.textInput}
                        placeholder = 'Enter your Email Address here.....'
                        placeholderTextColor = 'white'
                        keyboardType='email-address'
                        onChangeText={
                            (text)=>{
                                this.setState({
                                    emailID:text,
                                })
                            }
                        }
                        value = {this.state.emailID} 
                    ></TextInput>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your Password here.....'
                        placeholderTextColor = 'white'
                        secureTextEntry = {true}
                        onChangeText={
                            (text)=>{
                                this.setState({
                                    password:text,
                                })
                            }
                        }
                        value = {this.state.password} 
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress = {()=> {
                            this.login(this.state.emailID,this.state.password)
                            this.reset();

                        }}
                    >
                            <Text
                                style={styles.buttonText}
                            >
                                Login
                            </Text>
                        </TouchableOpacity>
                        <Text style = {styles.signupButtonLabel}>Not a user?</Text>
                        <TouchableOpacity
                            style={[styles.button,{marginTop:5}]}
                            onPress = {()=>{this.setState({
                                isModalVisible:true,
                            })}}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                Signup
                            </Text>
                        </TouchableOpacity>
                </ScrollView>  
        )
    }

}


//Creating Styles for the Modal
const modalStyles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'black',
        alignSelf : 'center',
        width:'100%'
    },
    title : {
        backgroundColor : '#3e978b',
        color : '#100C0D',
        fontSize : 23,
        padding : 5,
        alignContent : 'center',
        textAlign : 'center',
    },
    loginButtonLabel : {
        color:'white',
        textAlign:'center',
        marginTop:10
    },
    button : {
        backgroundColor:'#363636',
        width:150,
        marginTop:15,
        marginBottom : 5,
        borderRadius:15,
        alignSelf:'center',
        height:40,
    },
    buttonText : {
        padding:10,
        color:'white',
        alignSelf:'center',
    },
    textInput : {
        marginTop:20,
        padding:10,
        alignSelf:'center',
        backgroundColor:'#656565',
        width:250,
        color:"white",
    }
})

//Creating Styles for the render function
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'black',
        alignSelf : 'center',
        width:'100%'
    },
    applicationSubtitle : {
        textAlign:'center',
        fontSize:12,
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
        marginTop:25,
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
        fontSize:20,
        color:'white',
        textAlign:'center',
        fontFamily:'tomatoes',
    }
})