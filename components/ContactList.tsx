import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contact = [
    {
      uid: 1,
      name: 'Ravi Gupta',
      status: 'Just a normal comedian',
      imageUrl: 'https://in.bmscdn.com/Artist/ravi-gupta-1063962-1728971205.jpg'
    },
    {
      uid: 2,
      name: 'Samay Raina',
      status: 'Kashmiri comedian hitting hard',
      imageUrl: 'https://assets.telegraphindia.com/telegraph/2025/Feb/1739262820_samay-raina.jpg'
    },
    {
      uid: 3,
      name: 'Zakir Khan',
      status: 'Part time comedian, fulltime life coach',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZeUe_2RQHh8BsSruNmgTKN0kBjX0sLdMVw&s'
    },
    {
      uid: 4,
      name: 'Gaurav Kapoor',
      status: 'Too much relatable hehe',
      imageUrl: 'https://usimg.sulekha.io/cdn/events/images/gaurav-kapoor_2024-02-08-03-11-22-960_56.webp'
    }
  ];

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contact.map((i) => (
          <View key={i.uid} style={styles.userCard}>
            <Image source={{ uri: i.imageUrl }} style={styles.userImage} />
            <View style={styles.cardBody}>
              <Text style={styles.userName}>{i.name}</Text>
              <Text style={styles.userStatus}>{i.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20
  },
  headingText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  container: {
    marginHorizontal: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  cardBody: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  userStatus: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});
