import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert
} from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  // const postId = navigation.getParam('postId')

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked })
  // }, [])

  // const removeHandler = () => {
  //   Alert.alert(
  //     'Удаление поста',
  //     'Вы точно хотите удалить пост?',
  //     [
  //       {
  //         text: 'Отменить',
  //         style: 'cancel'
  //       },
  //       { text: 'Удалить', style: 'destructive', onPress: () => {} }
  //     ],
  //     { cancelable: false }
  //   )
  // }

  return (
    <ScrollView>

      <View style={styles.textWrap}>
        <Text style={styles.title}>post screen</Text>
      </View>

    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={() => console.log('Press photo')}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
})
