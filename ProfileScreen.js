import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
}
render(){
  return(
    <View style ={styles.container}>
      <View style = {styles.footer}>
      <Text>123456787654</Text>
      </View>
    </View>
  )

}
};
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
      flex:1 ,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 30
  },
});
