import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import {THEME} from "../theme"

export const Post = ({item}) => {

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.post}>

          <Image style={styles.image} source={{uri: item.photo[0].url}}/>
        
          <View style={styles.textWrap}>
            <Text style={styles.title}> {item.title} <Text style={styles.title}> {item.price} </Text></Text>
          </View>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    width: "100%",
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: '#ccc'
  },
  textWrap: {
    padding: 5,
    width: '100%',
    backgroundColor: '#bbb'
  },
  title: {    
    color: THEME.MAIN_COLOR,
    fontFamily: 'open-regular',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 100
  }
})
