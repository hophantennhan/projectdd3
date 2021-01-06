import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default class DanhSachHK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          ten: "Phan Thanh Nhân",
          sodienthoai: "0369741095",
          diachi: "28/8C Chương Dương, Linh Chiểu, HCM",
          image: "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.0-9/131986212_1077022696074786_5327668342529318836_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=KWPswn-GhfgAX-hoBL4&_nc_ht=scontent-xsp1-3.xx&oh=15495694eb0dcd94e247b2928ce123ee&oe=60197066",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          ten: "Nguyễn Thế Kiệt",
          sodienthoai: "0325698745",
          diachi: "Biên Hòa, Đồng Nai",
          image: "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/107014292_652259055369768_5451921477611814275_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a4a2d7&_nc_ohc=3s7fhqXiGAUAX-aXAOB&_nc_ht=scontent-xsp1-2.xx&oh=a111ace6b76df3c5351d2346767345c7&oe=601B6359",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          ten: "Đặng Tuấn Phong",
          sodienthoai: "0123654478",
          diachi: "KTX Đại Học Quốc Gia",
          image: "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/75047872_2427892550791584_1974604956568649728_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=clFUeWItSlEAX-Up5t-&_nc_ht=scontent-xsp1-2.xx&oh=83b505fcffc2197a232be7e01ee62495&oe=601A8ADD",
        },
      ]
    }

  }
  Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => alert(index)} style={styles.itembackg}>
      <Image style={styles.image} source={{ uri: item.image }}></Image>
      <View style={styles.itemView}>
        <Text style={styles.title}>Họ và Tên :{item.ten}</Text>
        <Text style={styles.title}>Số điện thoại:{item.sodienthoai}</Text>
        <Text style={styles.title}>Địa chỉ:{item.diachi}</Text>
      </View>


    </TouchableOpacity>
  );
  render() {
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
        <FlatList
          data={this.state.DATA}
          renderItem={this.Item}
          keyExtractor={(item) => item.id}
        // extraData={selectedId}
        />
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

