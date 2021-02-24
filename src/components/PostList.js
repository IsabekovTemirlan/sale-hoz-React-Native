import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import {useSelector} from 'react-redux'
import {Post} from "./Post"

export const PostList = () => {
  const ads = useSelector(state => state.ads.allAds)
  // const ads = [{_id: "23424234234234", title: 'Cow', price: 5000, photo: [{url: 'google.com'}]},
  // {_id: "23we24234234234", title: 'Cow', price: 5000, photo: [{url: 'google.com'}]}]

  
  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={ad => ad._id} 
        data={ads}
        renderItem={Post}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
  }
})
