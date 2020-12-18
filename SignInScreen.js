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
FontAwesome.loadFont();
const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) =>{
        if( val.length !== 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
        }
        
    }
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password:val
        });
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        }); 
    }
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.text_header}>Wellcome!</Text>
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
                        onChangeText = {(val)=>textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
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
                        placeholder="Your PassWord!"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText = {(val)=> handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress = {updateSecureTextEntry}>
                            {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={30}
                    />
                    :
                    <Feather
                        name="eye"
                        color="grey"
                        size={30}
                    />
                            }
                    </TouchableOpacity>
                </View>
                <View style = {styles.buton}>
                        <LinearGradient
                        colors={['#08d4c4','#01ab9d']}
                        style = {styles.signIn}
                        >
                            <Text style = {styles.textSign}>Sign In</Text>
                        </LinearGradient>

                        <TouchableOpacity
                        onPress = {() => navigation.navigation('SignUpScreen')}
                        style = {[styles.signIn,{
                            borderColor:'#009387',
                            borderWidth:1,
                            marginTop:15
                        }]}
                        >
                            <Text style = {[styles.textSign,{
                                color:'#009387'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
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