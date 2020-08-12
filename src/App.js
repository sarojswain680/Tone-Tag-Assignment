import React, { Component } from 'react';
import {
  Alert, BackHandler,


  Dimensions, FlatList, Image, ScrollView, StyleSheet,


  Text, TouchableOpacity, View
} from 'react-native';
import Add from './Assets/Icons/add.png';
import Header from './CommonModules/Header';
import ProductHorizontal from './CommonModules/ProductHorizontal';
import dummyImage from './HelperMethod/dummyData';
import data from './HelperMethod/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    const shopData = JSON.parse(JSON.stringify(data)).data
    this.setState({ data: this.state.data.concat(shopData) })
  }

  renderData = ({ item, index }) => {

    return (
      <View style={styles.cardImageStyle}>
        <Image
          style={styles.image}
          source={{ uri: item.store_image === '' ? dummyImage : item.store_image }}
        />
        <View style={styles.cardTextView}>
          <Text numberOfLines={2}>{item.name}</Text>
          <Text>{`${item.distance} Km.`}</Text>
          <Text>{`${item.start_time} - ${item.end_time}`}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Image source={Add} style={{ height: 20, width: 20, color: '#FF8C00' }} />
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  };


  onClick = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  };


  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Header onPress={() => this.onClick()} />
        <ScrollView horizontal={true}>
          {
            data.map((item, index) => {
              return (
                <ProductHorizontal
                  onPress={() => this.onPress()}
                  name={item.name}
                  image={item.store_image === '' ? dummyImage : item.store_image}
                />
              )
            })
          }
        </ScrollView>
        <ScrollView>
          <Text style={styles.textView}>Food Grains</Text>
          <FlatList
            keyExtractor={(index) => index.toString()}
            scrollIndicatorInsets={{ right: 1 }}
            data={this.state.data}
            style={{ flex: 1 }}
            renderItem={(item, index) => this.renderData(item, index)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardImageStyle: {
    height: 100,
    width: Dimensions.get('screen').width - 30,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 95,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardTextView: {
    marginLeft: 7,
    marginTop: 7,
    marginBottom: 15
  },
  addButton: {
    height: 25,
    width: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF8C00',
    bottom: 10,
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textView: {
    fontSize: 18,
    lineHeight: 33,
    fontWeight: "bold",
    alignItems: 'flex-start',
    marginHorizontal: 20
  },
});

export default App;
