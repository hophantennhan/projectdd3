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
import {ScrollView} from 'react-native-gesture-handler';
import * as ImagePicker from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { useTheme } from '@react-navigation/native';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: this.props.route.params,
      tenTour: '',
      soLuongNguoi: '',
      giaTour: '',
      loTrinh: '',
      thoiGian: '',
      phuongTien: '',
      photo: '',
    };
  }

  componentDidMount() {
    this._getParam();
  }

  _getParam = async () => {
    await this.setState({tenTour: this.state.DATA.tour.tenTour});
    await this.setState({soLuongNguoi: this.state.DATA.tour.soLuongNguoi});
    await this.setState({giaTour: this.state.DATA.tour.giaTour});
    await this.setState({loTrinh: this.state.DATA.tour.loTrinh});
    await this.setState({thoiGian: this.state.DATA.tour.thoiGian});
    await this.setState({phuongTien: this.state.DATA.tour.phuongTien});
    await this.setState({photo: this.state.DATA.tour.photo});
    await this.setState({id: this.state.DATA.tour.id});
  };

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
        await storage()
          .ref(`/ImageTour/${this.state.tenTour}`)
          .getDownloadURL()
      ).toString(),
    });
  };

  _updateTour = async () => {
    if (
      this.state.tenTour != '' &&
      this.state.soLuongNguoi != '' &&
      this.state.giaTour != '' &&
      this.state.loTrinh != '' &&
      this.state.thoiGian != '' &&
      this.state.phuongTien != '' &&
      this.state.photo != ''
    ) {
      await this.uploadImage();
      await database()
        .ref(`QuanLyTour/Tour/${this.state.id}`)
        .update({
            tenTour: this.state.tenTour,
            soLuongNguoi: this.state.soLuongNguoi,
            giaTour: this.state.giaTour,
            loTrinh: this.state.loTrinh,
            thoiGian: this.state.thoiGian,
            phuongTien: this.state.phuongTien,
          photo: this.state.photo,
        })
        .then(() => alert('Cập nhật thành công!'));
    } else {
      alert('Vui lòng nhập đủ!');
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
          <Text style={styles.tieude}>Chỉnh sửa chuyến đi</Text>
        </View>
        <View style={styles.view1}>
          <Text> Tên chuyến đi : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.tenTour}
            onChangeText={(text) => this.setState({tenTour: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Só lượng người : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.soLuongNguoi}
            onChangeText={(text) => this.setState({soLuongNguoi: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Giá chuyến đi : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.giaTour}
            onChangeText={(text) => this.setState({giaTour: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Lộ trình: </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.loTrinh}
            onChangeText={(text) => this.setState({loTrinh: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Thời gian : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.thoiGian}
            onChangeText={(text) => this.setState({thoiGian: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Phương tiện: </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            defaultValue={this.state.phuongTien}
            onChangeText={(text) => this.setState({phuongTien: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Chọn ảnh : </Text>
        </View>
        <TouchableOpacity style={styles.view1} onPress={this.selectFile}>
          <Image
            source={require('./assets/camera.png')}
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
            <TouchableOpacity onPress={this._updateTour}style={styles.button}>
              <Text>Update Tour</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.view3}>
             <TouchableOpacity onPress = {()=> this.props.navigation.navigate("ExploreScreen")} style = {styles.button}>
               <Text>Thêm hành khách</Text></TouchableOpacity> 
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
    borderColor:'#000',
    borderWidth:1,
    width:150,
    flexDirection:'row',
    justifyContent:'center',
    padding:15,
    backgroundColor:'#d02860'
  },
  tieude: {
    fontSize: 30,
    marginVertical: 30,
    color: '#008000',
  },
});
