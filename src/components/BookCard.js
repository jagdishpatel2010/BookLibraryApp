import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

export default function BookCard({ book }) {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  // Responsive card sizing
  const cardWidth = width > 500 ? (width - 48) / 2 : width - 32;

  return (
    <TouchableOpacity 
      style={[styles.card, { width: cardWidth }]} 
      onPress={() => navigation.navigate('BookDetails', { book })}
      activeOpacity={0.9}
    >
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{book.name}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.categoryTag}>{book.category}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${book.price.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{book.rating}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.favButton} 
        onPress={() => toggleFavorite(book.id)}
      >
        <Ionicons 
          name={isFavorite(book.id) ? "heart" : "heart-outline"} 
          size={22} 
          color={isFavorite(book.id) ? "#E63946" : "#1D3557"} 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative'
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#EEE'
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D3557',
    paddingRight: 24
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 2
  },
  categoryTag: {
    backgroundColor: '#F1FAEE',
    color: '#457B9D',
    fontSize: 12,
    fontWeight: '600',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 6
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#E63946'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontSize: 13,
    marginLeft: 4,
    fontWeight: '600',
    color: '#1D3557'
  },
  favButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4
  }
});