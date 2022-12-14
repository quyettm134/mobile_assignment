import React from 'react'

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import { Actions } from 'react-native-router-flux'
const Item = ({item}) => {
  const gotoProductInfo = (i) => {
    Actions.ProductScreen(i)
  }
  return (
    <View>
      <TouchableOpacity
      onPress={() => gotoProductInfo(item)}>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={{uri: item.image}} 
            style={styles.image}
          />
          <View style={styles.details}>
            <Text numberOfLines={2} style={styles.name}>{item.bookName}</Text>
            <Text style={styles.price}>{item.price} đ</Text>
            <Text style={styles.location}>{item.bookRegion}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {
        item.orderList.includes(auth().currentUser.uid) ?
        <View style={styles.buybutton}>
        {/* <FontAwesome5 name='shopping-cart' size={24} color='#2f80ed'/> */}
        <Text style={{
          color: 'orange',
        }}>Đang chờ</Text>
        </View>
        : 
        <View></View>
      }
      
      {/* <View style={styles.buybutton}>
        <FontAwesome5 name='shopping-cart' size={24} color='#2f80ed'/>
      </View> */}
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    width: '100%',
    height: 140,
    marginTop: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '35%',
    height: '80%',
  },
  details: {
    width: '65%',
    height: '90%',
    marginLeft: '2%',
    justifyContent: 'space-evenly'
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'rgb(36, 36, 36)',
    width: '90%'
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    color: '#303030',
    // marginTop: 5,
  },
  location: {
    fontSize: 15,
    // marginTop: 40,
    color: '#5A5A5A'

  },
  buybutton: {
    position: 'absolute',
    top: '75%',
    // left: '80%',
    right: 20
  }
})
