import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <Text>Họ và tên</Text>
          <TextInput style={styles.textinput}>Phan Thanh Nhân</TextInput>
          <Text>Số điện thoại</Text>
          <TextInput style={styles.textinput}>0369741095</TextInput>
          <Text>Địa chỉ</Text>
          <TextInput style={styles.textinput}>28/8C Chương Dương</TextInput>

          <Text>Chuyến đi</Text>
          <TextInput style={styles.textinput}>Hà Nội</TextInput>
          <TouchableOpacity onPress={()=>alert(index)}style={styles.button}>
            <Text>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d02860'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,

  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,

  },
  textinput: {
    marginHorizontal: 3,
    borderRadius: 20,
    borderColor: '#000',
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
  },
  button:{
    borderRadius: 20,
    borderColor:'#000',
    borderWidth:1,
    width:150,
    flexDirection:'row',
    justifyContent:'center',
    padding:15,
    backgroundColor:'#d02860'
  }
});
