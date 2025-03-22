import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ChikLife</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.card1]}>
          <Text>bathing</Text>
        </View>
        <View style = {[styles.card, styles.card2]}>
          <Text style = {styles.text}>sleeping</Text>
        </View>
        <View style = {[styles.card, styles.card3]}>
          <Text>laughing</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 10
  },
  container : {
    flex : 1,
    flexDirection : 'row',
    padding : 10
  },
  card : {
    width : 100,
    height : 100,
    borderRadius : 4,
    margin : 8,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  card1 : {
    backgroundColor : 'red'
  },
  card2 : {
    backgroundColor : 'blue'
  },
  card3 : {
    backgroundColor : 'yellow'
  },
  text : {
    color : '#ffffff'
  }
})