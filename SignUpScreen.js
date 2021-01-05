import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
FontAwesome.loadFont();
export default class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            repassword:'',
            check_textInputChange: false,
            secureTextEntry: true
        }
    }
    
    ThemTaiKhoan = async () => {
        const ref = database().ref('QuanLyTour/TaiKhoan/' + this.state.email);
        ref
          .set({
            email: this.state.email,
            password: this.state.password,
          })
          .then(() => console.log('Data seted'));
      };


    textInputChange = (val) =>{
        if( val.length !== 0){
         
            this.setState({email:val})
            this.setState({check_textInputChange:true})
        }
        else{     
            this.setState({email:val})
            this.setState({check_textInputChange:false})
        }    
    }
     handlePasswordChange = (val) =>{
        this.setState({password:val})
    }
    updateSecureTextEntry = () =>{
        this.setState({secureTextEntry:!secureTextEntry})
    }
    
    render(){
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View style={styles.footer}
                    animation="fadeInUpBig">
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
    
                        <FontAwesome
                            name='user-o' size={30} color='#777' />
                        <TextInput
                            placeholder="Your Email!"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText = {(val)=>this.setState({email:val})}
                        />
                        {this.state.check_textInputChange ? 
                        <Animatable.View
                        animation = "bounceIn"
                        >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={30}
                        />
                        </Animatable.View>
                        : null}
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 35 }]}>PassWord</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={30} />
                     <TextInput
                            placeholder="Enter your password!"
                            secureTextEntry={this.state.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText = {(password)=>this.setState({password:password})}
                        />
    
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirm PassWord</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={30} />
                        <TextInput
                            placeholder="Confirm PassWord!"
                            secureTextEntry={this.state.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText = {(val)=> this.handlePasswordChange(val)}
                        />
    
                    </View>
                    <View style = {styles.buton}>
                            <LinearGradient
                            colors={['#08d4c4','#01ab9d']}
                            style = {styles.signIn}
                            >
                                <Text style = {styles.textSign}>Sign Up</Text>
                                <TouchableOpacity
                        style={styles.button} onPress={() => this.ThemTaiKhoan()}>
                             
                        </TouchableOpacity>
                            </LinearGradient>

                        

                            <TouchableOpacity
                            onPress = {() => this.props.navigation.goBack()}
                            style = {[styles.signIn,{
                                borderColor:'#009387',
                                borderWidth:1,
                                marginTop:15
                            }]}
                            >
                                <Text style = {[styles.textSign,{
                                    color:'#009387'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                           
                    </View>
                </Animatable.View>
            </View>
            
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    centerView: {flexDirection: 'row', justifyContent: 'center'},
    textInput: {
      borderRadius: 20,
      borderColor: '#000',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    button: {
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
      },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    buton: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {

        fontSize: 18,
        fontWeight: 'bold',
        color:"white"
    }
});