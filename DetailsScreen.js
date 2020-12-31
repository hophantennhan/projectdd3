import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenTour: '',
      soLuongNguoi: '',
      giaTour: '',
      loTrinh: '',
      thoiGian: '',
      phuongTien: '',
      photo: '',
    };
  }
  
  uploadImage = async () => {
    const task = storage()
      .ref(`/ImageTour/${this.state.tenTour}/`)
      .putFile(this.state.photo);
    task.on('state_changed', (snapshot) => {
      console.log('snapshot: ' + snapshot);
    });
    try {
      await task;
    } catch (e) {
      console.log(e);
    }
    this.setState({
      photo: (
        await storage().ref(`/ImageTour/${this.state.tenTour}`).getDownloadURL()
      ).toString(),
    });
  };

  ThemTour = async () => {
    const {tenTour, soLuongNguoi, giaTour, loTrinh, thoiGian, phuongTien, photo} = this.state;

    if (
      tenTour != '' &&
      soLuongNguoi != '' &&
      giaTour != '' &&
      loTrinh != '' &&
      thoiGian != '' &&
      phuongTien != '' &&
      photo != '' 
     
    ) {
      await this.uploadImage();

      const ref = await database().ref('QuanLyTour/Tour/').push();
      ref
        .set({
          id: ref.key,
          tenTour: this.state.tenTour,
          soLuongNguoi: this.state.soLuongNguoi,
          giaTour: this.state.giaTour,
          loTrinh: this.state.loTrinh,
          thoiGian: this.state.thoiGian,
          phuongTien: this.state.phuongTien,
          photo: this.state.photo,
        })
        .then(() => alert('Success'));
    } else {
      alert('Vui lòng nh?p d?y d? các tru?ng!');
    }
  };

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          photo: source.uri,
        });
      }
    });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.centerView}>
          <Text style={styles.tieude}>THÊM TOUR</Text>
        </View>
        <View style={styles.view1}>
          <Text> Tên Tour : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({tenTour: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> S? Lu?ng Ngu?i : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({soLuongNguoi: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Giá Tour : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({giaTour: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> L? Trình : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({loTrinh: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Th?i Gian : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({thoiGian: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Phuong Ti?n : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({phuongTien: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Ch?n ?nh : </Text>
        </View>
        <TouchableOpacity style={styles.view1} onPress={this.selectFile}>
          <Image
            source={require('./assets/Logo.png')}
            style={{width: 50, height: 50}}></Image>
        </TouchableOpacity>
        <View>
          {this.state.photo == '' ? (
            <Image style={{marginHorizontal: 10}} />
          ) : (
            <Image
              source={{uri: this.state.photo}}
              style={{marginHorizontal: 10, width: 200, height: 200}}
            />
          )}
        </View>
        <View>
          <View style={styles.view3}>
            {/* style={styles.button} onPress={ () => this.ThemPhong()} */}
            <TouchableOpacity onPress = { () => this.ThemTour()}>
              <Text>Thêm Tour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ff7f50'},
  view1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#87cefa',
  },
  centerView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    marginHorizontal: 5,
    borderRadius: 20,
    borderColor: '#7fff00',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  tieude: {
    fontSize: 30,
    marginVertical: 30,
    color: '#008000',
  },
});
