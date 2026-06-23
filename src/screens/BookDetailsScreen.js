import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

export default function BookDetailsScreen({ route }) {
  const { book } = route.params;
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!book) {
    return <View style={styles.errorCenter}><Text>Failed to load data details.</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: book.image }} style={styles.coverImage} />
      <View style={styles.content}>
        <View style={styles.rowHeader}>
          <Text style={styles.title}>{book.name}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(book.id)}>
            <Ionicons name={isFavorite(book.id) ? "heart" : "heart-outline"} size={28} color="#E63946" />
          </TouchableOpacity>
        </View>
        <Text style={styles.author}>By {book.author}</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.tag}>{book.category}</Text>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{book.rating}</Text>
          </View>
        </View>

        <Text style={styles.price}>${book.price.toFixed(2)}</Text>
        <Text style={styles.sectionTitle}>Synopsis</Text>
        <Text style={styles.description}>{book.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  coverImage: { width: '100%', height: 320, resizeMode: 'cover' },
  content: { padding: 20 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1D3557', flex: 0.9 },
  author: { fontSize: 16, color: '#666', marginTop: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 12 },
  tag: { backgroundColor: '#F1FAEE', color: '#457B9D', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, fontWeight: 'bold' },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  ratingText: { marginLeft: 4, fontWeight: 'bold' },
  price: { fontSize: 24, fontWeight: 'bold', color: '#E63946', marginVertical: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1D3557', marginTop: 8, marginBottom: 6 },
  description: { fontSize: 15, color: '#457B9D', lineHeight: 22 },
  errorCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});