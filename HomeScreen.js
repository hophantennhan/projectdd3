import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import Swipeout from 'react-native-swipeout';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [],

    }

  }

  componentDidMount() {
    this._getAllList();
  }
  _getAllList = () => {
    const ref = database().ref('/QuanLyTour/Tour/');
    ref.on('value', (snapshot) => {
      const DATA = [];
      snapshot.forEach((e) => {
        DATA.push(e._snapshot.value);
      });
      this.setState({ DATA });
      // this.setState({temp: DATA});
      // console.log('A ' + this.state.temp);
    });
  };

  _renderSearchBar = () => {
    return (
      <Searchbar
        placeholder={'Search Here...'}
        value={this.state.keySearch}
        editable={true}
        onChangeText={this._updateSearch}
      />
    );
  };

  Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate("ThongTinTour", { tour: this.state.DATA[index] })}
    onLongPress={() => this.props.navigation.navigate("ProfileScreen", { tour: this.state.DATA[index] })}
    style={styles.itembackg}>
      <Image style={styles.image} source={{ uri: item.photo }}></Image>
      <View style={styles.itemView}>
        <Text style={styles.title}>Địa điểm :{item.tenTour}</Text>
        <Text style={styles.title}>Lịch trình:{item.phuongTien}</Text>
        <Text style={styles.title}>Thời gian:{item.soLuongNguoi}</Text>
      </View>
    </TouchableOpacity>
  
  );

  render() {
const swipeSetting = {
  autoClose: true,
  onClose:(secId,rowId, direction) =>{

  },
  onOpen :(secId,rowId,direction)=>{

  },
  right:[{
    onPress:()=>{

    },
    text:'Delete',type:'delete'
  }],
rowId:this.props.index
};

    return (
      // <View style={styles.container}>
      //   <View style={styles.footer}>
      //     <Item
      //       item={item}
      //       onPress={() => setSelectedId(item.id)}
      //       style={{ backgroundColor }}
      //     />
      //   </View>
      // </View>

        <SafeAreaView>
                <Swipeout{...swipeSetting}>
          <FlatList
            data={this.state.DATA}
            renderItem={this.Item}
            keyExtractor={(item) => item.id}
          // extraData={selectedId}
          />
          </Swipeout>
        </SafeAreaView>

    )

  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#009387',


  },
  title: {
    fontSize: 18,
    flex: 4
  },
  itembackg: {
    backgroundColor: '#f9c2ff',
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    borderRadius: 20
  },
  image: {
    width: 100,
    height: 100,
    flex: 1.5,
    borderRadius: 20
  },
  itemView: {
    flex: 5,
    flexDirection: 'column'
  },
  text1: {
    fontSize: 32,
  }
});

