import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Flipkart from USA?</Text>
        </View>
        <View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://www.shoppre.com/img/flp.jpg",
            }}
          />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.des} numberOfLines={3}>
            For all the Indian expats, NRIs, and lovers of Indian goods living in the USA, missing out on Flipkart’s incredible deals can be frustrating...
          </Text>
          <TouchableOpacity
            style = {styles.buttonStyle}
            onPress={() =>
              openWebsite('https://www.shoppre.com/blog/shop-from-flipkart-india-and-ship-to-usa')
            }
          >
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    flex: 1
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardElevated: {
    marginVertical: 10,
  },
  headingContainer: {
    backgroundColor: '#FFC107',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
  },
  des: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  readMore: {
    fontSize: 16,
    color: '#fff', // Changed from blue to white since the button is now blue
    fontWeight: '600',
  },
  buttonStyle: {
    height: 30,
    width: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    alignSelf: 'center', // 💥 This is what centers it inside the parent View
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginBottom : 10
  }
});
