import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyZmx5fGVufDB8fDB8fHww',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Butterfly</Text>
          <Text style={styles.cardLabel}>Flying Insect</Text>
          <Text style={styles.cardDes}>
            A butterfly is a colorful insect from the Lepidoptera order, known for its four-stage life cycle: egg, caterpillar, pupa, and adult.
          </Text>
          <Text style={styles.cardFooter}>Tropical</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  cardDes: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  cardFooter: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0066cc',
  },
});
