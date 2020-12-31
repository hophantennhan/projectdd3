import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Hà nội",
          lichtrinh: "Hà nội -  Sài Gòn",
          thoigian: "10h-22h",
          image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/131986212_1077022696074786_5327668342529318836_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vPT9o-2ysC4AX_rU4bF&_nc_ht=scontent.fsgn2-4.fna&oh=c6f59b6996394003e1984f95ca21af11&oe=60118766",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Đà nẵng",
          lichtrinh: "Hà nội -  Sài Gòn",
          thoigian: "10h-22h",
          image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/131986212_1077022696074786_5327668342529318836_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vPT9o-2ysC4AX_rU4bF&_nc_ht=scontent.fsgn2-4.fna&oh=c6f59b6996394003e1984f95ca21af11&oe=60118766",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Hồ chí minh",
          lichtrinh: "Hà nội -  Sài Gòn",
          thoigian: "10h-22h",
          image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/131986212_1077022696074786_5327668342529318836_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=vPT9o-2ysC4AX_rU4bF&_nc_ht=scontent.fsgn2-4.fna&oh=c6f59b6996394003e1984f95ca21af11&oe=60118766",
        },
      ]
    }

  }
  Item = ({ item, index }) => (
    <TouchableOpacity onPress={() => alert(index)} style={styles.itembackg}>
      <Image style={styles.image} source={{ uri: item.image }}></Image>
      <View style={styles.itemView}>
        <Text style={styles.title}>Địa điểm :{item.title}</Text>
        <Text style={styles.title}>Lịch trình:{item.lichtrinh}</Text>
        <Text style={styles.title}>Thời gian:{item.thoigian}</Text>
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

