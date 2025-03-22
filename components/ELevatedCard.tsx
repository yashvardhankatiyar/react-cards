import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ELevatedCard() {
  return (
    <View>
      <Text style = {styles.headingText}>ELevated Card</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>more</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated, styles.lastcard]}>
          <Text>😃</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 10
  },
  card : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    width : 100,
    height : 100,
    borderRadius : 16,
    margin : 6,
  },
  cardElevated : {
    backgroundColor : '#cad5e2',
    elevation : 7,
    shadowOffset : {
      width : 1,
      height : 1
    },
    shadowColor : '#000000',
    shadowOpacity : 0.4,
    shadowRadius : 2
  },
  container : {
    padding : 10,
    
  }
  ,
  lastcard : {
    marginRight : 26
  }
})